import { PostListPageContainer, PostsContainer } from './styles'
import cover from '../../assets/cover.svg'
import { AuthorDetails } from './components/AuthorDetails'
import { SearchForm } from './components/SearchForm'
import { PostCard } from './components/PostCard'

export function PostListPage() {
  return (
    <PostListPageContainer>
      <img src={cover} alt="" />
      <div>
        <AuthorDetails />
        <SearchForm />
        <PostsContainer>
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </PostsContainer>
      </div>
    </PostListPageContainer>
  )
}
