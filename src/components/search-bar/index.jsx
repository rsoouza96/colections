import {  Input } from "antd";
import styled from "styled-components";
import Axios from 'axios'
import { useLocation } from 'react-router-dom'

const { Search } = Input

const SearchBar = ({setPag, setSearchName, setList, currentPage, setCurrentPage}) => {

    const location = useLocation();

    const handleSearch = (value) => {
        if(location.pathname === "/rickandmorty"){
            setCurrentPage(1)
            currentPage=1
            Axios
            .get(`https://rickandmortyapi.com/api/character/?page=${currentPage}&name=${value}`)
            .then((res) => {
                setList(res.data.results)
                setPag((res.data.info.pages)*10)
                setSearchName(value)
            })
        }else{
            setCurrentPage(1)
            currentPage=1
            Axios
            .get(`https://pokeapi.co/api/v2/pokemon/${value}`)
            .then((res) => {
                if(value === ''){
                    setPag(560)
                    setList(res.data.results)
                    setSearchName(value)
                }else{
                    setPag(1)
                    setList(res.data.forms)
                    setSearchName(value)
                }
            })
        }
    }

    return (
        <>
            <StyledSearch placeholder="Pesquise" onSearch={handleSearch} />
        </>
    )
}

const StyledSearch = styled(Search)`
    width: 40vw;
    @media(min-width: 800px) {
        width: 20vw;
    }
`


export default SearchBar