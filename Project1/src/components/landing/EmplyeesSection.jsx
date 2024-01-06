import {
  ChatBubbleLeftEllipsisIcon,
  IdentificationIcon,
  LinkIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/solid";

function EmplyeesSection() {
  // data of employees
  const employees = [
    {
      fullName: "محمدحسین مهاجر",
      position: "کارمند",
      faceImg: "/public/images/team_1_1.jpg",
      socialMediaLinks: [
        {
          name: "twitter",
          link: "#twl",
          icon: (style) => {
            return <PaperAirplaneIcon className={style} />;
          },
        },
        {
          name: "linkedin",
          link: "#lkl",
          icon: (style) => {
            return <LinkIcon className={style} />;
          },
        },
        {
          name: "facebook",
          link: "#fbl",
          icon: (style) => {
            return <IdentificationIcon className={style} />;
          },
        },
        {
          name: "instagram",
          link: "#inl",
          icon: (style) => {
            return <ChatBubbleLeftEllipsisIcon className={style} />;
          },
        },
      ],
    },
    {
      fullName: "مهسا حسینی",
      position: "طراح",
      faceImg: "/public/images/team_1_2.jpg",
      socialMediaLinks: [
        {
          name: "twitter",
          link: "#twl",
          icon: (style) => {
            return <PaperAirplaneIcon className={style} />;
          },
        },
        {
          name: "linkedin",
          link: "#lkl",
          icon: (style) => {
            return <LinkIcon className={style} />;
          },
        },
        {
          name: "facebook",
          link: "#fbl",
          icon: (style) => {
            return <IdentificationIcon className={style} />;
          },
        },
        {
          name: "instagram",
          link: "#inl",
          icon: (style) => {
            return <ChatBubbleLeftEllipsisIcon className={style} />;
          },
        },
      ],
    },
    {
      fullName: "منصور مسعودی فر",
      position: "مدیرعامل",
      faceImg: "/public/images/team_1_3.jpg",
      socialMediaLinks: [
        {
          name: "twitter",
          link: "#twl",
          icon: (style) => {
            return <PaperAirplaneIcon className={style} />;
          },
        },
        {
          name: "linkedin",
          link: "#lkl",
          icon: (style) => {
            return <LinkIcon className={style} />;
          },
        },
        {
          name: "facebook",
          link: "#fbl",
          icon: (style) => {
            return <IdentificationIcon className={style} />;
          },
        },
        {
          name: "instagram",
          link: "#inl",
          icon: (style) => {
            return <ChatBubbleLeftEllipsisIcon className={style} />;
          },
        },
      ],
    },
    {
      fullName: "لادن رامندی",
      position: "بازاریاب",
      faceImg: "/public/images/team_1_4.jpg",
      socialMediaLinks: [
        {
          name: "twitter",
          link: "#twl",
          icon: (style) => {
            return <PaperAirplaneIcon className={style} />;
          },
        },
        {
          name: "linkedin",
          link: "#lkl",
          icon: (style) => {
            return <LinkIcon className={style} />;
          },
        },
        {
          name: "facebook",
          link: "#fbl",
          icon: (style) => {
            return <IdentificationIcon className={style} />;
          },
        },
        {
          name: "instagram",
          link: "#inl",
          icon: (style) => {
            return <ChatBubbleLeftEllipsisIcon className={style} />;
          },
        },
      ],
    },
  ];

  return (
    <div className="w-full h-auto relative py-36">
      <div className="title flex flex-col justify-center items-center space-y-7">
        <span className="miniTitle flex flex-row items-start gap-x-3">
          <span className="squareIcon"></span>
          <h6 className="text-cBlack-100">کارمندان</h6>
          <span className="squareIcon"></span>
        </span>
        <h2 className="bigTitle font-bold">کارشناسان ماهر برتر ما</h2>
      </div>

      {/* employees */}
      <div className="services flex flex-row justify-center items-stretch flex-wrap gap-3 mt-20 px-10 ">
        {employees.map((emp, index) => {
          return (
            <div
              key={index}
              className="w-[25rem] relative flex flex-col justify-center items-center border-solid border-[#e6e7eb] border rounded-2xl bg-white overflow-hidden space-y-5 transition-all duration-500 hover:shadow-2xl hover:scale-[1.01] group/container"
            >
              <img
                src={emp.faceImg}
                alt="faceImg"
                className="w-full h-full object-cover"
              />

              {/* information of employees */}
              <div className="information opacity-0 w-11/12 h-auto flex flex-col justify-center items-center transition-all duration-1000 group-hover/container:opacity-100  bg-white space-y-2 absolute bottom-5 m-auto rounded-xl p-5">
                <h3 className="font-extrabold">{emp.fullName}</h3>
                <p className="text-cBlue-400">{emp.position}</p>

                {/* Separator */}
                <span className="w-3/5 h-0 border"></span>
                <div className="Accounts flex flex-row pt-5">
                  {/*social media accounts*/}
                  {emp.socialMediaLinks.map((media, index) => {
                    return (
                      <a
                        key={index}
                        href={media.link}
                        className="w-10 h-10 mx-1 p-2 rounded-full bg-cBlue-100 flex justify-center items-center hover:bg-cBlue-500 group"
                      >
                        {media.icon("fill-cBlue-500 group-hover:fill-white ")}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default EmplyeesSection;
