"use client";
/* eslint-disable @next/next/no-img-element */
import { FaDownload, FaLinkedinIn, FaGithub, FaUser } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { SiGmail } from "react-icons/si";
import Card from "@/components/Card/Card";
import BackGround, { LeftContainer } from "./index.style";
import useHomeController from "./index.controller";
import CustomButton from "../../components/CustomButton/CustomButton";
import About from "@/components/About/About";

export default function Home() {
  const {
    avatar,
    email,
    name,
    bio,
    handleClickDarkUi,
    handleClickIcon,
    isDarkUi,
    sendEmail,
  } = useHomeController();

  return (
    <BackGround isdarkcolor={isDarkUi}>
      <LeftContainer isdarkcolor={isDarkUi}>
        <div className="imageContainer">
          <img src={avatar} alt="avatar" />
        </div>
        <div className="tagContainer">
          <h5 className="tagTitle">Front-end Developer</h5>
        </div>
        <div className="tagContainer">
          <button className="tagButton">
            <FaDownload />
            <h5 className="tagTitle">Download Resume</h5>
          </button>
        </div>
        <div className="linksContainer">
          <button
            id="likedinIconButton"
            onClick={() => handleClickIcon("linkedin")}
          >
            <FaLinkedinIn />
          </button>

          <button id="githubIconButton" onClick={() => handleClickIcon("")}>
            <FaGithub />
          </button>
        </div>

        <div className="userInfoContainer">
          <p className="userInfoText">
            <FaUser />
            {name}
          </p>
          <p className="userInfoText">
            <SiGmail />
            {email || "carloscomercialti@gmail.com"}
          </p>
          <p className="userInfoText">
            <RiWhatsappFill />
            {"+55 79 9-8873-9264"}
          </p>
        </div>

        <div className="buttonContainer">
          <CustomButton text="Email me" handleClick={sendEmail} />
          <CustomButton text="Dark ui" handleClick={handleClickDarkUi} />
        </div>
      </LeftContainer>
      <About bio={bio} isDarkUi={isDarkUi} />
    </BackGround>
  );
}
