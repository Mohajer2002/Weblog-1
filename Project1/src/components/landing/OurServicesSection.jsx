import { ArrowUpLeftIcon } from "@heroicons/react/24/solid";

function OurServicesSection() {
  // data of services
  const services = [
    {
      name: "راه حل فناوری اطلاعات",
      icon: "/public/images/service_card_1.svg",
      shortInfo:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است",
      url: "#sl1",
    },
    {
      name: "خدمات مدیریت",
      icon: "/public/images/service_card_2.svg",
      shortInfo:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است",
      url: "#sl2",
    },
    {
      name: "طراحی وبسایت و اپلیکیشن موبایل",
      icon: "/public/images/service_card_3.svg",
      shortInfo:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است",
      url: "#sl3",
    },
    {
      name: "امنیت ردیابی داده ها",
      icon: "/public/images/service_card_4.svg",
      shortInfo:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است",
      url: "#sl4",
    },
  ];

  return (
    <div className="w-full h-auto relative pt-36 pb-60">
      <img
        src="/public/images/service_bg_1.png"
        alt="bg"
        className="rotate-180 absolute -z-50 bottom-0"
      />
      <div className="title flex flex-col justify-center items-center space-y-7">
        <span className="miniTitle flex flex-row items-start gap-x-3">
          <span className="squareIcon"></span>
          <h6 className="text-cBlack-100">خدمات ما</h6>
          <span className="squareIcon"></span>
        </span>
        <h2 className="bigTitle font-bold">خدماتی که ما ارائه میکنیم</h2>
        <p className="details">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز
        </p>
      </div>

      {/* services */}
      <div className="services flex flex-row justify-center items-stretch flex-wrap gap-3 mt-20 px-10 ">
        {services.map((service, index) => {
          return (
            <div
              key={index}
              className="w-[25rem] flex flex-col border-solid border-[#e6e7eb] border rounded-2xl bg-white overflow-hidden p-5 space-y-5 transition-all duration-500 hover:shadow-2xl hover:scale-[1.01] group"
            >
              <span className="w-20 h-20 bg-cBlue-100 rounded-2xl flex justify-center items-center">
                <img
                  src={service.icon}
                  alt="icon"
                  className="transition-all duration-300 group-hover:-scale-x-100"
                />
              </span>
              <a
                href={service.url}
                className="text-2xl md:text-3xl hover:text-cBlue-500"
              >
                {service.name}
              </a>
              <p>{service.shortInfo}</p>
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
