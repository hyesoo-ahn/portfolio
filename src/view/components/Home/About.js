import React from 'react';
import styled from 'styled-components'
import SectionTitle from "../Title/SectionTitle";
import {ContentContainer, SectionContainer} from "../Layout/Layout.Styled";
import AboutList from "./AboutList";
import {aboutData} from "../../data";

function  About () {


    return (

        <Container>
            <ContentContainer>
                <SectionTitle title={'about'} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. \n Commodi minima quam vero? Eligendi, inventore odio."}/>
                <AboutList data={aboutData}/>
            </ContentContainer>
        </Container>
    )
}

const Container = styled(SectionContainer)`

`;
    
export default About;