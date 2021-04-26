import { combineReducers } from 'redux';

import loginAdmin from './loginAdmin.js';
import loginSales from './loginSales.js';

const allReducers = combineReducers({
    loginAdmin,
    loginSales
})

export default allReducers;