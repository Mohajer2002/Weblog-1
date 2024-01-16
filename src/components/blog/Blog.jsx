import {
  CalendarIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  ChevronLeftIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

// Base URL for fetching data
const BASEURL = "http://localhost:5000";

// Blog component
function Blog() {
  // Fetch data using the useFetch hook
  const { isLoading, data: news } = useFetch(BASEURL, "news");

  // If data is still loading, display a loading message
  if (isLoading) return <div>Loading...</div>;

  // Render the Blog component
  return (
    <div id="BlogId" className="blog w-full h-auto pb-32">
      {/* Header section with a background image */}
      <div className="w-full h-[80vh] flex justify-center items-center bg-[url('/public/images/breadcumb-bg.jpg')] bg-no-repeat bg-bottom bg-cover ">
        <h1 className="text-9xl font-extrabold">بلاگ</h1>
      </div>

      {/* Separator section */}
      <div className="w-full h-20 bg-gradient-to-b from-white to-cWhite"></div>

      {/* News section with a grid layout */}
      <div className="news w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 px-10">
        {/* Map through the news data and render individual news items */}
        {news.map((theNews) => {
          return (
            <div
              key={theNews.url}
              className="theNews flex flex-col justify-start boxAround p-5 md:p-7"
            >
              {/* Display the news image */}
              <img
                src={theNews.imgUrl}
                alt="image"
                className="rounded-2xl aspect-video object-cover"
              />

              {/* Details of the news */}
              <div className="details flex flex-col justify-start pt-5 space-y-3 text-wrap break-words">
                {/* Display the date with a calendar icon */}
                <div className="date flex flex-row items-center gap-x-4">
                  <CalendarIcon className="w-8 h-8 fill-cBlue-400" />
                  <span className="pt-3 text-cBlack-100 font-extrabold">
                    {theNews.date}
                  </span>
                </div>

                {/* Link to the full news with title and introduction */}
                <Link to={theNews.url} className="text-3xl font-extrabold">
                  {theNews.title}
                </Link>
                <p className="">{theNews.introduction}</p>

                {/* Link to read more with a chevron icon */}
                <Link
                  to={theNews.url}
                  className="flex flex-row items-center text-cBlue-900 font-extrabold group/link hover:text-cBlue-400"
                >
                  <h6>جزئیات بیشتر را بخوانید</h6>
                  <ChevronLeftIcon className="w-5 h-5 fill-cBlue-900 group-hover/link:fill-cBlue-400" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* Link to navigate to BlogCreator component */}
      <Link
        to={"/BlogCreatorId"}
        title="Add New Blog"
        className="w-[5rem] h-[4.5rem] overflow-hidden flex flex-row items-center gap-x-3 fixed bottom-5 right-5 boxAround p-2 bg-cBlue-100 group/item transition-[width] duration-[500ms] hover:w-56"
      >
        <ChatBubbleOvalLeftEllipsisIcon className=" min-w-16 min-h-16 fill-cBlue-400" />
        <h6 className="w-0 text-nowrap group-hover/item:w-full">
          اضافه کردن بلاگ
        </h6>
      </Link>
    </div>
  );
}

export default Blog;
