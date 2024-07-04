const Footer = () => {
  return (
    <footer id="footer" className="py-5 border bg-gray-100 px-5 sm:px-20">
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <div className="mb-4 sm:mb-0">
          <p>
            &copy; 2024 Saurabh Sambha Shiradkar{" "}
            <span>All Rights Reserved</span>
            <br />
            Email: saurabhshiradkar@gmail.com
          </p>
        </div>
        <div className="flex flex-wrap gap-5 sm:gap-10">
          <a href="#" className="hover:underline">
            About
          </a>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Licensing
          </a>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
