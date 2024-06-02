import styled from 'styled-components'

export const LayoutContainer = styled.div`
  > img {
    width: 100%;
  }

  > main {
    width: 54rem;
    margin: 0 auto;
  }
`

export const LayoutHeaderContainer = styled.div`
  margin-top: -106px;
  padding: 2rem;
  position: relative;
  border-radius: 10px;

  background-color: ${(props) => props.theme['base-profile']};
`
