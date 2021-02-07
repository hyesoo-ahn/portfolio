import React from 'react';
import styled from 'styled-components'
import Images from "../../../images/Images";
import {Overlay} from "../Layout/Layout.Styled";

function Visual() {
    return (
        <Container>
            <Overlay alpha={0.4}/>
            <Content>
                <h1>안녕하세요!</h1>
            </Content>
        </Container>
    )
}

const Container = styled.div`
  position: relative;
  height: 600px;
  background: #ddd url(${Images.visual}) 50% / cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  position:relative;
  h1 {
    font-size: 30px;
    color: #fff;
  }

`;

export default Visual;