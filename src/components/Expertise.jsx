import bannerBackground from "../assets/banner_wallpaper1.png";

const Expertise = () => {
  return (
    <div id="skills" className="mt-2 mb-10">
      <h1 className="mb-8 sm:mb-16 text-3xl sm:text-5xl font-bold underline text-center">
        Skills
      </h1>

      {/* BOX SECTION */}
      <div
        style={{
          backgroundImage: `url(${bannerBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="box-container flex flex-col items-center py-8 sm:py-16 px-4 bg-cover bg-center"
      >
        <div className="text-white text-center space-y-4 px-3 mb-8 sm:mb-16">
          <h1 className="text-2xl sm:text-4xl font-bold">
            I have experience working on these technologies.
          </h1>
        </div>

        <div className="w-full flex justify-center">
          {/* SKILLS CONTAINER */}
          <div className="flex flex-wrap justify-center w-full sm:w-2/3 h-fit space-x-2 sm:space-x-3">
            {[
              "Core Java",
              "J2EE",
              "Spring Framework",
              "SpringBoot",
              "SQL",
              "Jenkins",
              "Docker",
              "GIT",
              "Linux OS",
            ].map((skill, index) => (
              <p
                key={index}
                className="text-lg sm:text-xl font-medium bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full shadow-lg mb-2 hover:bg-orange-500 cursor-pointer transition-colors"
              >
                {skill}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
