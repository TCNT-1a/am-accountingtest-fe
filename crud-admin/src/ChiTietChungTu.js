import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  List,
  Datagrid,
  TextField,
  TextInput,
  BooleanField,
  DateField,
  Create,
  SimpleForm,
  DateInput,
  NumberInput,
  BooleanInput,
  Edit,
  ReferenceManyField,
  SingleFieldList,
  ChipField,
  useCreate,
  useRecordContext,
  useRefresh,
  useRedirect,
  
} from "react-admin";
import { useState } from "react";
export const ChiTietChungTuList = (props) => (
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
    </Datagrid>
  </List>
);

export const ChiTietChungTuCreate = (props) => {
  const [create] = useCreate();
  const refresh = useRefresh();
  const redirect = useRedirect();

  const handleSubmit = (values) => {
    create(
      "chitietchungtu",
      { data: values },
      {
        onSuccess: () => {
          refresh();
          redirect("list", "chitietchungtu");
        },
      }
    );
  };  

  return (
    <Create {...props}>
      <SimpleForm onSubmit={handleSubmit}>
        <TextInput source="maTaiKhoan" label="Mã tài khoản" />
        <TextInput source="dienGiai" label="Diễn giải" />
        <NumberInput source="soTien" label="Số tiền" />
        <TextInput source="loaiGiaoDich" label="Loại giao dịch" />
        <TextInput source="chungTuId" label="ID chứng từ" />
      </SimpleForm>
    </Create>
  );
};

export const ChiTietChungTuEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="id" label="Id" />
      <TextInput source="maTaiKhoan" label="Mã tài khoản" />
      <TextInput source="dienGiai" label="Diễn giải" />
      <NumberInput source="soTien" label="Số tiền" />
      <TextInput source="loaiGiaoDich" label="Loại giao dịch" />
      <TextInput source="chungTuId" label="ID chứng từ" />
    </SimpleForm>
  </Edit>
);
