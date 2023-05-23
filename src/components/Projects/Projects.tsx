import Card from "@/components/Card/Card";
import { BackGround } from "./Projects.style";
import { IProjectsProps } from "./Projects.props";

export default function Projects(props: IProjectsProps) {
  const { isDarkUi, toogleModal } = props;

  return (
    <BackGround isdarkcolor={isDarkUi}>
      <div className="header">
        <h3 className="title">Projects</h3>
        <div className="headButtonsContainer">
          <button className="buttonText" onClick={toogleModal}>
            About
          </button>
        </div>
      </div>
      <main className="mainContainer">
        <h3 className="mainTitle">What i am doing</h3>
        <Card />
      </main>
    </BackGround>
  );
}
