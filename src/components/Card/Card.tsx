import useCardController from "./Card.controller";
import Container from "./Card.styles";
import {
  FaDesktop,
  FaServer,
  FaShapes,
  FaTabletAlt,
  FaRegFileCode,
  FaWineGlassAlt,
} from "react-icons/fa";

export default function Card() {
  const { cardsData } = useCardController();
  const icons = [
    <FaDesktop key="webIcon" />,
    <FaServer key="backendIcon" />,
    <FaShapes key="apiIcon" />,
    <FaTabletAlt key="appIcon" />,
    <FaRegFileCode key="codeIcon" />,
    <FaWineGlassAlt key="watheverIcon" />,
  ];

  return (
    <Container>
      {cardsData.map((card, index) => (
        <div className="container" key={card.title}>
          {icons[index]}
          <div>
            <h3 className="cardTitle"> {card.title} </h3>
            <p className="cardDescription">{card.description}</p>
          </div>
        </div>
      ))}
    </Container>
  );
}
