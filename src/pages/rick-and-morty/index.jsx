import Axios from "axios";
import { Pagination } from 'antd'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

import Grid from '../../components/grid'
import SearchBar from '../../components/search-bar'

const RickAndMorty = () => {
  const [characterList, setCharacterList] = useState([])
  const [pagSize, setPagSize] = useState(340)
  const [searchName, setSearchName] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    pageSwitch(1)
  }, []);

  const pageSwitch = current => {
    Axios
    .get(`https://rickandmortyapi.com/api/character/?page=${current}&name=${searchName}`, {
      headers: {RickandMortyFav: 'teste'}
    })
    .then((res) => {
      setCurrentPage(current)
      setCharacterList(res.data.results)
    });
  }

  return  (
    <>
      <FilterContainer className="topo">
        <Pagination
        size="small"
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

export default RickAndMorty;
