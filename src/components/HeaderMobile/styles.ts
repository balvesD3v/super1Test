import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;
  background-color: #EAE0D5;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1000;
`;

export const Logo = styled.img`
  width: 125px;
  height: 20px;
  object-fit: contain;
`;

export const MenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const CartButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Sidebar = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 75%;
  height: 100vh;
  background: #EEE6DD;
  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;
  z-index: 1100;
  padding: 20px;

  &.open {
    transform: translateX(0);
  }

  .close-btn {
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;
  }

  nav ul {
    list-style: none;
    padding: 0;
  }

  nav ul li {
    margin: 10px 0;
  }

  .titleAndButton {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .title {
      font-weight: bold;
    }
  }
`;

export const Location = styled.div`
  background-color: #F7F3EE;
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);

  .WhereRu {
    font-size: 12px;
    display: block;
    gap: 1px;
  }
`

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;
