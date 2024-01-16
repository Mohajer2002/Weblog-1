import { Link } from "react-router-dom";
import { links } from "../../../public/server/dataLinks";
import DataContact from "./../../../public/server/DataContact";

// Footer component
function Footer() {
  // Fetch contact information
  const contacts = DataContact();

  return (
    <div
      id="5"
      className="footer w-full bg-cBlue-900 text-cWhite overflow-hidden"
    >
      {/* Grid layout for footer sections */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5">
        {/* About Us section */}
        <div className="footerItem flex flex-col col-span-1 gap-y-3 bg-[#03112b]">
          <h3>درباره ما</h3>
          <p className="w-5/6">
            {/* Brief description about the company */}
            هدف خدمات فناوری اطلاعات ارائه راه‌حل‌های فناوری کارآمد و مؤثر است
            که به کسب‌وکارها در دستیابی به اهداف خود کمک می‌کند.دف خدمات فناوری
            اطلاعات ارائه راه‌حل‌های فناوری کارآمد و مؤثر است که به کسب‌وکارها
            در دستیابی به اهداف خود کمک می‌کند.
          </p>
        </div>

        {/* Links section */}
        <div className="nav footerItem bg-[#03112b] flex flex-col">
          <h3>پیوند ها</h3>
          <nav>
            {/* List of links */}
            <ul className="flex flex-col items-center font-bold md:gap-y-3 lg:gap-y-5">
              {links.map((item, index) => {
                return (
                  <li key={index} className="flex items-center">
                    {/* Links to different pages */}
                    <Link to={item.url} className="text-center text-cBlack-100">
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        {/* Contact Us section */}
        <div className="footerItem flex flex-col col-span-1 gap-y-3 bg-[#03112b]">
          <h3>تماس با ما</h3>
          <div className=" addreses w-full flex flex-col gap-y-4 ">
            {/* Display contact information */}
            {contacts.map((contact, index) => {
              return (
                <a
                  href={contact.url}
                  key={index}
                  className="content group/item"
                >
                  {/* Display contact icon */}
                  <span className="smallIcon">{contact.icon("icon")}</span>
                  {/* Display contact information */}
                  <p className="group-hover/item:linkHover">{contact.info}</p>
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Copyright information */}
      <div className="copyRight w-full p-5 flex justify-center items-center text-center">
        <p>کپی رایت © برای Mohajer_2002 محفوظ است</p>
      </div>
    </div>
  );
}

export default Footer;
