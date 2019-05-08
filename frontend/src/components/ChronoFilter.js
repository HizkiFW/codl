import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default class ChronoFilter extends Component {
  render() {
    return (
      <SortWrapper>
        <Link to={`/t/${this.props.lang}/new`}>
          <span
            className={
              this.props.sortByNew ? "sort-by-link selected" : "sort-by-link"
            }
          >
            NEWEST
          </span>
        </Link>
        <span className="separator" />
        <Link to={`/t/${this.props.lang}/best`}>
          <span
            className={
              !this.props.sortByNew ? "sort-by-link selected" : "sort-by-link"
            }
          >
            POPULAR
          </span>
        </Link>
      </SortWrapper>
    );
  }
}

const SortWrapper = styled.div`
  text-align: center;
  font-family: Arial;
  height: 45px;
  padding: 10px 0px;

  a {
    text-decoration: none;
    color: inherit;
    outline: none;
  }

  .sort-by-link {
    display: inline-block;
    padding: 2px 8px;
    font-size: 0.95em;

    &:hover {
      border-radius: 2px;
      background-color: rgba(26, 26, 27, 0.1);
    }
  }

  .sort-by-link.selected {
    background: #003ee6;
    color: white;
    border-radius: 2px;
  }

  .separator {
    border-left: 2px solid #a7a7a7;
    display: inline-block;
    margin: 0px 7px;
    height: 15px;
  }
`;
