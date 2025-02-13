import { Container } from "./styles"
import { Slider } from "../Slider"
import { IconCircleContainer } from "../IconCircleContainer"
import { CustomerSection } from "../CustomerSection"

export const Home = () => {
  return (
    <Container>
      <Slider />
      <IconCircleContainer />
      <CustomerSection />
    </Container>
  )
}
