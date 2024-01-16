import { ArrowUpLeftIcon } from "@heroicons/react/24/solid";
import { services } from "../../../public/server/dataServices";

// OurServicesSection component
function OurServicesSection() {
  return (
    <div id="ServicesId" className="w-full h-auto relative pt-36 pb-60">
      {/* Background image */}
      <img
        src="/public/images/service_bg_1.png"
        alt="bg"
        className="w-full rotate-180 absolute -z-50 bottom-0"
      />
      {/* Title section with square icons */}
      <div className="title flex flex-col justify-center items-center space-y-7">
        <span className="miniTitle flex flex-row items-start gap-x-3">
          <span className="squareIcon"></span>
          <h6 className="text-cBlack-100">خدمات ما</h6>
          <span className="squareIcon"></span>
        </span>
        {/* Main title */}
        <h2 className="bigTitle font-bold">خدماتی که ما ارائه می‌کنیم</h2>
        {/* Details about services */}
        <p className="details">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز
        </p>
      </div>

      {/* Services section */}
      <div className="services flex flex-row justify-center items-stretch flex-wrap gap-3 mt-20 px-10">
        {services.map((service, index) => {
          return (
            // Service card with icon, name, short info, and arrow icon
            <div
              key={index}
              className="w-[15rem] sm:w-[20rem] flex flex-col boxAround overflow-hidden p-5 space-y-5 group"
            >
              {/* Service icon */}
              <span className="w-20 h-20 bg-cBlue-100 rounded-2xl flex justify-center items-center">
                <img
                  src={service.icon}
                  alt="icon"
                  className="transition-all duration-300 group-hover:-scale-x-100"
                />
              </span>
              {/* Service name */}
              <a
                href={service.url}
                className="text-2xl md:text-3xl hover:text-cBlue-500"
              >
                {service.name}
              </a>
              {/* Short information about the service */}
              <p>{service.shortInfo}</p>
              {/* Arrow icon with a link to the service */}
              <a href={service.url}>
                <ArrowUpLeftIcon className="w-6 h-6 fill-cBlue-500 font-bold stroke-2 transition-all duration-500 hover:rotate-[315deg] hover:fill-cBlack-500" />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OurServicesSection;
