import { Fragment } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { MdMic } from "react-icons/md";

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
          <AiOutlineSearch />
          <input type="text" />
          <MdMic />
        </div>
        <div></div>
        <div></div>
      </div>
    </Fragment>
  );
};

export default MainBody;
