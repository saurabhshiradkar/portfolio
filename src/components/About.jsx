import { useState } from "react";
import bannerImage from "../assets/ProfilePic1.jpg";

const About = () => {
  const [data, setData] = useState({
    image: bannerImage,
    title:
      "Associate Software Engineer (ASE):- Mphasis Limited August-2021-Present",
    desc1: `With 3 years of experience as a Java backend developer, I have worked on an Insurance Domain Report Generation REST API project, designing insurance document charts using Jaspersoft Studio and Jasper Reports.`,
    desc2: ` Recently, I started focusing on DevOps projects at TATA AIA, creating and maintaining CI-CD pipelines using Jenkins for seamless integration and deployment.`,
    actionButton: {
      title: "Read More...",
      link: "/readmore",
    },
  });

  return (
    <>
      <div id="about" className="main-container py-16 bg-gray-100">
        <h1 className="text-center pb-16 text-3xl sm:text-5xl font-bold underline">
          About Me
        </h1>
        <div className="flex flex-col sm:flex-row items-center px-4">
          {/* image container */}
          <div className="w-full flex justify-center mb-8 sm:mb-0">
            <img
              className="rounded-full shadow-lg w-48 sm:w-64"
              src={data.image}
              alt="saurabh shiradkar"
            />
          </div>

          {/* text container */}
          <div className="w-full flex justify-center px-2">
            <div className="space-y-5 w-full sm:w-3/2 cursor-pointer bg-gray-200 p-5 text-center shadow-lg rounded-xl">
              <h1 className="text-xl sm:text-2xl text-justify font-semibold">
                {data.title}
              </h1>
              <p className="text-justify">{data.desc1}</p>
              <p className="text-justify">{data.desc2}</p>

              {/* <button className="bg-orange-500 px-3 py-2 text-2xl rounded-full shadow-lg">
                {data.actionButton.title}
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
