import styled from 'styled-components';

export const ButtonContainer = styled.button`
color:white
text-transform:capitalize;
font-size:1rem;
background-color: #00a7ec;
border-radius: 0.2rem;
padding: 0.2rem 0.5rem
cursor:pointer;
transition:all 0.5s ease-in-out;
border:0;
&:hover{
    background:#0086bd;
}
&:focus{
    outline: none;
}
`;