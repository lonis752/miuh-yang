import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="flex flex-col items-center p-5 gap-1 bg-gray-50">
        <Link to="/miuh-yang/about">
          <p>About</p>
        </Link>
        <Link to="/miuh-yang/contact">
          <p>Contact</p>
        </Link>
        <Link to="/miuh-yang/privacy-policy">
          <p>Privacy Policy</p>
        </Link>
        <Link to="/sitemap.xml">
          <p>Sitemap</p>
        </Link>
        <div className="flex items-center gap-3">
          <img
            width={30}
            src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/favicon-removebg-preview.png?updatedAt=1737666545585"
          />
          <p>@ 2025 miuhyang.com All rights reserved</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
