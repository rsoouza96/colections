import { Switch, useLocation, useHistory, Route } from "react-router-dom";
import "antd/dist/antd.css";
import { Menu } from "antd";
import styled from "styled-components";
import Logo from "./img/home.png";

import Pokemon from "./pages/pokemon";
import RickAndMorty from "./pages/rick-and-morty";
import PokeFav from './pages/pokemon-favorites'
import RaMFav from './pages/rick-and-morty-favorites'

const { SubMenu } = Menu;

function App() {
  const history = useHistory();
  const location = useLocation();

  return (
    <OuterContainer>
      <StyledMenu
        theme="light"
        mode="horizontal"
        style={{ width: "100%", borderRight: 0 }}
        selectedKeys={location.pathname}
      >
        <SubMenu key="sub1" title="Rick and Morty">
          <Menu.Item
            key="/rickandmorty"
            onClick={(e) => {
              history.push(e.key);
            }}
          >
            Todos
          </Menu.Item>
          {/* <Menu.Item key="/rickandmorty/favorites"
          onClick={(e) => {
            history.push(e.key);
          }}
          >
            Favoritos
          </Menu.Item> */}
        </SubMenu>

        <SubMenu key="sub2" title="Pokemon">
          <Menu.Item
            key="/pokemon"
            onClick={(e) => {
              history.push(e.key);
            }}
          >
            Todos
          </Menu.Item>
          {/* <Menu.Item key="4"
            key="/pokemon/favorites"
            onClick={(e) => {
              history.push(e.key);
            }}
            >
              Favoritos
            </Menu.Item> */}
        </SubMenu>

      </StyledMenu>

      <ContentContainer>
        <Switch>
          <Route exact path="/">
            <StyleBG>
              <StyledBGT />
            </StyleBG>
          </Route>
          <Route exact path="/pokemon">
            <Pokemon />
          </Route>
          <Route exact path="/rickandmorty">
            <RickAndMorty />
          </Route>
{/* 
          <Route exact path="/pokemon/favorites">
            <PokeFav />
          </Route>
          <Route exact path="/rickandmorty/favorites">
            <RaMFav />
          </Route> */}



        </Switch>
      </ContentContainer>
    </OuterContainer>
  );
}

const OuterContainer = styled.div`
  width: 100%;
  display: flex;
`;

const StyledMenu = styled(Menu)`
  display:flex;
  position: fixed;
  z-index: 999;
  width:100%;
  justify-content: space-between;
  align-items: center;  
`

const ContentContainer = styled.div`
  padding-top: 50px;
  min-width: 100%;
`;

const StyleBG = styled.div`
  position:relative;
  display: flex;
  width: 100%;
  height: 90vh;
  align-items: center;
`

const StyledBGT = styled.div `
  background-image: url(${Logo});
  width: 100%;
  height: 350px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`

export default App;