import DownloadAppSection from "./DownloadAppSection";
import EmplyeesSection from "./EmplyeesSection";
import MainPageSection from "./MainPageSection";
import OurServicesSection from "./OurServicesSection";

function Landing() {
  return (
    <div className="landing w-full ">
      <MainPageSection />
      <OurServicesSection />
      <EmplyeesSection />
      <DownloadAppSection />
    </div>
  );
}

export default Landing;
