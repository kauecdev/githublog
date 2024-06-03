import styled from 'styled-components'
import { mixins } from '../../../../styles/mixins'

export const PostCardContainer = styled.article`
  padding: 2rem;
  border-radius: 10px;
  border: 2px solid transparent;

  cursor: pointer;

  background-color: ${(props) => props.theme['base-post']};
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  &:hover {
    border: 2px solid ${(props) => props.theme['base-label']};
    transition: all 0.2s;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h3 {
      ${mixins.fonts.titleM};
      color: ${(props) => props.theme['base-title']};
    }

    span {
      ${mixins.fonts.textS};
      color: ${(props) => props.theme['base-span']};
      text-align: right;
    }
  }

  p {
    max-height: 112px;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`
