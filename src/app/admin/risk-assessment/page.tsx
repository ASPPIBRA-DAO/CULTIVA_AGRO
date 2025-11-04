import { PageHeader } from "@/components/page-header";
import RiskAssessmentForm from "./risk-assessment-form";

export default function RiskAssessmentPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader
        title="Project Risk Profiling"
        subtitle="Use our AI-powered tool to assess the risk profile of potential agricultural projects."
      />
      <div className="max-w-4xl mx-auto">
        <RiskAssessmentForm />
      </div>
    </div>
  );
}
