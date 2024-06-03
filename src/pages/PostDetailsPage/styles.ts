import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const PostDetailsHeaderContainer = styled.main`
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  h1 {
    ${mixins.fonts.titleL};
    color: ${(props) => props.theme['base-title']};
    padding-top: 1.25rem;
  }

  footer {
    padding-top: 0.5rem;
    display: flex;
    gap: 2rem;

    span {
      ${mixins.fonts.textM};
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;

      color: ${(props) => props.theme['base-span']};

      svg {
        color: ${(props) => props.theme['base-label']};
      }
    }
  }
`

export const PostContentContainer = styled.div`
  padding: 2.5rem 2rem;

  a {
    all: unset;
    text-decoration: underline;
    color: ${(props) => props.theme.blue};
    cursor: pointer;
  }
`
