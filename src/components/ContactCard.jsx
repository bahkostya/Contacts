import React, { Component } from 'react';
import { connect } from 'react-redux';

import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import ToggleStarBorder from 'material-ui/svg-icons/toggle/star-border';
import ToggleStar from 'material-ui/svg-icons/toggle/star';

import styles from './ContactCard.scss';

@connect(state => ({ moduleView: state.layout === 'MODULE_VIEW' }))
export default class ContactCard extends Component {
    render() {
        const { name, email, favourite, onToggleFavourite, moduleView } = this.props;

        return (
            <Paper
                zDepth={2}
                rounded={false}
                className={moduleView ? styles.moduleCard : styles.root}
            >
                <div className={moduleView ? styles.moduleInfo : styles.info}>
                    <div className={styles.name}>
                        {name}
                    </div>
                    <div className={styles.email}>
                        {email}
                    </div>
                </div>
                <div className={moduleView ? styles.moduleControls : styles.controls}>
                    <button
                        className={styles.star}
                        onClick={onToggleFavourite}
                    >
                        {
                            favourite
                            ? <ToggleStar color="#FFC107" />
                            : <ToggleStarBorder color="#8c8c8c" />
                        }
                    </button>
                    <RaisedButton
                        label="Написать"
                        labelColor="#fff"
                        backgroundColor="#FF5722"
                        href={`mailto:${email}`}
                    />
                </div>
            </Paper>
        );
    }
}
