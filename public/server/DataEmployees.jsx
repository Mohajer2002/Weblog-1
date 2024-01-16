import { ChatBubbleLeftEllipsisIcon, IdentificationIcon, LinkIcon, PaperAirplaneIcon } from "@heroicons/react/24/solid";

export default function GetEmployees(){
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
  return employees;
}
