'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import type { Project } from '@/lib/data';
import { Checkbox } from './ui/checkbox';
import Link from 'next/link';

interface InvestmentSimulatorProps {
  project: Project;
}

export function InvestmentSimulator({ project }: InvestmentSimulatorProps) {
  const [investmentAmount, setInvestmentAmount] = useState(1000);
  const [projectedReturn, setProjectedReturn] = useState(0);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const amount = Number(e.target.value);
    if (!isNaN(amount)) {
      setInvestmentAmount(amount);
      const roi = parseFloat(project.targetROI) / 100;
      setProjectedReturn(amount * roi);
    }
  };

  const formattedProjectedReturn = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(projectedReturn);
  const formattedTotal = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(investmentAmount + projectedReturn);

  return (
    <Card className="sticky top-8">
      <CardHeader>
        <CardTitle className="font-headline">Invest in this Project</CardTitle>
        <CardDescription>Simulate your return and proceed to invest.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="investment-amount">Investment Amount (BRL)</Label>
          <Input
            id="investment-amount"
            type="number"
            value={investmentAmount}
            onChange={handleAmountChange}
            min="500"
            step="100"
          />
        </div>
        <div className="space-y-3 rounded-md bg-secondary p-4">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Projected Return ({project.targetROI}):</span>
            <span className="font-bold">{formattedProjectedReturn}</span>
          </div>
          <div className="flex justify-between text-lg">
            <span className="text-muted-foreground">Total at Maturity:</span>
            <span className="font-bold text-primary">{formattedTotal}</span>
          </div>
        </div>
        <div className="items-top flex space-x-2 pt-2">
          <Checkbox id="terms" required />
          <div className="grid gap-1.5 leading-none">
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Acknowledge Risk
            </label>
            <p className="text-sm text-muted-foreground">
              I have read the project details and understand the{' '}
              <Link href="#" className="underline text-primary">
                risks involved
              </Link>
              .
            </p>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          Invest R$ {new Intl.NumberFormat('pt-BR').format(investmentAmount)}
        </Button>
      </CardFooter>
    </Card>
  );
}
