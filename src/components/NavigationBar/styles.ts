import { styled } from "styled-components";

export const NavBar = styled.nav`
  position: fixed;
  top: 122px;
  left: 0;
  width: 100%;
  background-color: #f7f2ec;
  padding: 12px 20px;
  font-size: 16px;
  font-weight: 500;
  color: #333;
  z-index: 99; 
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1); 
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
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
`;

export const CategoryList = styled.div`
  display: flex;
  gap: 16px;
  
  span {
    cursor: pointer;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const RightSection = styled.div`
  font-weight: bold;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
