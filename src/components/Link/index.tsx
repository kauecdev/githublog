import { ReactNode } from 'react'
import { CustomLinkContainer } from './styles'
import { ArrowSquareOut } from '@phosphor-icons/react'

interface LinkProps {
  children: ReactNode
}

export function Link({ children }: LinkProps) {
  return (
    <CustomLinkContainer>
      <span>{children}</span> <ArrowSquareOut size={12} />
    </CustomLinkContainer>
  )
}
