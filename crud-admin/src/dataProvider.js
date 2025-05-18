// src/dataProvider.js
import { fetchUtils } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
const url = "https://apiketoan.tachinguyen.net/api";
// const url = "https://localhost:7117/api";
const dataProvider = simpleRestProvider(url);
export default dataProvider;