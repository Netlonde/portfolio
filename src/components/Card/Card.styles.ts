import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 48.7% 48.7%;
  grid-template-rows: 100px 100px;
  gap: 35px 25px;

  .container {
    width: 100%;
    height: 110px;
    background: rgb(255, 255, 255, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    padding: 15px;
    gap: 20px;
  }

  .cardTitle {
    color: rgba(20, 20, 20, 1);
    font-weight: 500;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
    margin-bottom: 5px;
  }

  .cardDescription {
    font-size: 15px;
    color: rgba(80, 80, 80, 1);
  }

  svg {
    color: #0eaff9;
    width: 45px;
    height: 45px;
  }
`;

export default Container;
