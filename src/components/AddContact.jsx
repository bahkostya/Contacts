import React, { Component } from 'react';
import { connect } from 'react-redux';

import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import { addContact } from '../actions';

import styles from './AddContact.scss';

@connect(undefined, { addContact })
export default class AddContact extends Component {
    constructor() {
        super();

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    state = {
        name: '',
        email: '',
        errorText: {
            name: '',
            email: '',
        },
    }

    handleNameChange(e) {
        this.setState({
            name: e.target.value,
        });
    }

    handleEmailChange(e) {
        this.setState({
            email: e.target.value,
        });
    }

    handleButtonClick() {
        if (this.state.name === '' || this.state.email === '') {
            this.setState({
                errorText: {
                    name: this.state.name === '' && 'Забыли ввести имя',
                    email: this.state.email === '' && 'Збыли ввести email',
                },
            });
            return;
        }

        this.props.addContact(this.state.name, this.state.email);

        this.setState({
            name: '',
            email: '',
            errorText: {
                name: '',
                email: '',
            },
        });
    }

    render() {
        const inlineStyles = {
            name: {
                hintStyle: {
                    fontWeight: 500,
                },
                label: {
                    fontSize: 24,
                    fontWeight: 500,
                },
            },
            email: {
                label: {
                    fontSize: 18,
                },
            },
        };

        return (
            <Paper
                zDepth={2}
                rounded={false}
                className={styles.root}
            >
                <div
                    className={styles.input}
                >
                    <TextField
                        hintText="Введите имя..."
                        hintStyle={inlineStyles.name.hintStyle}
                        style={inlineStyles.name.label}
                        fullWidth
                        underlineShow={false}
                        value={this.state.name}
                        onChange={this.handleNameChange}
                        errorText={this.state.errorText.name}
                    />
                    <TextField
                        hintText="Введите email..."
                        style={inlineStyles.email.label}
                        fullWidth
                        underlineShow={false}
                        value={this.state.email}
                        onChange={this.handleEmailChange}
                        errorText={this.state.errorText.email}
                    />
                </div>
                <RaisedButton
                    label="Создать"
                    labelColor="#fff"
                    backgroundColor="#689F38"
                    className={styles.create}
                    onTouchTap={this.handleButtonClick}
                />
            </Paper>
        );
    }
}
