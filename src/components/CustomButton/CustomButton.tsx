import { CustomButtonProps } from "./CustomButton.props";
import Container from "./CustomButton.styles";

export default function CustomButton(props: CustomButtonProps) {
  const { text, handleClick } = props;

  return (
    <Container>
      <button onClick={handleClick}>{text}</button>
    </Container>
  );
}
