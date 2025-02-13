import { FiMenu } from "react-icons/fi";
import { CategoryList, DepartmentsButton, LeftSection, NavBar, RightSection } from "./styles";
import img from "../../../public/assets/Vector.svg"

export const NavigationBar = () => {
  return (
    <NavBar>
      <LeftSection>
        <DepartmentsButton>
          <FiMenu size={22} color="#f47920" />
          <span>Departamentos</span>
        </DepartmentsButton>

        <CategoryList>
          <span>
            <img src={img} alt="" />Descontos Cliente Unimed Natal
          </span>
        </CategoryList>
      </LeftSection>

      <RightSection>
        Venda no Uniclube
      </RightSection>
    </NavBar>
  );
};

