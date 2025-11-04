import { PageHeader } from "@/components/page-header";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { myInvestments, portfolioSummary } from "@/lib/data";
import { DollarSign, BarChart, TrendingUp, CheckCircle, Clock } from "lucide-react";
import { format } from "date-fns";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader
        title="My Portfolio"
        subtitle="Track your investments and watch your portfolio grow."
      />

      <div className="grid gap-6 md:grid-cols-3 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Invested</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{portfolioSummary.totalInvested}</div>
            <p className="text-xs text-muted-foreground">
              across {myInvestments.length} projects
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Projected Returns</CardTitle>
            <BarChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{portfolioSummary.projectedReturns}</div>
            <p className="text-xs text-muted-foreground">
              based on target profitability
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average ROI</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{portfolioSummary.averageROI}</div>
            <p className="text-xs text-muted-foreground">
              across all investments
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="font-headline">My Investments</CardTitle>
          <CardDescription>
            An overview of all your current and past investments.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="investments">
            <TabsList className="mb-4">
              <TabsTrigger value="investments">Investments</TabsTrigger>
              <TabsTrigger value="updates">Timeline</TabsTrigger>
              <TabsTrigger value="statement">Financial Statement</TabsTrigger>
              <TabsTrigger value="documents">Documents</TabsTrigger>
            </TabsList>

            <TabsContent value="investments">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Project</TableHead>
                    <TableHead className="text-right">Amount Invested</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Target ROI</TableHead>
                    <TableHead>Maturity Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {myInvestments.map((investment) => (
                    <TableRow key={investment.id}>
                      <TableCell className="font-medium">{investment.projectName}</TableCell>
                      <TableCell className="text-right">{investment.amountInvested}</TableCell>
                      <TableCell>
                        <Badge variant={investment.status === 'Completed' ? 'default' : 'secondary'} className="capitalize">
                          {investment.status === 'Completed' ? <CheckCircle className="mr-1 h-3 w-3" /> : <Clock className="mr-1 h-3 w-3" />}
                          {investment.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-primary font-semibold">{investment.targetROI}</TableCell>
                      <TableCell>{format(investment.maturityDate, "MMM, yyyy")}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>

            <TabsContent value="updates">
                <Alert>
                    <AlertTitle>Coming Soon!</AlertTitle>
                    <AlertDescription>
                        This section will feature a timeline of updates from the producers of your invested projects.
                    </AlertDescription>
                </Alert>
            </TabsContent>

            <TabsContent value="statement">
                <Alert>
                    <AlertTitle>Coming Soon!</AlertTitle>
                    <AlertDescription>
                        This section will provide a detailed financial statement of your investments and returns.
                    </AlertDescription>
                </Alert>
            </TabsContent>

            <TabsContent value="documents">
                <Alert>
                    <AlertTitle>Coming Soon!</AlertTitle>
                    <AlertDescription>
                        This section will be a library of all your signed contracts and income reports for tax purposes.
                    </AlertDescription>
                </Alert>
            </TabsContent>

          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
