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
import { useParams } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { BlogContext, Issue } from '../../contexts/BlogContext'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function PostDetailsPage() {
  const { fetchGithubIssueById, userDetails } = useContext(BlogContext)
  const [postDetail, setPostDetail] = useState<Issue>({
    number: 0,
    title: '',
    body: '',
    created_at: new Date().toISOString(),
    comments: 0,
    html_url: '',
  })
  const { id } = useParams()

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        const data = await fetchGithubIssueById(id)
        setPostDetail(data)
      }

      fetchData()
    }
  }, [id])

  const createdAtLabel = formatDistanceToNow(new Date(postDetail.created_at), {
    addSuffix: true,
    locale: ptBR,
  })

  const createdAtLabelFormatted =
    createdAtLabel.charAt(0).toLocaleUpperCase() +
    createdAtLabel.slice(1, createdAtLabel.length)

  return (
    <main>
      <LayoutHeaderContainer>
        <PostDetailsHeaderContainer>
          <header>
            <Link to="..">
              <CaretLeft size={12} /> Voltar
            </Link>
            <Link to={postDetail.html_url} target="_blank">
              Ver no github
              <ArrowSquareOut size={12} />
            </Link>
          </header>
          <h1>{postDetail.title}</h1>
          <footer>
            <span>
              <GithubLogo size={18} /> {userDetails.login}
            </span>
            <span>
              <CalendarDots size={18} weight="fill" /> {createdAtLabelFormatted}
            </span>
            <span>
              <ChatCircle size={18} weight="fill" /> {postDetail.comments}{' '}
              comentários
            </span>
          </footer>
        </PostDetailsHeaderContainer>
      </LayoutHeaderContainer>
      <PostContentContainer>
        <Markdown>{postDetail.body}</Markdown>
      </PostContentContainer>
    </main>
  )
}
