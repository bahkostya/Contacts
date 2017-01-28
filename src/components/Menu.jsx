import React, { Component } from 'react';
import { connect } from 'react-redux';

import ViewList from 'material-ui/svg-icons/action/view-list';
import ViewModule from 'material-ui/svg-icons/action/view-module';

import FilterLink from './FilterLink.jsx';
import LayoutLink from './LayoutLink.jsx';

import styles from './Menu.scss';

@connect(state => ({ contacts: state.contacts }))
export default class Menu extends Component {
    render() {
        if (!this.props.contacts.length) {
            return false;
        }

        return (
            <div className={styles.root}>
                <div>
                    <FilterLink filter="SHOW_ALL">Все</FilterLink>
                    <FilterLink filter="SHOW_FAVOURITE">Избранные</FilterLink>
                </div>
                <div>
                    <LayoutLink layout="LIST_VIEW">
                        <ViewList color="#8c8c8c" />
                    </LayoutLink>
                    <LayoutLink layout="MODULE_VIEW">
                        <ViewModule color="#8c8c8c" />
                    </LayoutLink>
                </div>
            </div>
        );
    }
}
