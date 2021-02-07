import React from 'react'
import styled from 'styled-components';
import {navigate} from "../../../lib/History";

const Header = () => {

    const routes = [
        {
            name: 'home',
        },
        {
            name: 'about',
        },
        {
            name: 'recent works',
        },
    ]

    return (
        <Container>
            <Logo/>
            <Nav>
                {
                    routes.map((item, i) => <NavItem key={i}>{item.name}</NavItem>)
                }
            </Nav>
        </Container>

    )
}

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 0 50px;
  align-items: center;
`;


const Logo = styled.div`
  
`;

const Nav = styled.nav`
  display: flex;
`;
const NavItem = styled.div`
  display: flex;
  align-items: center;
  height: 70px;
  padding: 0 25px;
  color:#333;
  font-size: 16px;
  text-transform: capitalize;
  cursor:pointer;
`;

export default Header;