import { SearchFormContainer, SearchInput } from './styles'

export function SearchForm() {
  return (
    <SearchFormContainer>
      <header>
        <label>Publicações</label>
        <span>6 publicações</span>
      </header>
      <SearchInput placeholder="Buscar conteúdo" />
    </SearchFormContainer>
  )
}
