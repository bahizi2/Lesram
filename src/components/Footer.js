import "./FooterStyles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>Les Rams Consult LtD</h1>
          <p>Learning a little each day adds up.</p>
        </div>
        <div>
          <a href="/">
            <i className="fa-brands fa-facebook-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-instagram-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-behance-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-twitter-square"></i>
          </a>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h4>Permalinks</h4>
          <a href="/">Home</a>
          <a href="/">About Us</a>
          <a href="/">Contact</a>
        </div>

        <div>
          <h4>Projects</h4>
          <a href="/">Kibali</a>
          <a href="/">Scala</a>
          <a href="/">FAO</a>
          <a href="/">et.c</a>
        </div>

        <div>
          <h4>Contact Us</h4>
          <p>+256 414-67-03-78</p>
          <a href="/"></a>
          <a href="/"></a>
          <a href="/">lesramsconsult@gmail.com</a>
        </div>
      </div>
      <div className="copyright">
        <small>Copyright © All Rights Reserved</small>
      </div>
    </div>
  );
};

export default Footer;
