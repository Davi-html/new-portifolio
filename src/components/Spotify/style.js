import styled from "styled-components";

export const Container = styled.div`
  background-color: rgba(109, 40, 217, 0.2);
  backdrop-filter: blur(12px);
  border-radius: 8px;
  height: 180px;
  grid-area: div5;
  padding: 0 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  .img-album {
    width: 80px;
    height: 80px;
    border-radius: 10px;
  }

  .music {
    font-size: 1.25rem;
    word-spacing: 1px;
  }

  .album,
  .artist {
    opacity: 0.8;
    font-size: 0.875rem;
  }

  .name {
    display: flex;
    justify-content: center;
    align-items: start;
    gap: 3px;
    flex-direction: column;
  }

  .track,
  .listening {
    color: rgb(251 207 232 / 1);
    letter-spacing: -0.05em;
    font-size: 16px;
    font-weight: 700;
  }

  .listening {
    font-size: 18px;

    a {
      color: rgb(99 102 241 / 1);
      text-decoration: none;
    }
  }

  .content {
    display: flex;
    gap: 8px;
    width: 100%;
  }

  .scale-up-center {
    -webkit-animation: scale-up-center 1s linear infinite both;
    animation: scale-up-center 1s linear infinite both;
    background-color: rgb(22 163 74 / 72%);
    height: 10px;
    width: 10px;
    border-radius: 50%;
    position: absolute;
  }

  @-webkit-keyframes scale-up-center {
    0% {
      -webkit-transform: scale(0.5);
      transform: scale(0.5);
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
  @keyframes scale-up-center {
    0% {
      -webkit-transform: scale(0.5);
      transform: scale(0.5);
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }

  .div-listening{
    display: flex;
    width: 280px;
    gap: 10px;
    align-items: center;
    position: relative;
  }

  .animation{
    position: absolute;
    right: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
  
    .circle {
        background-color: rgb(22 163 74);
        height: 5px;
        width: 5px;
        border-radius: 50%;
    }
  }
`;
