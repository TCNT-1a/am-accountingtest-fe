// src/App.js
import React from 'react';
import { Admin, Resource, ListGuesser, EditGuesser, List, Datagrid, TextField, TextInput, BooleanField, DateField,
  Create, SimpleForm, DateInput, NumberInput, BooleanInput,
  Edit
  } from 'react-admin';
import dataProvider from './dataProvider.js';

const ChungTuFilter = [
  <TextInput label="Số chứng từ" source="soChungTu" alwaysOn />,
  <TextInput label="Loại chứng từ" source="loaiChungTu" alwaysOn />,
  <DateInput label="Ngày lập" source="ngayChungTu" alwaysOn />
];

// Tạo List tùy chỉnh cho chứng từ
const ChungTuList = props => (
  <List {...props} filters={ChungTuFilter}>
    <Datagrid rowClick="edit">
      <TextField source="id" label = "ID" />
      <TextField source="soChungTu" label = "Số chứng từ" />
      <DateField source="ngayChungTu" label = "Ngày chứng từ" />
      <TextField source="loaiChungTu" label = "Loại chứng từ" />
      <TextField source="dienGiai" label="Diển giải" />
      <TextField source="tongTien" label="Tổng tiền" />
      <DateField source="updateDate" label="Ngày cập nhật" />
      <DateField source="createDate" label="Ngày tạo" />
      <BooleanField source="isDeleted" label="Đã xóa" />
    </Datagrid>
  </List>
);
const ChungTuCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="soChungTu" label="Số chứng từ" />
      <DateInput source="ngayChungTu" label="Ngày chứng từ" />
      <TextInput source="loaiChungTu" label="Loại chứng từ" />
      <TextInput source="dienGiai" label="Diễn giải" />
      <NumberInput source="tongTien" label="Tổng tiền" />
    </SimpleForm>
  </Create>
);
const ChungTuEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="soChungTu" label="Số chứng từ" />
      <DateInput source="ngayChungTu" label="Ngày chứng từ" />
      <TextInput source="loaiChungTu" label="Loại chứng từ" />
      <TextInput source="dienGiai" label="Diễn giải" />
      <NumberInput source="tongTien" label="Tổng tiền" />
    </SimpleForm>
  </Edit>
);

const ChiTietChungTuList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" label="ID" />
      <TextField source="maTaiKhoan" label="Mã tài khoản" />
      <TextField source="dienGiai" label="Diễn giải" />
      <TextField source="soTien" label="Số tiền" />
      <TextField source="loaiGiaoDich" label="Loại giao dịch" />
      <TextField source="chungTuId" label="ID chứng từ" />
      <DateField source="updateDate" label="Ngày cập nhật" />
      <DateField source="createDate" label="Ngày tạo" />
      <BooleanField source="isDeleted" label="Đã xóa" />
    </Datagrid>
  </List>
);

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="chungtu" list={ChungTuList} edit={ChungTuEdit} create={ChungTuCreate} />
    <Resource name="chitietchungtu" list={ChiTietChungTuList} edit={EditGuesser} />
  </Admin>
);
export default App;