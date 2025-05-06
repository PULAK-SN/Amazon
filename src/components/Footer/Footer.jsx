import React from "react";
import "./Footer.css";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_backToTop" onClick={scrollToTop}>
        <a href="#backToTop">
          <p>back to top</p>
        </a>
      </div>

      <div className="footer__content-top">
        <div className="footer__content-top_links">
          <h1 className="app__footer-headtext">Get to Know Us</h1>
          <a href="/">
            <p>About Amazon</p>
          </a>
          <a href="">
            <p>Careers</p>
          </a>
          <a href="">
            <p>Press Releases</p>
          </a>
          <a href="">
            <p>Amazon Science</p>
          </a>
        </div>

        <div className="footer__content-top_links">
          <h1 className="app__footer-headtext">Connect with Us</h1>
          <a href="">
            <p>Facebook</p>
          </a>
          <a href="">
            <p>Twitter</p>
          </a>
          <a href="">
            <p>Instagram</p>
          </a>
        </div>

        <div className="footer__content-top_links">
          <h1 className="app__footer-headtext">Make Money with Us</h1>
          <a href="">
            <p>Sell on Amazon</p>
          </a>

          <a href="">
            <p>Sell under Amazon Accelerator</p>
          </a>

          <a href="">
            <p>Protect and Build Your Brand</p>
          </a>

          <a href="">
            <p>Amazon Global Selling</p>
          </a>

          <a href="">
            <p>Supply to Amazon</p>
          </a>

          <a href="">
            <p>Become an Affiliate</p>
          </a>

          <a href="">
            <p>Fulfilment by Amazon</p>
          </a>

          <a href="">
            <p>Advertise Your Products</p>
          </a>

          <a href="">
            <p>Amazon Pay on Merchants</p>
          </a>
        </div>

        <div className="footer__content-top_links">
          <h1 className="app__footer-headtext">Let Us Help You</h1>
          <a href="">
            <p>Your Account</p>
          </a>
          <a href="">
            <p>Returns Centre</p>
          </a>
          <a href="">
            <p>Recalls and Product Safety Alerts</p>
          </a>
          <a href="">
            <p>100% Purchase Protection</p>
          </a>
          <a href="">
            <p>Amazon App Download</p>
          </a>
          <a href="">
            <p>Help</p>
          </a>
        </div>
      </div>

      <div className="footer__content-buttom">
        <div className="footer__content-buttom_links">
          <a href="">
            <h5>AbeBooks</h5>
            <span>
              Books, art <br />& collectibles
            </span>
          </a>

          <a href="">
            <h5>Shopbop</h5>
            <span>
              Designer
              <br />
              Fashion Brands
            </span>
          </a>
        </div>

        <div className="footer__content-buttom_links">
          <a href="">
            <h5>AbeBooks</h5>
            <span>
              Books, art <br />& collectibles
            </span>
          </a>
          <a href="">
            <h5>Shopbop</h5>
            <span>
              Designer
              <br />
              Fashion Brands
            </span>
          </a>
        </div>

        <div className="footer__content-buttom_links">
          <a href="">
            <h5>AbeBooks</h5>
            <span>
              Books, art <br />& collectibles
            </span>
          </a>
          <a href="">
            <h5>Shopbop</h5>
            <span>
              Designer
              <br />
              Fashion Brands
            </span>
          </a>
        </div>

        <div className="footer__content-buttom_links">
          <a href="">
            <h5>AbeBooks</h5>
            <span>
              Books, art <br />& collectibles
            </span>
          </a>
          <a href="">
            <h5>Shopbop</h5>
            <span>
              Designer
              <br />
              Fashion Brands
            </span>
          </a>
        </div>
      </div>

      <div className="footer__line">
        <ul>
          <li>Conditions of Use & Sale</li>
          <li>Privacy Notice</li>
          <li>Interest-Based Ads</li>
        </ul>
        <span className="footer__copyright">
          © 1996-2025, Amazon.com, Inc. or its affiliates
        </span>
      </div>
    </div>
  );
};

export default Footer;
