import styled from "styled-components";

export const Container = styled.div`
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

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  border-radius: 50px;
  padding: 5px;
  width: 100%;
  max-width: 400px;
`;

export const Input = styled.input`
  flex: 1;
  border: none;
  background: transparent;
  padding: 10px 15px;
  font-size: 16px;
  color: #888;
  outline: none;

  &::placeholder {
    color: #b0a8a0;
  }
`;

export const Button = styled.button`
  background: #f47920;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 30px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease-in-out;

  &:hover {
    background: #e2681b;
  }
`;

