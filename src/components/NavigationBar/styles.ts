import { styled } from "styled-components";

export const NavBar = styled.nav`
  position: fixed;
  top: 122px;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: #f7f2ec;
  padding: 15px 15px;
  font-size: 16px;
  font-weight: 500;
  color: #333;
  z-index: 99; 
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1); 
  display: flex;
  justify-content: space-between;
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
  margin-left: 122px;
`;

export const DepartmentsButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  color: #333;

  &:hover {
    opacity: 0.8;
  }

  &::after {
    content: "|";
    color: red; 
    margin-left: 30px;
    margin-right: 30px;
    color: #EAE0D5;
  }
`;

export const CategoryList = styled.div`
  display: flex;
  gap: 16px;
  
  span {
    cursor: pointer;
    display: flex;
    justify-content: center;
    font-family: "Source Sans 3", serif;
    gap: 10px;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  margin-right: 125px;
  color: #737373;
  font-family: "Source Sans 3", serif;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
