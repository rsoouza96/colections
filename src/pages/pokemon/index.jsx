import Axios from "axios";
import { Pagination } from 'antd'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

import Grid from '../../components/grid'
import SearchBar from '../../components/search-bar'

const Pokemon = () => {
  const [characterList, setCharacterList] = useState([])
  const [pagSize, setPagSize] = useState(560)
  const [searchName, setSearchName] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    pageSwitch(1)
  }, []);

  let pageTest = 1
  const pageSwitch = current => {
    pageTest = ((current-1)*20)
    Axios
    .get(`https://pokeapi.co/api/v2/pokemon?offset=${pageTest}&limit=20`, {
      headers: {PokeFav: 'teste'}
    })
    .then((res) => {
      // setPagSize(res.data.count)
      setCurrentPage(current)
      setCharacterList(res.data.results)
    });
  }

  return  (
    <>
      <FilterContainer className="topo">
      <Pagination
        simple
        current={currentPage}
        onChange={pageSwitch}
        defaultCurrent={currentPage}
        total={pagSize}
        hideOnSinglePage
        />

        <SearchBar setPag={setPagSize} setSearchName={setSearchName} setList={setCharacterList} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      </FilterContainer>

      <Grid list={characterList}/>
    </>
  )
}

const FilterContainer = styled.div`
  padding: 10px 0px;
  display: flex;
  justify-content: center;
`

export default Pokemon;
