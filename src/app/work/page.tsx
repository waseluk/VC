import Footer from "@/app/components/footer/footer";
import ReviewSection from "@/app/components/reviews/reviewSection";
import TableSection from "@/app/components/table/tableSection";
import WorkSection from "@/app/components/work/workSection";
import WorkHero from "@/app/components/workpagehero/workhero";

export default function Work() {
  return (
    <>
      <WorkHero />
      <WorkSection />
      <TableSection />
      <ReviewSection />
      <Footer />
    </>
  );
}
