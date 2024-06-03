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

export function PostCard({ title, createdAt, body }: PostCardProps) {
  return (
    <PostCardContainer>
      <header>
        <h3>{title}</h3>
        <span>
          {formatDistanceToNow(new Date(createdAt), {
            addSuffix: true,
            locale: ptBR,
          })}
        </span>
      </header>
      <p>{removeMarkdown(body)}</p>
    </PostCardContainer>
  )
}
