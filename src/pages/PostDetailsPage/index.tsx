import {
  ArrowSquareOut,
  CalendarDots,
  CaretLeft,
  ChatCircle,
  GithubLogo,
} from '@phosphor-icons/react'
import Markdown from 'react-markdown'
import { Link } from '../../components/Link'
import { LayoutHeaderContainer } from '../../layouts/DefaultLayout/styles'
import { PostContentContainer, PostDetailsHeaderContainer } from './styles'

const content =
  '# Lorem Ipsum \n## Test for githublog\n*Content*: this is a test content to show in `githublog` application.\nAll the stuff writen here is for test only.\n```const random = Math.random()```'

export function PostDetailsPage() {
  return (
    <main>
      <LayoutHeaderContainer>
        <PostDetailsHeaderContainer>
          <header>
            <Link>
              <CaretLeft size={12} /> Voltar
            </Link>
            <Link>
              Ver no github
              <ArrowSquareOut size={12} />
            </Link>
          </header>
          <h1>JavaScript data types and data structures</h1>
          <footer>
            <span>
              <GithubLogo size={18} /> kauecdev
            </span>
            <span>
              <CalendarDots size={18} weight="fill" /> C1Risk
            </span>
            <span>
              <ChatCircle size={18} weight="fill" /> 10 seguidores
            </span>
          </footer>
        </PostDetailsHeaderContainer>
      </LayoutHeaderContainer>
      <PostContentContainer>
        <Markdown>{content}</Markdown>
      </PostContentContainer>
    </main>
  )
}
