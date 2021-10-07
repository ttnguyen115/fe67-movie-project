import React, { Fragment } from "react";
import "./index.scss";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
// import ToggleButton from "@material/ToggleButton";
// import ToggleButtonGroup from "@material/ToggleButtonGroup";
// import ToggleButton from "@mui/material/ToggleButton";

const menu = (
  <Menu>
    <Menu.Item key="0">
      <p>Hành Động</p>
    </Menu.Item>
    <Menu.Item key="1">
      <p>Tình Cảm</p>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">Hoạt Hình</Menu.Item>
  </Menu>
);

const DropDown = () => {
  //   const [alignment, setAlignment] = useState("web");

  //   const handleChange = (event, newAlignment) => {
  //     setAlignment(newAlignment);
  //   };

  return (
    <div className="dropdown">
      <Fragment>
        <div className="left">
          <Dropdown overlay={menu} trigger={["click"]}>
            <a
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
            >
              All genres <DownOutlined />
            </a>
          </Dropdown>
        </div>

        <div className="right">
          <Dropdown overlay={menu} trigger={["click"]}>
            <a
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
            >
              All the years <DownOutlined />
            </a>
          </Dropdown>
        </div>
      </Fragment>

      {/* <div className="btn-togger">
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
        >
          <ToggleButton value="web">Web</ToggleButton>
          <ToggleButton value="android">Android</ToggleButton>
          <ToggleButton value="ios">iOS</ToggleButton>
        </ToggleButtonGroup>
      </div> */}
    </div>
  );
};

export default DropDown;
