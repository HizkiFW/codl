import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default class ChronoFilter extends Component {
  render() {
    if (this.props.sortByNew) {
      return (
        < SortWrapper >
          <Link to={`/t/${this.props.lang}/new`}><span className="sort-by-link selected">NEWEST</span></Link>
          <span className="separator"></span>
          <Link to={`/t/${this.props.lang}/best`}><span className="sort-by-link">POPULAR</span></Link>
        </SortWrapper >
      )
    } else {
      return (
        < SortWrapper >
          <Link to={`/t/${this.props.lang}/new`}><span className="sort-by-link">NEWEST</span></Link>
          <span className="separator"></span>
          <Link to={`/t/${this.props.lang}/best`}><span className="sort-by-link selected">POPULAR</span></Link>
        </SortWrapper >
      )
    }
  }
}


const SortWrapper = styled.div`
text-align: center;
font-family: Arial;
height: 45px;
padding:10px 0px;

a {
  text-decoration: none;
  color: inherit;
  outline:none;
}

.sort-by-link {
    display: inline-block;
    padding: 2px 8px;
    font-size: 0.95em;
}

.sort-by-link.selected {
    background: #003ee6;
    color: white;
    border: 1px solid #0f0f0f;
    border-radius: 2px;
}

.separator {
    border-left: 2px solid #a7a7a7;
    display: inline-block;
    margin: 0px 7px;
    height: 15px;
}
`
