import { Header } from "../Header";
import { Home } from "../Home";
import { ContentWrapper, LayoutContainer } from "./styles";

export const Layout = () => {
  return (
    <LayoutContainer>
      <Header />
      <ContentWrapper>
        <Home />
      </ContentWrapper>
    </LayoutContainer>
  );
};
