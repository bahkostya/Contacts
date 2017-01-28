import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setLayout } from '../actions';

import styles from './FilterLink.scss';

@connect(mapStateToProps, mapDisplatchToProps)
export default class LayoutLink extends Component {
    render() {
        const { active, children, onClick } = this.props;

        if (active) {
            return (
                <button className={styles.active}>
                    {
                        React.cloneElement(
                            children,
                            {
                                color: '#000',
                            },
                        )
                    }
                </button>
            );
        }

        return <button className={styles.root} onClick={onClick}>{children}</button>;
    }
}

function mapStateToProps(state, ownProps) {
    return {
        active: ownProps.layout === state.layout,
    };
}

function mapDisplatchToProps(dispatch, ownProps) {
    return {
        onClick: () => dispatch(setLayout(ownProps.layout)),
    };
}
