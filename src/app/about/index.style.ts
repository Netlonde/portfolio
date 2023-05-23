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

export default BackGround;
