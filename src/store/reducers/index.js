// third-party
import { combineReducers } from 'redux';

// project import
import menu from './menu';
import form from './form';
import user from './user';

// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = combineReducers({ menu, form, user });

export default reducers;
