import React, { Component } from 'react'
import styled from 'styled-components';

export default class Submit extends Component {
    render() {
        return (
            <SubmitWrapper>
                <form>
                    <div class="form-group">
                        <label for="exampleFormControlSelect1">Language select</label>
                        <select class="form-control" id="exampleFormControlSelect1">
                            <option>HTML</option>
                            <option>JAVA</option>
                            <option>RUST</option>
                            <option>GO</option>
                            <option>JAVASCRIPT</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlTextarea3">Code</label>
                        <textarea class="form-control" id="exampleFormControlTextarea3" rows="7"></textarea>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlTextarea3">Description</label>
                        <textarea class="form-control" id="exampleFormControlTextarea3" rows="3"></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </SubmitWrapper>
        )
    }
}

const SubmitWrapper = styled.div`
        margin-bottom: 15px;
        background:white;
        padding: 15px 15px;
`