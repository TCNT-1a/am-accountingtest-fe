// src/dataProvider.js
import { fetchUtils } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';

const dataProvider = simpleRestProvider('https://localhost:7117/api');
export default dataProvider;