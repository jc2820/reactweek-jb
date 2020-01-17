import React from "react";
import Form from "./Form";
import Game from "./Game";
import "./PageSelect.css";

const PageSelect = (props) => {
    const [ userData, setUserData ] = React.useState({ name: "Player", avatarUrl: "https://source.unsplash.com/300x300/?giraffe" });
    const [ username, setUsername ] = React.useState("jc2820")
    const [connectPage, setConnectPage] = React.useState("form");

    if (connectPage === "form") {
        return (
          <Form
            userData={userData}
            setUserData={setUserData}
            username = {username}
            setUsername = {setUsername}
            setConnectPage={setConnectPage}
          />
        );
      } else if (connectPage === "game") {
        return (
          <Game
          userData={userData}
          setUserData={setUserData}
          username = {username}
          setUsername = {setUsername}
          setConnectPage={setConnectPage}
          />
        );
  };
}


  export default PageSelect;
