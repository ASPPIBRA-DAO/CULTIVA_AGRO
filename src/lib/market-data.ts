import 'server-only';

const CROP_TO_SYMBOL_MAP: Record<string, string> = {
  "Soybean": "ZS",
  "Coffee": "KC",
  "Corn": "ZC",
  // Avocado and Grapes are not standardly traded commodities with simple tickers.
  // We can add specific futures contracts if needed. For now, they won't fetch a price.
};

type TwelveDataPriceResponse = {
  price: string;
};

export async function getMarketPrice(cropType: string): Promise<string | null> {
  const symbol = CROP_TO_SYMBOL_MAP[cropType];
  if (!symbol) {
    return null; // Not all crop types have a corresponding market symbol
  }

  const apiKey = process.env.TWELVE_DATA_API_KEY;
  if (!apiKey) {
    console.error("Twelve Data API key is not set.");
    return null;
  }

  try {
    const url = `https://api.twelvedata.com/price?symbol=${symbol}&apikey=${apiKey}`;
    const response = await fetch(url, {
      // Revalidate data every hour
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      console.error(`Failed to fetch market price for ${symbol}: ${response.statusText}`);
      return null;
    }

    const data: TwelveDataPriceResponse = await response.json();
    const price = parseFloat(data.price);
    
    // Twelve Data gives prices in USD per bushel/pound. We'll format it as a generic price string.
    // This part can be adjusted based on the exact commodity and desired unit.
    // For now, formatting as USD for demonstration.
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price);

  } catch (error) {
    console.error(`Error fetching market price for ${symbol}:`, error);
    return null;
  }
}

export async function getMarketPrices(cropTypes: string[]) {
    const uniqueCropTypes = [...new Set(cropTypes)];
    const pricePromises = uniqueCropTypes.map(async (cropType) => {
        const price = await getMarketPrice(cropType);
        return { cropType, price };
    });

    const prices = await Promise.all(pricePromises);
    
    const priceMap = new Map<string, string | null>();
    prices.forEach(p => {
        priceMap.set(p.cropType, p.price);
    });

    return priceMap;
}
