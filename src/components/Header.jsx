import React from "react";
import UserImage from "../assets/images/UserImage.png";
import TextsmsIcon from "@mui/icons-material/Textsms";
import NotificationsIcon from "@mui/icons-material/Notifications";
import "./Header.css";
import { useNavigate } from "react-router-dom";

function Header({ isOppen }) {
  const path = window.location.href.split("/").slice(3);
  const navigate = useNavigate();
  return (
    <div className="pageHeader border-bottom">
      <div className={`title m-left-20`}>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb breadcrumb-header">
            {path.map((e, i, a) => {
              return i === a.length - 1 ? (
                <li
                  key={i}
                  onClick={() => navigate(`/${path.join("/")}`)}
                  className="breadcrumb-item active cursor"
                  aria-current="page"
                >
                  {e}
                </li>
              ) : (
                <li
                  key={i}
                  onClick={() => navigate(`/${path.slice(0, i + 1).join("/")}`)}
                  className="breadcrumb-item cursor"
                >
                  {e}
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
      <div className="headerInfo">
          <div className="userHeaderIcon">
            <TextsmsIcon/>
          </div>
          <div className="userHeaderIcon">
            <NotificationsIcon/>
          </div>
          <div className="userImag">
            <img src={UserImage} alt="" />
          </div>
          <div className="userInfo">
          <div className='userInfo-username'>Ahmed Ali</div>
          <div className='userInfo-userRow'>Admin</div>
          </div>
      </div>
    </div>
  );
}

export default Header;
