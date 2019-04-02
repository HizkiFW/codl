import styled from 'styled-components';

export const CardContainer = styled.div`
        width: 15rem;
        margin-bottom: 10px;
        line-height: 1.35em;
        border-radius: 3px;
        border: 1px solid #d6d6d6;
        &:active{
            color:black;
        }
        i {
            color:red;
            vertical-align: -1px;
        }

        a {
            text-decoration:none;
        }

        .list-group-item {
            padding: .5rem 1.25rem;
        }
        
        li {
            font-size: 0.9em;
            color:black;
        }
`