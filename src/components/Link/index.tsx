import { CustomLinkContainer } from './styles'
import { LinkProps } from 'react-router-dom'

interface CustomLinkProps extends LinkProps {}

export function Link({ children, ...props }: CustomLinkProps) {
  return <CustomLinkContainer {...props}>{children}</CustomLinkContainer>
}
