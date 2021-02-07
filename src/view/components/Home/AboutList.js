import React from 'react';
import styled from 'styled-components'
import AboutItem from "./AboutItem";

function AboutList({data}) {
    return (
        <Container>
            <Row>
            {
                data.map((item, idx) => (
                    <Col key={idx}>
                        <AboutItem  {...item}/>
                    </Col>
                ))
            }
            </Row>
        </Container>
    )
}

const Container = styled.div`

`;

const Row = styled.div`
  display: flex;
  margin-left: -15px;
  margin-right: -15px;
`;

const Col = styled.div`
width: 33.3333%;
  padding: 15px;

`;

export default AboutList;