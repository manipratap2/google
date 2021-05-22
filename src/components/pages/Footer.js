import classes from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.country}>
        <p>India</p>
      </div>
      <div className={classes.footer_menu}>
        <div>
          <a href="!#">About</a>
          <a href="!#">Advertising</a>
          <a href="!#">Business</a>
          <a href="!#">How Search Works</a>
        </div>
        <div>
          <a href="!#">Privacy</a>
          <a href="!#">Terms</a>
          <a href="!#">Settings</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
