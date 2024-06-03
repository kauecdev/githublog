import styled from 'styled-components'
import { mixins } from '../../styles/mixins'
import { Link } from 'react-router-dom'

export const CustomLinkContainer = styled(Link)`
  ${mixins.fonts.link};
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  border-bottom: 1px solid transparent;
  color: ${(props) => props.theme.blue};

  &:hover {
    border-bottom: 1px solid ${(props) => props.theme.blue};
  }
`
