import React, { Fragment, useEffect, useState } from "react";
import {
  Table,
  Input,
  InputNumber,
  Popconfirm,
  Form,
  Typography,
  Button,
} from "antd";
import "./styles.scss";
import {
  deleteUserItem,
  getAdminUserList,
} from "../../../store/actions/Admin/user";
import { useDispatch, useSelector } from "react-redux";
import { EditOutlined, SearchOutlined } from "@mui/icons-material";
import { DeleteOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";

const AdminUser = () => {
  const [form] = Form.useForm();
  const { userList } = useSelector((state) => state.adminUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAdminUserList({ tukhoa: userList }));
  }, [dispatch, userList]);

  const onSearch = (value) => {
    console.log(value);
    // dispatch api
  };

  const columns = [
    {
      title: "Tài Khoản",
      dataIndex: "taiKhoan",
      width: "15%",
      editable: true,
    },
    {
      title: "Mật khẩu",
      dataIndex: "matKhau",
      width: "10%",
      editable: true,
    },
    {
      title: "Họ Tên",
      dataIndex: "hoTen",
      width: "25%",
      editable: true,
    },
    {
      title: "Email",
      dataIndex: "email",
      width: "15%",
      editable: true,
    },
    {
      title: "Số điện thoại",
      dataIndex: "soDT",
      width: "10%",
      editable: true,
    },
    {
      title: "Thao tác",
      dataIndex: "thaoTac",

      render: (_, userList) => {
        return (
          <Fragment>
            <div className="admin-user-gr">
              <Link
                to={`/admin/users/${userList.taiKhoan}`}
                className="admin-user-btn admin-user-btn-edit"
                type="button"
              >
                <EditOutlined />
              </Link>

              <Button
                onClick={() => {
                  const token = localStorage.getItem("token");
                  dispatch(
                    deleteUserItem({ taiKhoan: userList.taiKhoan, token })
                  );
                }}
                className="admin-user-btn admin-user-btn-delete"
                type="button"
              >
                <DeleteOutlined />
              </Button>
            </div>
          </Fragment>
        );
      },
    },
  ];

  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record) => ({
        record,
        // inputType: col.dataIndex === "age" ? "number" : "text",
        // dataIndex: col.dataIndex,
        title: col.title,
      }),
    };
  });

  return (
    <div className="admin-users ">
      <div className="admin-user">
        <Input.Search
          onSearch={onSearch}
          placeholder="Find user..."
          enterButton
          className="admin--user__search"
          suffix={<SearchOutlined style={{ color: "#2f80ed", fontSize: 18 }} />}
        />
      </div>

      <Form form={form} component={false}>
        <Table
          className="admin_users"
          bordered
          dataSource={userList}
          columns={mergedColumns}
          rowClassName="editable-row"
        />
      </Form>
    </div>
  );
};

export default AdminUser;
