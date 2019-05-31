import styled from "styled-components";

export const CardContainer = styled.div`
  width: 15rem;
  margin-bottom: 10px;
  line-height: 1.35em;
  margin-top: 5px;
  margin-left: 5px;
  border: 1px solid #c9c9c9;

  &:active {
    color: black;
  }

  .card-body {
    background-color: white;
  }
  .card-header {
    font-weight: bold;

    &.purple {
      background-color: #b8afff;
    }

    &.blue {
      background-color: #9fd6ff;
    }

    &.yellow {
      background-color: #fcf3b0;
    }
  }

  i {
    color: red;
    vertical-align: -1px;
  }

  a {
    text-decoration: none;
    outline: none;
  }

  .list-group {
    max-height: 210px;
    overflow-y: scroll;
  }

  .list-group-item {
    padding: 0.5rem 1.25rem;
    font-size: 0.9em;
    line-height: 1.35em;

    &:hover {
      background: #f5f6f7;
    }
  }

  li {
    font-size: 0.9em;
    color: black;
  }
`;
