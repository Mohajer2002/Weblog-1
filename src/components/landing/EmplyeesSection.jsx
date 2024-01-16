import GetEmployees from "../../../public/server/dataEmployees";

// EmployeesSection component
function EmplyeesSection() {
  // Fetch employee data
  const employees = GetEmployees();

  return (
    <div id="EmployeesId" className="w-full h-auto relative py-36">
      {/* Title section with square icons */}
      <div className="title flex flex-col justify-center items-center space-y-7">
        <span className="miniTitle flex flex-row items-start gap-x-3">
          <span className="squareIcon"></span>
          <h6 className="text-cBlack-100">کارمندان</h6>
          <span className="squareIcon"></span>
        </span>
        {/* Main title */}
        <h2 className="bigTitle font-bold">کارشناسان ماهر برتر ما</h2>
      </div>

      {/* Employees section */}
      <div className="services flex flex-row justify-center items-stretch flex-wrap gap-3 mt-20 px-10">
        {employees.map((emp, index) => {
          return (
            // Employee card with image and information
            <div
              key={index}
              className="w-[15rem] sm:w-[20rem] relative flex flex-col justify-center items-center border-solid border-[#e6e7eb] border rounded-2xl bg-white overflow-hidden space-y-5 transition-all duration-500 hover:shadow-2xl hover:scale-[1.01] group/container"
            >
              {/* Employee face image */}
              <img
                src={emp.faceImg}
                alt="faceImg"
                className="w-full h-full object-cover"
              />

              {/* Information of employees (displayed on hover) */}
              <div className="information opacity-0 w-11/12 h-auto flex flex-col justify-center items-center transition-all duration-1000 group-hover/container:opacity-100 bg-white space-y-2 absolute bottom-5 m-auto rounded-xl p-5">
                {/* Employee full name */}
                <h3 className="font-extrabold">{emp.fullName}</h3>
                {/* Employee position */}
                <p className="text-cBlue-400">{emp.position}</p>

                {/* Separator */}
                <span className="w-3/5 h-0 border"></span>

                {/* Social media accounts */}
                <div className="Accounts flex flex-row pt-5">
                  {emp.socialMediaLinks.map((media, index) => {
                    return (
                      // Social media account links
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
