import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import removeMarkdown from 'remove-markdown'
import { PostCardContainer } from './styles'

interface PostCardProps {
  id: number
  title: string
  createdAt: string
  body: string
}

export function PostCard({ id, title, createdAt, body }: PostCardProps) {
  const createdAtLabel = formatDistanceToNow(new Date(createdAt), {
    addSuffix: true,
    locale: ptBR,
  })

  const createdAtLabelFormatted =
    createdAtLabel.charAt(0).toLocaleUpperCase() +
    createdAtLabel.slice(1, createdAtLabel.length)

  const postUrl = `/post/${id}`

  return (
    <PostCardContainer to={postUrl}>
      <header>
        <h3>{title}</h3>
        <span>{createdAtLabelFormatted}</span>
      </header>
      <p>{removeMarkdown(body)}</p>
    </PostCardContainer>
  )
}
