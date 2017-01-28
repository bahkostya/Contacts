import { combineReducers } from 'redux';

import contacts from './contacts';
import filter from './filter';
import layout from './layout';

export default combineReducers({ contacts, filter, layout });
