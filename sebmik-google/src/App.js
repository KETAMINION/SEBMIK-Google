import React from "react";
import "./App.css";
import Button from "./Button/Button";
import Input from "./Input/Input";
import Image from "./Image/Image";

function App() {
  return [
    <header className="header-container">
      <div className="left-header-container">
        <Button className="buttonAbout" buttonText="About" />
        <Button className="buttonStore" buttonText="Store" />
      </div>
      <div className="right-header-container">
        <Button className="buttonGmail" buttonText="Gmail" />
        <Button className="buttonImages" buttonText="Images" />
      </div>
    </header>,
    <div className="main">
      <Image
        className="logo"
        imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png"
      />
      <Input placeholder="🔎" />
      <div className="main-buttons-container">
        <Button className="buttonSearch" buttonText="Google Search" />
        <Button className="buttonLucky" buttonText="I'm Feeling Lucky" />
      </div>
    </div>,
  ];
}

export default App;
