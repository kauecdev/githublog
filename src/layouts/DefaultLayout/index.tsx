import { Outlet } from 'react-router-dom'
import { LayoutContainer } from './styles'
import cover from '../../assets/cover.svg'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <img src={cover} alt="" />

      <Outlet />
    </LayoutContainer>
  )
}
