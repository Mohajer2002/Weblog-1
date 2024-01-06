import { PhoneIcon } from "@heroicons/react/24/solid";
function Navbar() {
  const items = [
    {
      name: "صفحه اصلی",
      url: "#1",
    },
    {
      name: "خدمات",
      url: "#2",
    },
    {
      name: "کارمندان",
      url: "#3",
    },
    {
      name: "دانلود اپ",
      url: "#4",
    },
    {
      name: "تماس باما",
      url: "#5",
    },
  ];

  return (
    <div className="header w-full h-20 bg-cBlue-100 fixed top-0 px-10 grid md:grid-cols-3 lg:grid-cols-4 md:px-10 lg:px-10 items-center z-50">
      {/* logo */}
      <div className="logo flex justify-center items-center">
        <img src="../../../public/images/logo.svg" alt="logo" />
      </div>

      {/* navbar items */}
      <nav className="hidden md:flex md:col-span-2 ">
        <ul className="flex flex-row md:gap-x-5 lg:gap-x-8">
          {items.map((item, index) => {
            return (
              <li key={index} className="flex items-center ">
                <a href={`${item.url}`} className="text-center">
                  {item.name}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* phone number */}
      <div className="hidden lg:flex flex-row gap-x-3 justify-center items-center">
        <div className="w-12 h-12 flex justify-center items-center bg-white rounded-full">
          <PhoneIcon className="w-6 h-6 fill-cBlue-400" />
        </div>
        <a href="tel: 09025033102">09025033102</a>
      </div>
    </div>
  );
}

export default Navbar;
