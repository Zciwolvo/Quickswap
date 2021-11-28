import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 70%;
    max-width: 1440px;
    height: 100%;
    margin: auto;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: center;
    @media (max-width: 800px) {
        width: 100%;
    }
`;

const Thing = styled.div`
    width: 50vw;
    height: 50vh;
    background-color: lightgrey;
`;

const Window = styled.div`
    border: black 1px solid;
    text-align: start;

`;

const WindowText = styled.h1`
    font-family: 'Courier New', Courier, monospace;
    font-size: 2em;
    font-weight: 400;
`;

const SelectText = styled.h1`
    font-family: 'Courier New', Courier, monospace;
    font-size: 3em;
    font-weight: 700;
`;

const Number = styled.h1`
    font-family: 'Courier New', Courier, monospace;
    font-size: 4em;
    font-weight: 700;
    color: grey;
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
`;



const Feature = () => {
    return(
        <Container>
            <iframe src="https://quickswap.exchange/#/swap?outputCurrency=0x831753dd7087cac61ab5644b308642cc1c33dc13" style={{height:"660px", width:"100%"}} id="myId" />

        </Container>
    )
}

export default Feature;