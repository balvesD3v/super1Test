import { useState, useRef, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import imgPlaceholder from "/assets/placeholder.png"
import img from "/assets/Vector.svg";
import reticence from "/assets/reticence.svg";
import {
  CategoryList,
  DepartmentsButton,
  LeftSection,
  NavBar,
  RightSection,
  DropdownMenu,
  Overlay,
  CategoryColumn,
  CategoryTitle,
  ViewMore,
  Departments,
  AllDepartaments,
  Partners,
  PartnerCard,
  SeeMoreCompanies
} from "./styles";

export const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <Overlay className={isMenuOpen ? "active" : ""} onClick={() => setIsMenuOpen(false)} />

      <NavBar>
        <LeftSection>
          <div ref={menuRef}>
            <DepartmentsButton onClick={toggleMenu}>
              <FiMenu size={22} color="#f47920" />
              <span>Departamentos</span>
            </DepartmentsButton>

            <DropdownMenu className={isMenuOpen ? "active" : ""}>
              <AllDepartaments>
                <Departments>
                  <CategoryColumn>
                    <CategoryTitle>Saúde e Bem-estar</CategoryTitle>
                    <ul>
                      <li>Beleza</li>
                      <li>Cuidados Pessoais</li>
                      <li>Esportes e Aventura</li>
                    </ul>
                    <ViewMore>Ver mais ⌄</ViewMore>
                  </CategoryColumn>

                  <CategoryColumn>
                    <CategoryTitle>Estilo</CategoryTitle>
                    <ul>
                      <li>Vestuário</li>
                      <li>Calçados</li>
                      <li>Bijuterias e Acessórios</li>
                    </ul>
                    <ViewMore>Ver mais ⌄</ViewMore>
                  </CategoryColumn>

                  <CategoryColumn>
                    <CategoryTitle>Eletro</CategoryTitle>
                    <ul>
                      <li>Eletrodomésticos</li>
                      <li>Celulares, Tablets e Acessórios</li>
                      <li>Câmeras e Acessórios</li>
                    </ul>
                    <ViewMore>Ver mais ⌄</ViewMore>
                  </CategoryColumn>

                  <CategoryColumn>
                    <CategoryTitle>Casa</CategoryTitle>
                    <ul>
                      <li>Casa, Jardim e Limpeza</li>
                      <li>Móveis e Decoração</li>
                      <li>Construção</li>
                    </ul>
                    <ViewMore>Ver mais ⌄</ViewMore>
                  </CategoryColumn>

                  <CategoryColumn>
                    <CategoryTitle>Tincidunt</CategoryTitle>
                    <ul>
                      <li>Tempor</li>
                      <li>Consequat</li>
                    </ul>
                    <ViewMore>Ver mais ⌄</ViewMore>
                  </CategoryColumn>

                  <CategoryColumn>
                    <CategoryTitle>Ipsum Lorem</CategoryTitle>
                    <ul>
                      <li>Sit Amet</li>
                      <li>Consequat</li>
                      <li>Pellentesque</li>
                    </ul>
                    <ViewMore>Ver mais ⌄</ViewMore>
                  </CategoryColumn>
                </Departments>

                <CategoryColumn>
                  <CategoryTitle>Mais Departamentos</CategoryTitle>
                  <ul>
                    <li>Petshop</li>
                    <li>Produtos Regionais</li>
                    <li>Brinquedos e Jogos</li>
                    <li>Livros</li>
                    <li>Música e Hobbies</li>
                    <li>Bebês</li>
                    <li>Alimentos e Bebidas</li>
                    <li>Agro e Indústria</li>
                  </ul>
                  <ViewMore bold>Ver todos os departamentos ⌄</ViewMore>
                </CategoryColumn>
              </AllDepartaments>

              <Partners>
                {Array.from({ length: 9 }).map((_, index) => (
                  <PartnerCard key={index}>
                    <img src={imgPlaceholder} alt="" />
                    <span className="lorem">
                      Lorem <br /> Ipsum
                    </span>
                  </PartnerCard>
                ))}

                <SeeMoreCompanies>
                  <div className="circle">
                    <img src={reticence} alt="" />
                  </div>
                  <div className="seeMore">Ver mais empresas</div>
                </SeeMoreCompanies>
              </Partners>
            </DropdownMenu>
          </div>

          <CategoryList>
            <span>
              <img src={img} alt="" />Descontos Cliente Unimed Natal
            </span>
          </CategoryList>
        </LeftSection>

        <RightSection>Venda no Uniclube</RightSection>
      </NavBar>
    </>
  );
};