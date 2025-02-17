import styled from "styled-components";

export const NavBar = styled.nav`
  position: fixed;
  top: 122px;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: #f7f2ec;
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
  position: relative;

  &:hover {
    opacity: 0.8;
  }
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  width: 100%;
  max-width: 1200px;
  background: white;
  border-radius: 6px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  flex-direction: column;
  gap: 30px;
  flex-wrap: wrap;
  visibility: hidden;
  opacity: 0;
  transform: translateY(-10px);
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out, visibility 0.3s;
  z-index: 999;

  overflow-y: auto; 

  &.active {
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
  }

  @media (max-width: 1540px) {
    max-height: 70vh; 
  }
`;

export const Departments = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  grid-template-rows: repeat(2, auto);
  gap: 16px; 
  padding: 20px;
  width: 100%;
  max-width: 800px; 
  margin: 0 auto; 
`;

export const AllDepartaments = styled.div`
  display: flex;
  padding: 20px;
`

export const CategoryColumn = styled.div`
  flex: 1;
  min-width: 160px;
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    padding: 6px 0;
    font-size: 14px;
    cursor: pointer;
    transition: color 0.2s ease-in-out;

    &:hover {
      color: #f47920;
    }
  }
`;

export const CategoryTitle = styled.h4`
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
`;

export const ViewMore = styled.span<{ bold?: boolean }>`
  display: block;
  margin-top: 10px;
  font-size: 14px;
  color: #f47920;
  cursor: pointer;
  font-weight: ${(props) => (props.bold ? "bold" : "normal")};

  &:hover {
    text-decoration: underline;
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

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 98;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease-in-out;

  &.active {
    opacity: 1;
    visibility: visible;
  }
`;

export const Partners = styled.div`
  background-color: #FAF7F4;
  padding: 40px;
  display: flex;
  gap: 25px;
`

export const PartnerCard = styled.div`
  display: flex;
  flex-direction: column;

  img {
    height: 90px;
    width: 90px;
    object-fit: cover;
  }

  .lorem {
    text-align: center;
  }
`

export const SeeMoreCompanies = styled.div`
  .circle {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    width: 90px;
    height: 90px;
    border-radius: 50%;
  }

  .seeMore {
    text-align: center;
  }
`