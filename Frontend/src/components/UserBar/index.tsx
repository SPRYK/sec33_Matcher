import React from 'react';
import './index.scss';

const awesome = '/images/awesome.png';

interface UserProps {
  username: string;
}

const onclick = (e:any) => {
  //
}

export default ({ username }: UserProps) => {
  return (
    <div className="dropdown">
      <img
        className="navBarProfilePic"
        src={awesome}
        alt="awesome"
        width="18"
        height="18"
      ></img>
      <p className="dropButton">{username}</p>
      <div className="dropdown-content">
        <p>Profile</p>
        <p>Your Tasks</p>
        <p onClick={onclick}>Sign out</p>
      </div>
    </div>
  );
};
