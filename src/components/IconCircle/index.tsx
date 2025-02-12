import { Container, IconWrapper, Text } from './styles'

type IconCircleProps = {
  icon: string,
  description: string
}

export const IconCircle = ({
  icon, description
}: IconCircleProps
) => {
  return (
    <Container>
      <IconWrapper>
        <div className="icon">
          <img src={icon} alt={description} />
        </div>
      </IconWrapper>
      <Text>{description}</Text>
    </Container>
  )
}
