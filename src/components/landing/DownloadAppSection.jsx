import { apps } from "../../../public/server/dataApps";

// DownloadAppSection component
function DownloadAppSection() {
  return (
    <div
      id="DownloadAppId"
      className="min-w-full bg-[url('/public/images/service_bg_1.png')] bg-no-repeat bg-top bg-contain mb-56"
    >
      {/* Title section with background image */}
      <div className="title flex flex-col justify-center items-center space-y-7">
        {/* Mini title with square icons */}
        <span className="miniTitle flex flex-row items-start gap-x-3">
          <span className="squareIcon"></span>
          <h6 className="text-cBlack-100">دانلود اپ</h6>
          <span className="squareIcon"></span>
        </span>
        {/* Main title */}
        <h2 className="bigTitle font-bold text-center">
          دانلود اپ برای Android و ios
        </h2>
      </div>

      {/* Download buttons section */}
      <div className="w-full relative text-center grid grid-cols-1 lg:grid-cols-2 mt-20 px-10">
        {/* Store section with download buttons */}
        <div className="store flex flex-col gap-y-10 justify-center items-center ">
          {apps.map((app, index) => {
            return (
              <a
                href={app.downloadLink}
                key={index}
                className="btn flex flex-row justify-center items-center shadow-lg shadow-cBlue-400 hover:text-cBlue-100 z-10 "
              >
                {/* Button text with OS name */}
                <h3 className="font-extrabold pt-2">
                  Download for {app.nameOS}
                </h3>
                {/* App icon */}
                <img src={app.iconUrl} alt={app.nameOS} className="h-4/6" />
              </a>
            );
          })}
        </div>

        {/* Background vector image */}
        <img
          src="/public/images/vector_1.png"
          alt="vector_1"
          className="absolute w-full opacity-30 lg:static lg:opacity-100 "
        />
      </div>
    </div>
  );
}

export default DownloadAppSection;
