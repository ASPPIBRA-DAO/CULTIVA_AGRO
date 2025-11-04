'use server';
/**
 * @fileOverview An AI agent that assesses the risk profiles of potential agricultural projects.
 *
 * - assessProjectRisk - A function that handles the project risk assessment process.
 * - ProjectRiskAssessmentInput - The input type for the assessProjectRisk function.
 * - ProjectRiskAssessmentOutput - The return type for the assessProjectRisk function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ProjectRiskAssessmentInputSchema = z.object({
  projectDescription: z
    .string()
    .describe('Detailed description of the agricultural project, including crop type, location, and business plan.'),
  financialData: z
    .string()
    .describe('Key financial data of the project, such as target funding, projected ROI, and repayment schedule.'),
  marketAnalysis: z
    .string()
    .describe('Analysis of the market for the project products, including demand, competition, and pricing trends.'),
  producerInformation: z
    .string()
    .describe('Information about the producer, including experience, track record, and credit history.'),
  guarantees: z
    .string()
    .describe('Description of the guarantees offered by the producer, such as CPR or alienanation of the harvest.'),
});

export type ProjectRiskAssessmentInput = z.infer<typeof ProjectRiskAssessmentInputSchema>;

const ProjectRiskAssessmentOutputSchema = z.object({
  riskLevel: z
    .string()
    .describe('Overall risk level of the project (e.g., Low, Medium, High).'),
  riskFactors: z
    .array(z.string())
    .describe('Key risk factors identified in the project, such as market volatility or operational challenges.'),
  mitigationStrategies: z
    .array(z.string())
    .describe('Recommended mitigation strategies to address the identified risk factors.'),
  overallAssessment: z
    .string()
    .describe('A comprehensive assessment of the project risk profile.'),
});

export type ProjectRiskAssessmentOutput = z.infer<typeof ProjectRiskAssessmentOutputSchema>;

export async function assessProjectRisk(input: ProjectRiskAssessmentInput): Promise<ProjectRiskAssessmentOutput> {
  return assessProjectRiskFlow(input);
}

const prompt = ai.definePrompt({
  name: 'projectRiskAssessmentPrompt',
  input: {schema: ProjectRiskAssessmentInputSchema},
  output: {schema: ProjectRiskAssessmentOutputSchema},
  prompt: `You are an expert risk analyst specializing in agricultural projects.

You will use this information to assess the risk profile of the project, identify key risk factors, and suggest mitigation strategies.

Project Description: {{{projectDescription}}}
Financial Data: {{{financialData}}}
Market Analysis: {{{marketAnalysis}}}
Producer Information: {{{producerInformation}}}
Guarantees: {{{guarantees}}}

Based on the information provided, provide the following:

- riskLevel: Overall risk level of the project (Low, Medium, High).
- riskFactors: Key risk factors identified in the project.
- mitigationStrategies: Recommended mitigation strategies to address the identified risk factors.
- overallAssessment: A comprehensive assessment of the project risk profile.

Ensure that the risk assessment is aligned with investor needs and risk tolerance.
`,
});

const assessProjectRiskFlow = ai.defineFlow(
  {
    name: 'assessProjectRiskFlow',
    inputSchema: ProjectRiskAssessmentInputSchema,
    outputSchema: ProjectRiskAssessmentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
