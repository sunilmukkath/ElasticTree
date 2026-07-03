import AIPoweredStrip from "@/components/home/AIPoweredStrip";
import ServicePillars from "@/components/home/ServicePillars";
import TableShareSection from "@/components/home/TableShareSection";
import CaseStudiesPreview from "@/components/home/CaseStudiesPreview";
import ProcessSteps from "@/components/home/ProcessSteps";
import ClientLogos from "@/components/home/ClientLogos";
import Testimonials from "@/components/home/Testimonials";
import LeadershipTeam from "@/components/home/LeadershipTeam";

export default function HomeBelowFold() {
  return (
    <>
      <AIPoweredStrip />
      <ServicePillars />
      <TableShareSection />
      <CaseStudiesPreview />
      <ProcessSteps />
      <ClientLogos />
      <Testimonials />
      <LeadershipTeam />
    </>
  );
}
