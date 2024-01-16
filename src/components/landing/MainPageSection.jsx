// MainPageSection component
function MainPageSection() {
  // Section 1: Main page section with two background images
  return (
    // Background image 1
    <div
      id="MainPageId"
      className="w-full h-screen bg-[url('/public/images/hero_bg_3_1.jpg')] bg-no-repeat bg-center bg-cover"
    >
      {/* Background image 2 with text content */}
      <div className="w-full h-full bg-[url('/public/images/hero_overlay_3.png')] bg-no-repeat bg-center bg-cover flex flex-col justify-center items-start !text-white space-y-5 px-2 md:px-20 pt-20">
        {/* Welcome message */}
        <p>به شرکت ما خوش آمدید</p>
        {/* Main heading with multiple lines */}
        <h1> فناوری شماره 1 جهان</h1>
        <h1> ارائه دهنده راه حل</h1>
        {/* Subheading with a brief description */}
        <h3 className="w-full lg:w-2/3">
          هدف خدمات فناوری اطلاعات ارائه راه‌حل‌های فناوری کارآمد و مؤثر است که
          به کسب‌وکارها در دستیابی به اهداف خود کمک می‌کند.
        </h3>
      </div>
    </div>
  );
}

export default MainPageSection;
