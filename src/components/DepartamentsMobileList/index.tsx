import { departmentList } from "../../api/departmentList";
import { SidebarContainer } from "./styles";
import clode from "/assets/close.png";

type DepartamentsListMobileProps = {
  isOpen: boolean;
  toggleSidebar: () => void;
};

export const DepartamentsListMobile = ({ isOpen, toggleSidebar }: DepartamentsListMobileProps) => {
  return (
    <SidebarContainer className={isOpen ? "open" : ""}>
      <div className="sidebar">
        <div className="titleAndButton">
          <span className="title">Departamentos</span>
          <button className="close-btn" onClick={toggleSidebar}>
            <img src={clode} alt="Fechar" />
          </button>
        </div>
        <nav>
          <ul>
            {departmentList.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </nav>
      </div>
    </SidebarContainer>
  );
};
