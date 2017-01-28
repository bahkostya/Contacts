import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import CommunicationContactMail from 'material-ui/svg-icons/communication/contact-mail';

import AddContact from './AddContact.jsx';
import Menu from './Menu.jsx';
import ContactsList from './ContactsList.jsx';

import styles from './ContactsApp.scss';

export default function ContactsApp() {
    return (
        <MuiThemeProvider>
            <div className={styles.root}>
                <CommunicationContactMail
                    color="#FF5722"
                    className={styles.logo}
                    style={{
                        height: 48,
                        width: 48,
                    }}
                />
                <div className={styles.container}>
                    <AddContact />
                    <Menu />
                    <ContactsList />
                </div>
            </div>
        </MuiThemeProvider>
    );
}
