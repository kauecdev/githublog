import {
  ArrowSquareOut,
  BuildingOffice,
  GithubLogo,
  Users,
} from '@phosphor-icons/react'
import { Link } from '../../../../components/Link'
import { AuthorDetailsContainer, AuthorDetailsSection } from './styles'
import { useContext } from 'react'
import { BlogContext } from '../../../../contexts/BlogContext'

export function AuthorDetails() {
  const { userDetails } = useContext(BlogContext)

  return (
    <AuthorDetailsContainer>
      <img src={userDetails.avatar_url} alt="" />
      <AuthorDetailsSection>
        <header>
          <span>{userDetails.name}</span>
          <Link to={userDetails.html_url} target="_blank">
            Github <ArrowSquareOut size={12} />
          </Link>
        </header>
        <p>{userDetails.bio}</p>
        <footer>
          <span>
            <GithubLogo size={18} /> {userDetails.login}
          </span>
          <span>
            <BuildingOffice size={18} weight="fill" /> {userDetails.company}
          </span>
          <span>
            <Users size={18} weight="fill" /> {userDetails.followers} seguidores
          </span>
        </footer>
      </AuthorDetailsSection>
    </AuthorDetailsContainer>
  )
}
