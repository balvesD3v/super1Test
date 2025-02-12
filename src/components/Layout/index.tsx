import { Header } from "../Header";
import { Home } from "../Home";
import { NavigationBar } from "../NavigationBar";
import { ContentWrapper, LayoutContainer } from "./styles";

export const Layout = () => {
  return (
    <LayoutContainer>
      <Header />
      <NavigationBar />
      <ContentWrapper>
        <Home />
      </ContentWrapper>
    </LayoutContainer>
  );
};
