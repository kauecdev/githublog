import {
  ArrowSquareOut,
  BuildingOffice,
  GithubLogo,
  Users,
} from '@phosphor-icons/react'
import { Link } from '../../../../components/Link'
import { AuthorDetailsContainer, AuthorDetailsSection } from './styles'

export function AuthorDetails() {
  return (
    <AuthorDetailsContainer>
      <img src="https://github.com/kauecdev.png" alt="" />
      <AuthorDetailsSection>
        <header>
          <span>Kauê Cavalcante</span>
          <Link>
            Github <ArrowSquareOut size={12} />
          </Link>
        </header>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          earum explicabo, animi sint possimus dignissimos quisquam.
        </p>
        <footer>
          <span>
            <GithubLogo size={18} /> kauecdev
          </span>
          <span>
            <BuildingOffice size={18} weight="fill" /> C1Risk
          </span>
          <span>
            <Users size={18} weight="fill" /> 10 seguidores
          </span>
        </footer>
      </AuthorDetailsSection>
    </AuthorDetailsContainer>
  )
}
