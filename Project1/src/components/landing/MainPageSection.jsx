function MainPageSection() {
  // section1 [main page]
  return (
    // background1
    <div
      id="#1"
      className="w-full h-screen bg-[url('/public/images/hero_bg_3_1.jpg')] bg-no-repeat bg-center bg-cover mt-10"
    >
      {/* background2 */}
      <div className="w-full h-full bg-[url('/public/images/hero_overlay_3.png')] bg-no-repeat bg-center bg-cover flex flex-col justify-center items-start !text-white space-y-5 px-2 md:px-20 pt-20">
        <p>به شرکت ما خوش آمدید</p>
        <h1> فناوری شماره 1 جهان</h1>
        <h1> ارائه دهنده راه حل</h1>
        <h3 className="w-full lg:w-2/3">
          هدف خدمات فناوری اطلاعات ارائه راه‌حل‌های فناوری کارآمد و مؤثر است که
          به کسب‌وکارها در دستیابی به اهداف خود کمک می‌کند.
        </h3>
      </div>
    </div>
  );
}

export default MainPageSection;
