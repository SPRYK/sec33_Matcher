import React, { useContext, useState } from "react";
import "./index.scss";
import { Input, Button } from "../../components";
import { ReactComponent as Chevron } from "../../assets/icons/chevron-right.svg";
import { Select } from "@material-ui/core";

export default () => {
  const [userCred, setUserCred] = useState({ text: '' });

  const handleChange = (field: string) => (e: any) => {
    setUserCred({
      ...userCred,
      [field]: e.target.value
    })
  }
  
  return (
    <div className="createTaskPage">
    <div className="row createTaskTitle">
      <div className="col-3">
          <h4 className="createTaskHeader">Edit Profile</h4>
      </div>
    </div>
    <div className="row messageTask">
      <div className="col-8">
        <p>You can create your task here. Click 'Launch task' after that.</p>
      </div>
    </div>
    <div className="row createTaskTitle">
      <div className="col-6">
        <Input variant="filled" onChange={handleChange('text')} label="Name" fullWidth />
      </div>
      <div className="col-6">
        <Input variant="filled" onChange={handleChange('text')} label="Surname" fullWidth />
      </div>
    </div>
    <div className="row createTaskTitle">
      <div className="col-6">
        <Input variant="filled" onChange={handleChange('text')} label="Password" fullWidth />
      </div>
      <div className="col-6">
      <Input variant="filled" onChange={handleChange('text')} label="Re-enter Password" fullWidth />
      </div>
    </div>
    <div className="row createTaskTitle">
      <div className="col-6">
        <Input variant="filled" onChange={handleChange('text')} label="mail" fullWidth />
      </div>
      <div className="col-6 createTaskTitle">
        <Button type="invert" fullWidth>Save changes<Chevron style={{ strokeWidth: 1 }} />
        </Button>
      </div>
    </div>
  </div>
  );
};  