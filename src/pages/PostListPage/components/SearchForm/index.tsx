import { ChangeEvent, useContext, useEffect, useState } from 'react'
import { SearchFormContainer, SearchInput } from './styles'
import { BlogContext } from '../../../../contexts/BlogContext'

export function SearchForm() {
  const { fetchGithubIssues } = useContext(BlogContext)
  const [querySearch, setQuerySearch] = useState('')

  useEffect(() => {
    const timeoutId = setTimeout(() => fetchGithubIssues(querySearch), 1000)
    return () => clearTimeout(timeoutId)
  }, [querySearch])

  function handleChangeQuerySearch(event: ChangeEvent<HTMLInputElement>) {
    setQuerySearch(event.target.value)
  }

  return (
    <SearchFormContainer>
      <header>
        <label>Publicações</label>
        <span>6 publicações</span>
      </header>
      <SearchInput
        placeholder="Buscar conteúdo"
        onChange={handleChangeQuerySearch}
        value={querySearch}
      />
    </SearchFormContainer>
  )
}
