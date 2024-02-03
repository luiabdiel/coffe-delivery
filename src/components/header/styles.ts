import styled, { css } from 'styled-components'

export const TagHeader = styled.header`
  width: 100%;
  height: 6.5rem;

  background-color: ${({ theme }) => theme.colors['base-background']};

  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const HeaderButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

interface HeaderButtonProps {
  variant: 'purple' | 'yellow'
}

export const HeaderButton = styled.button<HeaderButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  min-width: 2.3rem;
  height: 2.3rem;

  border: none;
  border-radius: 0.375rem;
  padding: 0 0.5rem;

  position: relative;

  font-size: ${({ theme }) => theme.textSizes['text-regular-s']};

  ${({ variant, theme }) => css`
    background-color: ${theme.colors[`brand-${variant}-light`]};
    color: ${theme.colors[`brand-${variant}-dark`]};
  `}

  ${({ variant, theme }) =>
    variant === 'purple' &&
    css`
      svg {
        color: ${theme.colors['brand-purple']};
      }
    `}
`
