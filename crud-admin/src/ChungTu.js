import {
  List,
  Datagrid,
  TextField,
  TextInput,
  DateField,
  Create,
  SimpleForm,
  DateInput,
  NumberInput,
  Edit,
  ReferenceManyField,
  useRecordContext,
  useCreate,
  useRefresh,
  Button,
  DeleteButton,
  BulkDeleteButton
} from "react-admin";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";

// Bộ lọc cho danh sách chứng từ
export const ChungTuFilter = [
  <TextInput label="Số chứng từ" source="soChungTu" alwaysOn />,
  <TextInput label="Loại chứng từ" source="loaiChungTu" alwaysOn />,
  <DateInput label="Ngày lập" source="ngayChungTu" alwaysOn />,
];

// Danh sách chứng từ
export const ChungTuList = (props) => (
  <List {...props} filters={ChungTuFilter}>
    <Datagrid rowClick="edit">
      <TextField source="id" label="ID" />
      <TextField source="soChungTu" label="Số chứng từ" />
      <DateField source="ngayChungTu" label="Ngày chứng từ" />
      <TextField source="loaiChungTu" label="Loại chứng từ" />
      <TextField source="dienGiai" label="Diễn giải" />
      <TextField source="tongTien" label="Tổng tiền" />
      <DateField source="updateDate" label="Ngày cập nhật" />
      <DateField source="createDate" label="Ngày tạo" />
      {/* <BooleanField source="isDeleted" label="Đã xóa" /> */}
    </Datagrid>
  </List>
);

// Tạo mới chứng từ
export const ChungTuCreate = (props) => (
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

// Form tạo nhanh chi tiết chứng từ trong trang edit chứng từ
const ChiTietChungTuInlineCreate = ({ onSuccess }) => {
  const [create] = useCreate();
  const record = useRecordContext();
  const chungTuId = record?.id;
  const refresh = useRefresh();
  const [form, setForm] = useState({
    maTaiKhoan: "",
    dienGiai: "",
    soTien: 0,
    loaiGiaoDich: "",
  });

  // Xử lý thay đổi giá trị các trường nhập
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  // Xử lý lưu chi tiết chứng từ mới
  const handleSubmit = () => {
    create(
      "chitietchungtu",
      { data: { ...form, chungTuId } },
      {
        onSuccess: () => {
          if (onSuccess) onSuccess();
          setForm({
            maTaiKhoan: "",
            dienGiai: "",
            soTien: 0,
            loaiGiaoDich: "",
          });
          refresh(); // Tải lại danh sách chi tiết chứng từ
        },
      }
    );
  };

  return (
    <div
      style={{
        margin: 8,
        padding: 8,
        border: "1px solid #eee",
        borderRadius: 4,
      }}
    >
      <input
        type="text"
        name="maTaiKhoan"
        placeholder="Mã tài khoản"
        value={form.maTaiKhoan}
        onChange={handleChange}
      />
      <input
        type="text"
        name="dienGiai"
        placeholder="Diễn giải"
        value={form.dienGiai}
        onChange={handleChange}
      />
      <input
        type="number"
        name="soTien"
        placeholder="Số tiền"
        value={form.soTien}
        onChange={handleChange}
        min={0}
      />
      <input
        type="text"
        name="loaiGiaoDich"
        placeholder="Loại giao dịch"
        value={form.loaiGiaoDich}
        onChange={handleChange}
      />
      <button type="button" onClick={handleSubmit}>
        Lưu
      </button>
    </div>
  );
};

// Trang chỉnh sửa chứng từ, có hiển thị và thêm nhanh chi tiết chứng từ
export const ChungTuEdit = (props) => {
  const [showCreate, setShowCreate] = useState(false);
  const refresh = useRefresh();
  return (
    <Edit {...props}>
      <>
        <SimpleForm>
          <TextInput source="soChungTu" label="Số chứng từ" />
          <DateInput source="ngayChungTu" label="Ngày chứng từ" />
          <TextInput source="loaiChungTu" label="Loại chứng từ" />
          <TextInput source="dienGiai" label="Diễn giải" />
          <NumberInput source="tongTien" label="Tổng tiền" />
        </SimpleForm>
        <div style={{ margin: 16 }}>
          <div
            style={{ display: "flex", alignItems: "center", marginBottom: 8 }}
          >
            <span style={{ fontWeight: "bold", marginRight: 8 }}>
              Chi tiết chứng từ
            </span>
            <Button
              label="Thêm chi tiết chứng từ"
              onClick={() => setShowCreate(!showCreate)}
            >
              <AddIcon />
            </Button>
          </div>
          {showCreate && (
            <ChiTietChungTuInlineCreate
              onSuccess={() => setShowCreate(false)}
            />
          )}

          <ReferenceManyField
            label="Chi tiết chứng từ"
            reference="chitietchungtu"
            target="chungTuId"
          >
            <Datagrid
              rowClick="edit"
              
              // bulkActionButtons={
              //   <BulkDeleteButton
              //     mutationOptions={{
              //       onSuccess: () => refresh(),
              //     }}
              //   />
              // }
            >
              <TextField source="id" label="ID" />
              <TextField source="maTaiKhoan" label="Mã tài khoản" />
              <TextField source="dienGiai" label="Diễn giải" />
              <TextField source="soTien" label="Số tiền"/>
              <TextField source="loaiGiaoDich" label="Loại giao dịch" />
              {/* <DeleteButton
                undoable={false}
                mutationOptions={{
                  onSuccess: () => refresh(),
                }}
              /> */}
              {/* <BooleanField source="isDeleted" label="Đã xóa" /> */}
            </Datagrid>
          </ReferenceManyField>
        </div>
      </>
    </Edit>
  );
};
