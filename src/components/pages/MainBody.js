import { Fragment } from "react";

import logo from "../../assets/google.png";
import classes from "./MainBody.module.scss";

const MainBody = () => {
  return (
    <Fragment>
      <div className={classes.MainBody}>
        <div>
          <img src={logo} alt="google-logo" />
        </div>
        <div className={classes.input_container}>
          <img alt="icon" />
          <input type="text" />
          <img alt="icon" />
        </div>
        <div></div>
        <div></div>
      </div>
    </Fragment>
  );
};

export default MainBody;
