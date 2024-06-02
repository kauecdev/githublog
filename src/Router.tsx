import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { PostListPage } from './pages/PostListPage'
import { PostDetailsPage } from './pages/PostDetailsPage'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<PostListPage />} />
        <Route path="/post/:id" element={<PostDetailsPage />} />
      </Route>
    </Routes>
  )
}
