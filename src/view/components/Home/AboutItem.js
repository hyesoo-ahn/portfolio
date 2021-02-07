import React from 'react';
import styled from 'styled-components'

function AboutItem({title, description, thumbnail}) {

    return (
        <Container>
            <Thumb>
                <img src={thumbnail} alt=""/>
            </Thumb>
            <Desc>
                <h3>{title}</h3>
                <p>{description}</p>
            </Desc>
        </Container>
    )
}

const Container = styled.div`
  text-align: center;
`;

const Thumb = styled.div`
  margin-bottom: 30px;

  img {
    width: 120px;
    color:#333;
    height: 120px;
    border-radius: 50%;
  }
`;

const Desc = styled.div`
  h3 {
    font-size: 18px;
    font-weight: 500;
    color:#777;
  }
`;
export default AboutItem;