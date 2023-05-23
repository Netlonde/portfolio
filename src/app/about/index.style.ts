import styled, { css } from "styled-components";

interface IProps {
  isdarkcolor: boolean;
}

const BackGround = styled.div<IProps>`
  ${({ isdarkcolor }) =>
    css`
      width: 100vw;
      height: 100vh;

      background-image: ${isdarkcolor
        ? "linear-gradient(to left, rgba(0,0,0,0.6), rgba(0,0,0,0.6))"
        : "linear-gradient(to left, #fff372, #fff372 50%, #0eaff9 75%, #0eaff9 75%)"};
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 25px;
    `}
`;

export const LeftContainer = styled.div<IProps>`
  ${({ isdarkcolor }) =>
    css`
      width: 300px;
      height: 710px;

      background-color: ${isdarkcolor ? "#272727" : "#fff"};
      border-radius: 10px;
      gap: 15px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: column;
      padding: 30px 20px;

      .imageContainer {
        margin: 5px 40px 10px 40px;
        border-radius: 100%;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
          margin-bottom: -10px;
        }
      }

      .tagContainer {
        width: 100%;
        height: 30px;
        border-radius: 20px;
        background-color: rgba(100, 100, 100, 0.33);
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .tagTitle {
        font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
          "Lucida Sans", Arial, sans-serif;
        color: ${isdarkcolor ? "#fff" : "rgba(55, 55, 55, 0.85)"};
        font-size: 17px;
        font-weight: 200;
      }

      .tagButton {
        background-color: transparent;
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 8px;

        svg {
          color: ${isdarkcolor ? "#fff" : "rgba(55, 55, 55, 0.85)"};
        }
      }

      .linksContainer {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 40px;

        button {
          border: none;
          background-color: transparent;
        }

        svg {
          width: 35px;
          height: 35px;
          color: #0eaff9;
          cursor: pointer;
        }
      }

      .userInfoContainer {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        width: 300px;
        height: 130px;
        padding: 0px 20px;
        background-color: rgba(100, 100, 100, 0.33);
      }

      .userInfoText {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 7px 0px;
        gap: 5px;
        font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
          "Lucida Sans", Arial, sans-serif;
        color: ${isdarkcolor ? "#fff" : "rgba(55, 55, 55, 0.9)"};

        svg {
          color: ${isdarkcolor ? "#fff" : "rgba(55, 55, 55, 0.8)"};
        }
      }

      .buttonContainer {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 15px;
        margin-top: 20px;
      }
    `}
`;

export const RightContainer = styled.div<IProps>`
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

export default BackGround;
