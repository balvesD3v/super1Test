import { SearchContainer, SearchIcon, SearchInput } from "./styles"

export const SearchBar = () => {
  return (
    <SearchContainer>
      <SearchInput type="text" placeholder="O que você gostaria hoje?" />
      <SearchIcon />
    </SearchContainer>
  )
}
