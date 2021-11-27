import React from "react";
import styled from "styled-components";
import Feature from "./home";

const { innerWidth: windowWidth } = window;

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  flex-direction: column;
  display: flex;
  @media (max-width: 800px) {
        justify-content: center;
        align-items: center;
        width: ${windowWidth}px;
        height: 100%;
        padding: 0px;
        overflow-x: hidden; 
    }
`;



export function Homepage(props) {
    return(
    <PageContainer>
        <Feature/>
    </PageContainer>
    )
}
