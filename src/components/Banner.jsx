import { useRef } from "react";
import bannerImage from "../assets/ProfilePic1.jpg";
import bannerBackground from "../assets/banner_wallpaper2.svg";
import Typed from "typed.js";
import { useEffect } from "react";

const Banner = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Backend Developer", "Spring Boot Developer"], // Strings to display
      // Speed settings, try different values until you get good results
      startDelay: 100,
      typeSpeed: 50,
      backSpeed: 10,
      backDelay: 100,
      loop: true,
    });

    // Destroying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div
      id="banner"
      style={{
        backgroundImage: `url(${bannerBackground})`,
        backgroundSize: "cover",
      }}
      className="main-container flex flex-col sm:flex-row items-center text-white px-4 py-8"
    >
      <div className="w-full flex justify-center sm:w-1/2 sm:justify-start">
        <div className="space-y-2 sm:ml-10">
          <h3 className="text-xl sm:text-3xl font-semibold">Hi, I am </h3>
          <h1 className="text-3xl sm:text-5xl font-bold">Saurabh Shiradkar</h1>
          <h2 className="text-xl sm:text-3xl">
            I am <span className="font-bold" ref={el}></span>
          </h2>
          <p className="mt-4 text-sm sm:text-base">
            With 3+ years of experience as a Java Backend Developer and
            currently working as a DevOps Engineer, I specialize in Core Java,
            Spring Boot, SQL. I am committed to delivering high-quality
            solutions and I am dedicated to continuous learning,
            self-improvement, and contributing towards the growth of the
            organization.
          </p>

          <div className="icons-container flex space-x-3 sm:space-x-5">
            <a
              href="https://www.linkedin.com/in/saurabhshiradkar/"
              target="_blank"
              className="hover:bg-orange-600 border cursor-pointer px-2 py-2 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center bg-gray-800"
            >
              <i className="fa-brands text-2xl sm:text-4xl fa-linkedin"></i>
            </a>

            <a
              href="https://github.com/saurabhshiradkar"
              target="_blank"
              className="hover:bg-orange-600 border cursor-pointer px-2 py-2 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center bg-gray-800"
            >
              <i className="fa-brands text-2xl sm:text-4xl fa-github"></i>
            </a>

            <a
              href="https://www.youtube.com/@saurabhshiradkar"
              target="_blank"
              className="hover:bg-orange-600 border cursor-pointer px-2 py-2 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center bg-gray-800"
            >
              <i className="fa-brands text-2xl sm:text-4xl fa-youtube"></i>
            </a>

            <a
              href="https://www.instagram.com/saurabhshiradkar/"
              target="_blank"
              className="hover:bg-orange-600 border cursor-pointer px-2 py-2 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center bg-gray-800"
            >
              <i className="fa-brands text-2xl sm:text-4xl fa-instagram"></i>
            </a>
          </div>

          <a
            className="text-sm sm:text-xl p-2 bg-orange-500 rounded-full shadow-lg mt-4 inline-block"
            href="mailto:saurabhshiradkar@gmail.com"
          >
            Email: saurabhshiradkar@gmail.com
          </a>
        </div>
      </div>

      <div className="w-full flex justify-center sm:w-1/2">
        {/* image */}
        <img
          className="rounded-full my-2 shadow-lg w-32 h-32 sm:w-48 sm:h-48"
          src={bannerImage}
          alt="Saurabh Shiradkar"
        />
      </div>
    </div>
  );
};

export default Banner;
