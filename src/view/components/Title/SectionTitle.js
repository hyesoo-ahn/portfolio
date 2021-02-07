import React from 'react';
import styled from 'styled-components'

function SectionTitle({title, description}) {
    return (
        <Container>
            <h2>{title}</h2>
            {
                description &&
                <p>{description}</p>
            }
        </Container>
    )
}

const Container = styled.div`
  text-align: center;
  margin-bottom: 50px;
  h2 {
    font-size: 26px;
    margin-bottom: 10px;
    font-weight: 500;
    color:#333;
  }
  p {
    font-size: 18px;
    color:#777;
    line-height: 1.5;
  }
`;

export default SectionTitle;