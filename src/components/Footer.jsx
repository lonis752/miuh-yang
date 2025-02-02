import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <>
      <div className="flex flex-col items-center p-5 gap-1 max-w-screen">
        <Link to="/about">
          <p>About</p>
        </Link>
        <Link to="/contact">
          <p>Contact</p>
        </Link>
        <Link to="/privacy-policy">
          <p>Privacy Policy</p>
        </Link>
        <a href="/sitemap.xml">
          <p>Sitemap</p>
        </a>
        <div className="flex items-center gap-3">
          <Link to="/">
            <img
              width={30}
              src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/favicon-removebg-preview.png?updatedAt=1737666545585"
            />
          </Link>
          <p>{`© ${year} miuhyang.com All Rights Reserved.`}</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
