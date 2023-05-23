import styled from "styled-components";

const Container = styled.div`
  button {
    cursor: pointer;
    background-color: #0eaff9;
    width: 180px;
    height: 40px;
    border-radius: 22px;
    border: 0;

    font-size: 17px;
    color: #fff;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
    font-weight: 600;
  }

  button:hover {
    opacity: 0.9;
  }
`;

export default Container;
