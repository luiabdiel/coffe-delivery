import { RegularText } from '../../../../components/Typography'
import { Coffe } from '../../../../components/icons/coffe'
import { InfoWithIcon } from '../../../../components/infoWithIcon'
import { ShoppingCart } from 'phosphor-react'
import {
  BenefitsContainer,
  IntroContainer,
  IntroContent,
  IntroTitle,
} from './styles'
import { useTheme } from 'styled-components'

export function Intro() {
  const { colors } = useTheme()

  return (
    <IntroContainer>
      <IntroContent className="container">
        <div>
          <section>
            <IntroTitle size="xl">
              Encontre o café perfeito para qualquer hora do dia
            </IntroTitle>
            <RegularText size="l" color="subtitle" as="h3">
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </RegularText>
          </section>
          <BenefitsContainer>
            <InfoWithIcon
              icon={<ShoppingCart weight="fill" />}
              text="Compra simples e segura"
              iconBg={colors['brand-yellow-dark']}
            />
            <p>Embalagem mantém o café intacto</p>
            <p>Entrega rápida e rastreada</p>
            <p>O café chega fresquinho até você</p>
          </BenefitsContainer>
        </div>
        <Coffe />
      </IntroContent>
    </IntroContainer>
  )
}
