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
export const LocationModal = styled.div`
  position: fixed;
  top: 110px;
  left: 35%;
  transform: translateX(-50%) translateY(-10px);
  opacity: 0;
  background: #EAE0D5;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 16px;
  z-index: 1000;
  width: 260px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: opacity 0.3s ease-out, transform 0.3s ease-out;

  &.open {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }

  &.closed {
    opacity: 0;
    transform: translateX(-50%) translateY(-10px);
  }

  &::before {
    content: "";
    position: absolute;
    top: -10px;
    left: 10%;
    transform: translateX(-50%);
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #EAE0D5;
  }

  .modal-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }

  .close-btn {
    background: none;
    border: none;
    cursor: pointer;
    position: absolute;
    top: 8px;
    right: 8px;
  }

  p {
    font-size: 14px;
    color: #333;
    margin-bottom: 8px;
  }

  input {
    width: 100%;
    padding: 8px;
    border: none;
    border-radius: 4px;
    margin-bottom: 8px;
  }

  .search-btn {
    background: #f47920;
    color: white;
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    width: 100%;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;
