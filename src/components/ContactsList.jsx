import React, { Component } from 'react';
import { connect } from 'react-redux';

import ContactCard from './ContactCard.jsx';

import { toggleFavourite } from '../actions';

import styles from './ContactsList.scss';

@connect(mapStateToProps, { toggleFavourite })
export default class ContactsList extends Component {
    render() {
        const { contacts, moduleView } = this.props;
        return (
            <div className={moduleView ? styles.moduleLayout : styles.root}>
                {
                    contacts.map(contact =>
                        <div
                            key={contact.id}
                            className={moduleView ? styles.moduleCard : styles.card}
                        >
                            <ContactCard
                                id={contact.id}
                                name={contact.name}
                                email={contact.email}
                                favourite={contact.favourite}
                                onToggleFavourite={() => this.props.toggleFavourite(contact.id)}
                            />
                        </div>,
                    )
                }
            </div>
        );
    }
}

function getVisibleTodos(contacts, filter) {
    switch (filter) {
        case 'SHOW_ALL':
            return contacts;

        case 'SHOW_FAVOURITE':
            return contacts.filter(contact => contact.favourite);

        default:
            return contacts;
    }
}

function mapStateToProps(state) {
    return {
        contacts: getVisibleTodos(state.contacts, state.filter),
        moduleView: state.layout === 'MODULE_VIEW',
    };
}
