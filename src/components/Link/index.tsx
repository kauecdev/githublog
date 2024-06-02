import { ReactNode } from 'react'
import { CustomLinkContainer } from './styles'

interface LinkProps {
  children: ReactNode
}

export function Link({ children }: LinkProps) {
  return <CustomLinkContainer>{children}</CustomLinkContainer>
}
