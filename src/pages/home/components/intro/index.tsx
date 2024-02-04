import { Coffe } from '../../../../components/icons/coffe'
import { IntroContainer, IntroContent, IntroTitle } from './styles'

export function Intro() {
  return (
    <IntroContainer>
      <IntroContent className="container">
        <div>
          <section>
            <IntroTitle size="xl">
              Encontre o café perfeito para qualquer hora do dia
            </IntroTitle>
          </section>
        </div>
        <Coffe />
      </IntroContent>
    </IntroContainer>
  )
}
