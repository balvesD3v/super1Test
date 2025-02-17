import styled from "styled-components";

export const SidebarContainer = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: calc(100% - 35px);
  height: 100vh;
  background: #EEE6DD;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);
  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;
  z-index: 1100;
  padding: 20px 10px;

  &.open {
    transform: translateX(0);
  }

  .close-btn {
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;
  }

  nav {
    max-height: 100vh; 
    overflow-y: auto; 
  }

  nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  nav ul li {
    margin: 10px 0;
    padding: 15px;
    border-bottom: 1px solid #ccc; 
  }

  nav ul li:last-child {
    border-bottom: none;
  }

  .titleAndButton {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .title {
      font-weight: bold;
      padding: 0 15px;
    }
  }
`;
