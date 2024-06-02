import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const PostListPageContainer = styled.main`
  img {
    width: 100%;
  }
`

export const AuthorDetailsContainer = styled.section`
  width: 54rem;
  margin: 0 auto;
  padding: 2rem;
  border-radius: 10px;

  transform: translateY(-50%);

  background-color: ${(props) => props.theme['base-profile']};

  display: flex;
  gap: 2rem;

  box-shadow: 0 2px 28px rgba(0, 0, 0, 0.2);

  img {
    width: 148px;
    height: 148px;

    border-radius: 8px;
  }
`

export const AuthorDetailsSection = styled.div`
  padding-top: 0.5rem;
  flex: 1;
  position: relative;

  header {
    ${mixins.fonts.titleS};
    color: ${(props) => props.theme['base-title']};

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  p {
    padding-top: 0.625rem;
  }

  footer {
    display: flex;
    gap: 1.5rem;

    position: absolute;
    bottom: 0;

    span {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;

      color: ${(props) => props.theme['base-subtitle']};

      svg {
        color: ${(props) => props.theme['base-label']};
      }
    }
  }
`
