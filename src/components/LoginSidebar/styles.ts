import styled from "styled-components";

export const Sidebar = styled.div`
  position: fixed;
  top: 0;
  right: -500px;
  background: #EAE0D5;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.2);
  transition: right 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  z-index: 1001;

  .logoButton {
    display: flex;
    justify-content: space-between;
    padding: 20px 40px;
  }

  .close-btn {
    background: none;
    border: none;
    cursor: pointer;
    align-self: flex-end;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 8px;
    background-color: #ff8000;
  }

  @media (max-width: 768px) {
    width: 100%; 
    right: -100%;
    height: 100vh;
    
    &.open {
      right: 0;
    }
  }
`;

export const MiddleBar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  
  @media (max-width: 768px) {
    padding: 0 40px;
  }
`;


