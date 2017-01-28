import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setFilter } from '../actions';

import styles from './FilterLink.scss';

@connect(mapStateToProps, mapDisplatchToProps)
export default class FilterLink extends Component {
    render() {
        const { active, children, onClick } = this.props;

        if (active) {
            return <button className={styles.active}>{children}</button>;
        }

        return <button className={styles.root} onClick={onClick}>{children}</button>;
    }
}

function mapStateToProps(state, ownProps) {
    return {
        active: ownProps.filter === state.filter,
    };
}

function mapDisplatchToProps(dispatch, ownProps) {
    return {
        onClick: () => dispatch(setFilter(ownProps.filter)),
    };
}
