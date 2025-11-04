'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { getRiskAssessment, type FormState } from '@/app/actions';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Loader2, AlertCircle, CheckCircle, Shield, List, Target } from 'lucide-react';

const initialState: FormState = {
  message: '',
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
      Assess Risk
    </Button>
  );
}

export default function RiskAssessmentForm() {
  const [state, formAction] = useFormState(getRiskAssessment, initialState);

  return (
    <Card className="w-full">
      <form action={formAction}>
        <CardHeader>
          <CardTitle className="font-headline">New Project Assessment</CardTitle>
          <CardDescription>
            Fill in the details below to generate a comprehensive risk analysis.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="projectDescription">Project Description</Label>
            <Textarea
              id="projectDescription"
              name="projectDescription"
              placeholder="e.g., Expansion of a soybean farm in Mato Grosso, including crop type, location, and business plan."
              required
              defaultValue={state.fields?.projectDescription}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="financialData">Financial Data</Label>
            <Textarea
              id="financialData"
              name="financialData"
              placeholder="e.g., Target funding of R$500,000, projected ROI of 15% p.a., and a 24-month repayment schedule."
              required
              defaultValue={state.fields?.financialData}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="marketAnalysis">Market Analysis</Label>
            <Textarea
              id="marketAnalysis"
              name="marketAnalysis"
              placeholder="e.g., Analysis of the global soybean market, local demand, competition, and pricing trends."
              required
              defaultValue={state.fields?.marketAnalysis}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="producerInformation">Producer Information</Label>
            <Textarea
              id="producerInformation"
              name="producerInformation"
              placeholder="e.g., Producer with 10+ years of experience, positive track record, and good credit history."
              required
              defaultValue={state.fields?.producerInformation}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="guarantees">Guarantees</Label>
            <Textarea
              id="guarantees"
              name="guarantees"
              placeholder="e.g., CPR (Cédula de Produto Rural) covering 120% of the invested amount, and alienation of the harvest."
              required
              defaultValue={state.fields?.guarantees}
            />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-start gap-4">
          <SubmitButton />
          {state.message && !state.data && (
            <Alert variant={state.issues ? 'destructive' : 'default'}>
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>{state.issues ? 'Error' : 'Status'}</AlertTitle>
              <AlertDescription>
                {state.message}
                {state.issues && (
                  <ul className="list-disc pl-5 mt-2">
                    {state.issues.map((issue, index) => <li key={index}>{issue}</li>)}
                  </ul>
                )}
              </AlertDescription>
            </Alert>
          )}
        </CardFooter>
      </form>
      {state.data && (
        <div className="p-6 pt-0">
          <Alert variant="default" className="bg-primary/10">
            <CheckCircle className="h-4 w-4 text-primary" />
            <AlertTitle className="text-primary font-bold">{state.message}</AlertTitle>
            <AlertDescription className="space-y-6 !mt-4 text-foreground">
              <Card>
                <CardHeader>
                  <CardTitle className="font-headline flex items-center gap-2">
                    <Shield className="text-primary"/> Overall Assessment
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="font-semibold">Risk Level:</span>
                    <Badge variant={
                      state.data.riskLevel.toLowerCase() === 'low' ? 'default' :
                      state.data.riskLevel.toLowerCase() === 'medium' ? 'secondary' : 'destructive'
                    } className="text-lg px-4 py-1">
                      {state.data.riskLevel}
                    </Badge>
                  </div>
                  <p>{state.data.overallAssessment}</p>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="font-headline flex items-center gap-2">
                      <List className="text-destructive"/> Key Risk Factors
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 list-disc list-inside">
                      {state.data.riskFactors.map((factor, index) => <li key={index}>{factor}</li>)}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="font-headline flex items-center gap-2">
                      <Target className="text-primary"/> Mitigation Strategies
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 list-disc list-inside">
                      {state.data.mitigationStrategies.map((strategy, index) => <li key={index}>{strategy}</li>)}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </AlertDescription>
          </Alert>
        </div>
      )}
    </Card>
  );
}
