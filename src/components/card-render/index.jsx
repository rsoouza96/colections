import { Card } from 'antd'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import styled from 'styled-components'

const {Meta} = Card

const CardRender = ({card}) => {
    const location = useLocation()

    const addToFav = (e) => {
        console.log(e.currentTarget.children[0].children[0].alt,
            e.currentTarget.children[0].children[0].src
        )      
    }

    if(location.pathname === "/rickandmorty"){
        return (
            <div>
                <Card
                onClick={addToFav}
                hoverable
                cover={<img alt={card.name}
                src={card.image}
                />}>
                    <StyledMeta className="teste" title={card.name} />
                </Card>
            </div>
        )
    }else{
        const brokenUrl = card.url.split("/");
        const id = brokenUrl[brokenUrl.length - 2]
        return (
            <div>
                <Card
                onClick={addToFav}
                hoverable
                cover={<img alt={card.name}
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                />}>
                    <Meta className="teste" title={card.name} />
                </Card>
            </div>
        )
    }
}

const StyledMeta = styled(Meta)`
    .ant-card-meta-title{
        font-size: 13px;
        white-space: normal !important;
    }
`

export default CardRender