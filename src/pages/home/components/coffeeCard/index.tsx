import { CoffeeCardContainer, Tags } from './styles'

export function CoffeeCard() {
  return (
    <CoffeeCardContainer className="container">
      <p>CoffeeCard</p>

      <Tags>
        <span>Tradicional</span>
        <span>Com leite</span>
      </Tags>
    </CoffeeCardContainer>
  )
}
