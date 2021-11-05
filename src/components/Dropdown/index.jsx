import React, { Fragment, useState } from "react";
import "./index.scss";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";

const menuGenres = (
  <Menu>
    <Menu.Item key="0">
      <p>VUI LÒNG CHỌN PHIM</p>
    </Menu.Item>
  </Menu>
);

const menuDays = (
  <Menu>
    <Menu.Item key="0">
      <p>VUI LÒNG CHỌN PHIM VÀ NGÀY</p>
    </Menu.Item>
  </Menu>
);
const DropDown = () => {
  const [alignment, setAlignment] = useState("web");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <div className="dropdown">
      <div className="dropdown_left flex ">
        <div className="dropdown_left-gen">
          <Dropdown overlay={menuGenres} trigger={["click"]}>
            <a
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
            >
              CHỌN PHIM <DownOutlined />
            </a>
          </Dropdown>
        </div>

        <div className="dropdown_left-days ml-10 ">
          <Dropdown overlay={menuDays} trigger={["click"]}>
            <a
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
            >
              CHỌN NGÀY <DownOutlined />
            </a>
          </Dropdown>
        </div>
      </div>

      <div className="btn-togger">
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
        >
          <ToggleButton value="web">Mới nhất</ToggleButton>
          <ToggleButton value="android">Đặc sắc</ToggleButton>
          <ToggleButton value="ios">Phổ biến</ToggleButton>
        </ToggleButtonGroup>
      </div>
    </div>
  );
};

export default DropDown;
