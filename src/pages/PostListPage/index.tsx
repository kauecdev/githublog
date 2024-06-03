import { PostsContainer } from './styles'
import { AuthorDetails } from './components/AuthorDetails'
import { SearchForm } from './components/SearchForm'
import { PostCard } from './components/PostCard'
import { LayoutHeaderContainer } from '../../layouts/DefaultLayout/styles'
import { useContext } from 'react'
import { BlogContext } from '../../contexts/BlogContext'

export function PostListPage() {
  const { issues } = useContext(BlogContext)

  return (
    <main>
      <LayoutHeaderContainer>
        <AuthorDetails />
      </LayoutHeaderContainer>
      <SearchForm />
      <PostsContainer>
        {issues.map((issue) => (
          <PostCard
            key={issue.number}
            id={issue.number}
            title={issue.title}
            createdAt={issue.created_at}
            body={issue.body}
          />
        ))}
      </PostsContainer>
    </main>
  )
}
