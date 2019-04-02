import React from 'react';
import PropTypes from 'prop-types'
import cx from 'classnames';
import styled from 'styled-components';

export default class Upvote extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            voteStatus: props.voteStatus
        };
    }

    componentWillReceiveProps(nextProps) {
        let oldVoteStatus = this.props.voteStatus;
        let newVoteStatus = nextProps.voteStatus;

        // don't update unless post's vote status changes
        if (oldVoteStatus === newVoteStatus) {
            return;
        }

        this.setState({
            voteStatus: nextProps.voteStatus
        });
    }

    allowed() {
        let {
            shouldAllow,
            onDisallowed
        } = this.props;

        // allowed is the return value of shouldAllow() or true
        let allowed = shouldAllow ? shouldAllow() : true;

        if (!allowed) {
            onDisallowed();
        }

        return allowed;
    }

    vote(nextStatus) {
        let {
            voteStatus
        } = this.state;

        let {
            onUpvote,
            onDownvote,
            onRemoveVote
        } = this.props;

        if (!this.allowed()) {
            return;
        }

        let prevStatus = voteStatus;

        if (prevStatus === nextStatus) {
            // undo current vote
            onRemoveVote();
            nextStatus = 0;
        } else {
            // add/change vote

            if (prevStatus !== 0 && nextStatus !== 0) {
                // undo previous vote first
                onRemoveVote();
            }

            // add new vote
            if (nextStatus === 1) {
                onUpvote();
            } else {
                onDownvote();
            }
        }

        this.setState({
            // update voteStatus
            voteStatus: nextStatus
        });
    }

    render() {
        let {
            voteStatus
        } = this.state;

        let {
            className,
            upvoteContent,
            downvoteContent,
            beforeContent,
            afterContent
        } = this.props;

        let upvoteCx = cx(className, {
            'upvoted': voteStatus === 1,
            'downvoted': voteStatus === -1
        });

        let upvote = upvoteContent && (
            <div className="upvote" onClick={(e) => {
                e.preventDefault();
                this.vote(1)
            }}>
                {upvoteContent}
            </div>
        );

        let downvote = downvoteContent && (
            <div className="downvote" onClick={(e) => {
                e.preventDefault();
                this.vote(-1)
            }}>
                {downvoteContent}
            </div>
        );

        return (
            <UpvoteWrapper>
                <div className={upvoteCx}>

                    {beforeContent}

                    <div className={`${className}-buttons`}>
                        {upvote}
                        {afterContent}
                        {downvote}
                    </div>


                </div>
            </UpvoteWrapper>
        );
    }
}

Upvote.propTypes = {
    className: PropTypes.string,

    voteStatus: PropTypes.number,
    upvoteCount: PropTypes.number,

    shouldAllow: PropTypes.func,
    onDisallowed: PropTypes.func,

    onUpvote: PropTypes.func,
    onDownvote: PropTypes.func,
    onRemoveVote: PropTypes.func,

    upvoteContent: PropTypes.element,
    downvoteContent: PropTypes.element,
    beforeContent: PropTypes.element,
    afterContent: PropTypes.element
};

Upvote.defaultProps = {
    className: 'react-upvote',

    voteStatus: 0,
    upvoteCount: 0,

    shouldAllow: null,
    onDisallowed: () => { },

    onUpvote: null,
    onDownvote: null,
    onRemoveVote: null,

    upvoteContent: null,
    downvoteContent: null,
    beforeContent: null,
    afterContent: null
};

const UpvoteWrapper = styled.div`
text-align: center;
.react-upvote {
    line-height: 25px;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;

    .upvote {
        line-height: 1;
        cursor: pointer;

        &:hover {
            color: #f00;
        }
    }

    .downvote {
        line-height: 1;
        cursor: pointer;

        &:hover {
            color: #39f;
        }
    }

    &.downvoted .downvote-icon {
        color: #39f;
    }

    &.upvoted .upvote-icon{
        color: #f00;
    }
}

`
