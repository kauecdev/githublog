import styled from 'styled-components'

export const PostListPageContainer = styled.main`
  > img {
    width: 100%;
  }

  > div {
    width: 54rem;
    margin: 0 auto;
  }
`

export const PostsContainer = styled.section`
  margin: 3rem 0;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
`
