import {
  AuthorDetailsContainer,
  AuthorDetailsSection,
  PostListPageContainer,
} from './styles'
import cover from '../../assets/Cover.svg'
import { Link } from '../../components/Link'
import { BuildingOffice, GithubLogo, Users } from '@phosphor-icons/react'

export function PostListPage() {
  return (
    <PostListPageContainer>
      <img src={cover} alt="" />

      <AuthorDetailsContainer>
        <img src="https://github.com/kauecdev.png" alt="" />
        <AuthorDetailsSection>
          <header>
            <span>Kauê Cavalcante</span>
            <Link>Github</Link>
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
    </PostListPageContainer>
  )
}