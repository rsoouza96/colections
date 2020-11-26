import { Row, Col } from 'antd';
import { useLocation } from 'react-router-dom'
import CardRender from '../card-render'


const Grid = ({ list }) => {
    const location = useLocation()
    if(location.pathname === '/rickandmorty'){
        const cards = list.map((card, index) => (
            <Col key={index}
            xxl={{ span: 4, offset: 1 }}
            lg={{ span: 6, offset: 1 }}
            xs={{ span: 10, offset: 1, wrap: true }}
            >
                <CardRender card={card} />
            </Col>
        ))
    
        return (
           <Row justify="center" gutter={[8,8]}>
               {cards}
           </Row>
        )

    }else{
            const cards = list.map((card, index) => (
                <Col key={index}
                xxl={{ span: 4, offset: 1 }}
                lg={{ span: 6, offset: 1 }}
                xs={{ span: 10, offset: 1, wrap: true }}
                >
                    <CardRender card={card} />
                </Col>
            ))
        
            return (
               <Row justify="center" gutter={[8,8]}>
                   {cards}
               </Row>
            )
    }
}

export default Grid