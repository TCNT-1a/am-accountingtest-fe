// src/App.js
import React from 'react';
import { Admin, Resource, ListGuesser, EditGuesser, List, Datagrid, TextField, TextInput, BooleanField, DateField,
  Create, SimpleForm, DateInput, NumberInput, BooleanInput,
  Edit,  ReferenceManyField, SingleFieldList, ChipField
  } from 'react-admin';
import dataProvider from './dataProvider.js';
import {ChungTuCreate,ChungTuEdit, ChungTuFilter, ChungTuList} from "./ChungTu.js";
import { ChiTietChungTuCreate, ChiTietChungTuEdit, ChiTietChungTuList } from './ChiTietChungTu.js';

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="chungtu" list={ChungTuList} edit={ChungTuEdit} create={ChungTuCreate} options={{ label: "Chứng từ" }} />
    <Resource name="chitietchungtu" list={ChiTietChungTuList} create={ChiTietChungTuCreate} edit={ChiTietChungTuEdit} options={{ label: "Chi tiết chứng từ" }}/>
  </Admin>
);
export default App;