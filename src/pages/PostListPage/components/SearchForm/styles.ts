import styled from 'styled-components'
import { mixins } from '../../../../styles/mixins'

export const SearchFormContainer = styled.div`
  margin-top: 4.5rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    label {
      ${mixins.fonts.titleS};
      color: ${(props) => props.theme['base-subtitle']};
    }

    span {
      ${mixins.fonts.textS};
      color: ${(props) => props.theme['base-span']};
    }
  }
`

export const SearchInput = styled.input`
  width: 100%;
  margin-top: 0.75rem;
  padding: 0.75rem 1rem;

  border: 1px solid ${(props) => props.theme['base-border']};
  border-radius: 6px;

  background-color: ${(props) => props.theme['base-input']};
  color: ${(props) => props.theme['base-text']};

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`
