import styled from 'styled-components';

export const ButtonContainer = styled.button`
width: 115px;
padding: 3px 0px;
height: auto;
top: 12px;
text-align: center;
font-weight:bold;
font-size:14px;
border-radius: 3px;
border: 2px solid #0a0a0a;
color: white;
background: #039dff;

&:focus {
    outline:none;
}

&:hover {
    background-color: #1aa5ff;
}
`;