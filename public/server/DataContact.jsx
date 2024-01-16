import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";

function DataContact() {
  const contactUs = [
    {
      type: "location",
      url: "#loc",
      info: "مشهد - خیابان سجاد - پلاک222",
      icon: (s) => {
        return <MapPinIcon className={s} />;
      },
    },
    {
      type: "call",
      url: "tel: 09025033102",
      info: "+989025033102",
      icon: (s) => {
        return <PhoneIcon className={s} />;
      },
    },
    {
      type: "email",
      url: "mailto: mohammadmohajer81@yahoo.com",
      info: "mohammadmohajer81@yahoo.com",
      icon: (s) => {
        return <EnvelopeIcon className={s} />;
      },
    },
  ];
  return contactUs;
}

export default DataContact;
