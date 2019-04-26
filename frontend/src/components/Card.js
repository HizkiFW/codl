import styled from 'styled-components';

export const CardContainer = styled.div`
width: 15rem;
margin-bottom: 10px;
line-height: 1.35em;
border-radius: 3px;
margin-top: 5px;
margin-left:5px;
border: 1px solid #c9c9c9;
box-shadow: var(--theme-container-box-shadow, 2px 2px 0px #bfbfbf);
    
    &:active{
        color:black;
    }

    .card-body {
        background-color: white;
    }
    .card-header {
        font-weight:bold;
        

        &.purple {
            background-color:#b8afff;
        }

        &.blue {
            background-color:#9fd6ff;
        }

        &.yellow {
            background-color:#fcf3b0;
        }
    }

    i {
        color:red;
        vertical-align: -1px;
    }

    a {
        text-decoration:none;
    }
    
    .list-group {
        max-height:200px;
        overflow-y: scroll;
    }

    .list-group-item {
        padding: .5rem 1.25rem;
    }
    
    li {
        font-size: 0.9em;
        color:black;
    }
`