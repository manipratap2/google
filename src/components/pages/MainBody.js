import { Fragment } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { MdMic } from "react-icons/md";

import logo from "../../assets/google.png";
import Button from "../Button";
import classes from "./MainBody.module.scss";

const MainBody = () => {
  return (
    <Fragment>
      <div className={classes.MainBody}>
        <div>
          <img src={logo} alt="google-logo" />
        </div>
        <div className={classes.input_container}>
          <div className={`${classes.icon} ${classes.search}`}>
            <a href="!#">
              <AiOutlineSearch />
            </a>
          </div>
          <input type="text" />
          <div className={`${classes.icon} ${classes.mic}`}>
            <a href="!#">
              <MdMic />
            </a>
          </div>
        </div>
        <div>
          <Button>Google Search</Button>
          <Button>I'm Feeling Lucky</Button>
        </div>
        <div></div>
      </div>
    </Fragment>
  );
};

export default MainBody;
