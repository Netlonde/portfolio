import styled, { css } from "styled-components";

interface IProps {
  isdarkcolor: boolean;
}

export const BackGround = styled.div<IProps>`
  ${({ isdarkcolor }) =>
    css`
      background-color: ${isdarkcolor ? "#272727" : "#fff"};
      width: 1000px;
      height: 700px;
      border-radius: 10px;
      padding: 25px 15px;
      overflow: hidden;
      position: relative;

      .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 30px;
      }

      .title {
        font-size: 1.77778rem;
        font-weight: 400;
        border-bottom: 3px solid #fff372;
        font-family: sans-serif;
        color: ${isdarkcolor ? "#fff" : "rgba(40, 40, 40, 1)"};
      }

      .headButtonsContainer {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
      }

      .buttonText {
        font-size: 1.2rem;
        font-weight: 400;
        font-family: sans-serif;
        background: transparent;
        border: none;
        color: ${isdarkcolor ? "#fff" : "#5a5a5a"};
        cursor: pointer;
      }

      .buttonText:hover {
        opacity: 0.9;
      }

      .description {
        color: ${isdarkcolor ? "#fff" : "rgba(60, 60, 60, 1)"};
        margin-bottom: 30px;
        font-size: 17px;
        line-height: 22px;
      }

      .mainContainer {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        background: ${isdarkcolor
          ? "rgba(155, 155, 155, 0.35)"
          : "rgba(100, 100, 100, 0.33)"};
        padding: 10px 15px;
      }

      .mainTitle {
        font-size: 1.5rem;
        font-weight: 600;
        color: ${isdarkcolor ? "#fff" : "rgba(40, 40, 40, 0.8)"};
        font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
          "Lucida Sans", Arial, sans-serif;
        margin: 20px 0px;
      }
    `}
`;
