import { PostsContainer } from './styles'
import { AuthorDetails } from './components/AuthorDetails'
import { SearchForm } from './components/SearchForm'
import { PostCard } from './components/PostCard'
import { LayoutHeaderContainer } from '../../layouts/DefaultLayout/styles'

export function PostListPage() {
  return (
    <main>
      <LayoutHeaderContainer>
        <AuthorDetails />
      </LayoutHeaderContainer>
      <SearchForm />
      <PostsContainer>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </PostsContainer>
    </main>
  )
}
