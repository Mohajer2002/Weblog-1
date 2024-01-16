import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Landing from "./components/landing/Landing";
import Blog from "./components/blog/Blog";
import useScrollToSection from "./hooks/useScrollToSection";
import BlogCreator from "./components/blog/BlogCreator";
import { Toaster } from "react-hot-toast";

function App() {
  // Custom hook to scroll to a section based on the current pathname
  useScrollToSection();

  return (
    <div className="flex flex-col justify-start items-start pt-20">
      {/* Toast notifications container */}
      <Toaster />

      {/* Navigation bar component */}
      <Navbar />

      {/* React Router Routes */}
      <Routes>
        {/* Landing page route with optional ID parameter */}
        <Route path="/:id?" element={<Landing />} />

        {/* Blog page route */}
        <Route path="/BlogId" element={<Blog />} />

        {/* Blog creator page route */}
        <Route path="/BlogCreatorId" element={<BlogCreator />} />
      </Routes>

      {/* Footer component */}
      <Footer />
    </div>
  );
}

export default App;
