
'use server';

import { assessProjectRisk, type ProjectRiskAssessmentInput, type ProjectRiskAssessmentOutput } from '@/ai/flows/project-risk-assessment.flow';
import { z } from 'zod';

const formSchema = z.object({
  projectDescription: z.string().min(10, 'Project description is too short.'),
  financialData: z.string().min(10, 'Financial data is too short.'),
  marketAnalysis: z.string().min(10, 'Market analysis is too short.'),
  producerInformation: z.string().min(10, 'Producer information is too short.'),
  guarantees: z.string().min(10, 'Guarantees description is too short.'),
});

export type FormState = {
  message: string;
  fields?: Record<string, string>;
  issues?: string[];
  data?: ProjectRiskAssessmentOutput;
};

export async function getRiskAssessment(
  prevState: FormState,
  data: FormData
): Promise<FormState> {
  const formData = Object.fromEntries(data);
  const parsed = formSchema.safeParse(formData);

  if (!parsed.success) {
    const issues = parsed.error.issues.map((issue) => issue.message);
    return {
      message: 'Invalid form data',
      issues,
      fields: {
        projectDescription: data.get('projectDescription') as string,
        financialData: data.get('financialData') as string,
        marketAnalysis: data.get('marketAnalysis') as string,
        producerInformation: data.get('producerInformation') as string,
        guarantees: data.get('guarantees') as string,
      }
    };
  }
  
  try {
    const riskAssessmentResult = await assessProjectRisk(parsed.data as ProjectRiskAssessmentInput);
    return {
      message: 'Risk assessment completed successfully.',
      data: riskAssessmentResult,
    };
  } catch (error) {
    console.error(error);
    return {
      message: 'An unexpected error occurred during risk assessment.',
    };
  }
}
