import Card from "@/components/Card/Card";
import { BackGround } from "./About.style";
import { IAboutProps } from "./About.props";

export default function About(props: IAboutProps) {
  const { bio, isDarkUi, toogleModal } = props;

  return (
    <BackGround isdarkcolor={isDarkUi}>
      <div className="header">
        <h3 className="title">About</h3>
        <div className="headButtonsContainer">
          <button className="buttonText" onClick={toogleModal}>
            Projects
          </button>
        </div>
      </div>
      <div className="description">
        {bio} In addition, I participate in a team that adopts the ceremonies of
        the Scrum methodology in our development processes.
      </div>
      <main className="mainContainer">
        <h3 className="mainTitle">What i am doing</h3>
        <Card />
      </main>
    </BackGround>
  );
}
