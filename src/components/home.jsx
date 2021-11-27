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
            <Thing>
                <Window>
                    <Column>
                        <WindowText>
                            From(estimated)
                        </WindowText>
                        <Row style={{justifyContent:"space-between"}}   >
                            <Number>0.0</Number>
                            <SelectText>HEX</SelectText>
                        </Row>
                    </Column>
                </Window>
                <Window>
                    <Column>
                        <WindowText>
                            To
                        </WindowText>
                        <Row style={{justifyContent:"space-between"}}   >
                            <Number>0.0</Number>
                            <SelectText>ETH</SelectText>
                        </Row>
                    </Column>
                </Window>
            </Thing>
        </Container>
    )
}

export default Feature;