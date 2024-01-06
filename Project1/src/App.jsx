import EmplyeesSection from "./components/landing/EmplyeesSection";
import MainPageSection from "./components/landing/MainPageSection";
import OurServicesSection from "./components/landing/OurServicesSection";
import Navbar from "./components/navbar/Navbar";
function App() {
  return (
    <div className="flex flex-col justify-start items-start">
      <Navbar />
      <MainPageSection />
      <OurServicesSection />
      <EmplyeesSection />
    </div>
  );
}

export default App;
