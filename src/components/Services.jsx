const Services = () => {
  return (
    <>
      <div id="services" className="main-container py-14">
        <h1 className="text-3xl sm:text-5xl font-bold text-center underline">
          Currently working on
        </h1>
        <div className="services-container flex flex-col sm:flex-row mt-12 space-y-5 sm:space-y-0 sm:space-x-5 px-5 sm:px-10">
          <div className="cursor-pointer bg-slate-100 hover:bg-gray-200 p-5 text-center shadow-lg rounded-xl service1 space-y-4">
            <i className="text-4xl sm:text-5xl fa-brands fa-java"></i>
            <h1 className="text-2xl sm:text-4xl">Core Java</h1>
            <p className="text-justify text-sm sm:text-base">
              With expertise in Java-based technologies, I have designed and
              implemented various insurance document certificate charts using
              Jaspersoft Studio and Jasper Reports, ensuring high-quality and
              efficient reporting solutions.
            </p>
            {/* <button className="px-3 py-2 bg-orange-500 rounded-full shadow-lg text-2xl">
              Check
            </button> */}
          </div>

          <div className="cursor-pointer bg-slate-100 hover:bg-gray-200 p-5 text-center shadow-lg rounded-xl service2 space-y-4">
            <i className="text-4xl sm:text-5xl fa-brands fa-dev"></i>
            <h1 className="text-2xl sm:text-4xl">Backend Development</h1>
            <p className="text-justify text-sm sm:text-base">
              As a backend developer, I have successfully developed a JAX-RS
              REST API project that generates insurance documents in multiple
              formats, streamlining document generation and enhancing data
              accessibility.
            </p>
            {/* <button className="px-3 py-2 bg-orange-500 rounded-full shadow-lg text-2xl">
              Check
            </button> */}
          </div>

          <div className="cursor-pointer bg-slate-100 hover:bg-gray-200 p-5 text-center shadow-lg rounded-xl service3 space-y-4">
            <i className="text-4xl sm:text-5xl fa-solid fa-infinity"></i>
            <h1 className="text-2xl sm:text-4xl">DevOps</h1>
            <p className="text-justify text-sm sm:text-base">
              In my DevOps role, I create and maintain CI-CD pipelines using
              Jenkins, ensuring seamless continuous integration and deployment
              for both new and existing projects at TATA AIA.
            </p>
            {/* <button className="px-3 py-2 bg-orange-500 rounded-full shadow-lg text-2xl">
              Check
            </button> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
