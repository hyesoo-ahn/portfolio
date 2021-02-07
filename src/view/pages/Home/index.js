import React from 'react'
import styled from 'styled-components';
import Visual from "../../components/Home/Visual";
import About from "../../components/Home/About";

const Home = () => {
    
    return (
        <Container>
            <Visual/>
            <About/>
        </Container>
    )
}


const Container = styled.div`
    
`;

export default Home;