// third-party
import { combineReducers } from 'redux';

// project import
import menu from './menu';
import form from './form';

// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = combineReducers({ menu, form });

export default reducers;
