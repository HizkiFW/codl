import styled from 'styled-components';

export const CardContainer = styled.div`
        width: 15rem;
        margin-bottom: 10px;
        line-height: 1.35em;
        border-radius: 3px;
        margin-top: 5px;
        margin-left:5px;
        border: 1px solid #d6d6d6;
        &:active{
            color:black;
        }
        .card-header {
            font-weight:bold;
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