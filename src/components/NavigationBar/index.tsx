import { FiMenu } from "react-icons/fi";
import { CategoryList, DepartmentsButton, LeftSection, NavBar, RightSection } from "./styles";


export const NavigationBar = () => {
  return (
    <NavBar>
      <LeftSection>
        <DepartmentsButton>
          <FiMenu size={22} color="#f47920" />
          <span>Departamentos</span>
        </DepartmentsButton>

        <CategoryList>
          <span>Descontos Cliente Unimed Natal</span>
          <span>Carnaval 🎭 🎉</span>
          <span>Semana do Gato 😺</span>
        </CategoryList>
      </LeftSection>

      <RightSection>
        Venda no Uniclube
      </RightSection>
    </NavBar>
  );
};

