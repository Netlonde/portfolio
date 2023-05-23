"use client";

import { getGithubDataByName } from "@/service/Home/Home.request";
import { useEffect, useState } from "react";

function useHomeController() {
  const [avatar, setAvatar] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [isDarkUi, setIsDarkUi] = useState(false);

  async function getUserData() {
    const { avatar_url, email, name, bio } = await getGithubDataByName(
      "netlonde"
    );
    setAvatar(avatar_url);
    setEmail(email);
    setName(name);
    setBio(bio);
  }

  function handleClickDarkUi() {
    setIsDarkUi((prev) => !prev);
  }

  function redirectToLinkedin() {
    window.open(String(process.env.NEXT_PUBLIC_LINKEDIN_URL), "_blank");
  }

  function redirectToGithub() {
    window.open(String(process.env.NEXT_PUBLIC_GITHUB_PROFILE_URL), "_blank");
  }

  function sendEmail() {
    window.open(`mailto:${process.env.NEXT_PUBLIC_EMAIL_URL}`);
  }

  function handleClickIcon(variant: string) {
    if (variant === "linkedin") {
      redirectToLinkedin();
      return;
    }
    redirectToGithub();
  }

  useEffect(() => {
    getUserData();
  }, []);

  return {
    avatar,
    email,
    name,
    bio,
    handleClickDarkUi,
    handleClickIcon,
    sendEmail,
    isDarkUi,
  };
}

export default useHomeController;
