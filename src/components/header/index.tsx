import { Logo } from '../icons/logo'
import { HeaderButton, HeaderButtonsContainer, TagHeader } from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
  return (
    <TagHeader>
      <div className="container">
        <Logo />

        <HeaderButtonsContainer>
          <HeaderButton variant="purple">
            <MapPin size={20} weight="fill" />
            Porto Alegre, RS
          </HeaderButton>
          <HeaderButton variant="yellow">
            <ShoppingCart />
          </HeaderButton>
        </HeaderButtonsContainer>
      </div>
    </TagHeader>
  )
}
