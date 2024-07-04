import { useState } from "react";

const Header = () => {
  const [brandName] = useState("Saurabh Shiradkar");
  const [menuLinks] = useState([
    { title: "Home", link: "#banner", id: 1 },
    { title: "About", link: "#about", id: 2 },
    { title: "Skills", link: "#skills", id: 3 },
    // { title: "Portfolio", link: "#portfolio", id: 4 },
    { title: "Contact", link: "#footer", id: 5 },
  ]);

  const [actionButton] = useState({
    title: "Download CV",
    link: "https://drive.google.com/uc?export=download&id=1FgGIQJBp96A50sJNrdRwbuLDNHxxv6wB",
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = (link) => {
    document.querySelector(link).scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false); // Close the mobile menu after click
  };

  return (
    <>
      <div className="h-20 border main-container flex justify-between items-center px-4 sm:px-16 bg-gray-100">
        <div>
          {/* brand logo */}
          <h1 className="text-xl sm:text-2xl font-bold">{brandName}</h1>
        </div>

        <div className="hidden sm:flex space-x-3">
          {/* menu links */}
          {menuLinks.map((link) => (
            <a
              key={link.id}
              onClick={() => handleMenuClick(link.link)}
              href={link.link}
              className="hover:text-orange-600"
            >
              {link.title}
            </a>
          ))}
        </div>

        <div className="hidden sm:block">
          {/* buttons */}
          <a
            href={actionButton.link}
            className="px-3 py-2 sm:px-4 sm:py-2 bg-orange-500 shadow-lg hover:bg-orange-400 rounded-full text-base sm:text-2xl font-semibold text-white"
          >
            {actionButton.title}
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="sm:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu links */}
      {isMenuOpen && (
        <div className="sm:hidden bg-gray-100">
          {menuLinks.map((link) => (
            <a
              key={link.id}
              href={link.link}
              className="block px-4 py-2 hover:text-orange-600"
            >
              {link.title}
            </a>
          ))}
          <a
            href={actionButton.link}
            className=" text-center block mx-40 mb-2 p-2 bg-orange-500 shadow-lg hover:bg-orange-400 rounded-full text-base font-semibold"
          >
            {actionButton.title}
          </a>
        </div>
      )}
    </>
  );
};

export default Header;
