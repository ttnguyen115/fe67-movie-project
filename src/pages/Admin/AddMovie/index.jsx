import { InboxOutlined } from "@ant-design/icons";
import {
    Form,
    Upload,
    Row,
    Col,
    Input,
    DatePicker,
    InputNumber,
    Select,
    Switch,
    Button,
} from "antd";
import React from "react";
import { addNewRules } from "../../../constants/formRules";
import "./style.scss";

const AddMovie = () => {
    const [status, setStatus] = React.useState({
        SapChieu: false,
        DangChieu: false,
    });
    const normFile = (e) => {
        console.log("Upload event:", e);

        if (Array.isArray(e)) {
            return e;
        }

        return e && e.fileList;
    };

    const onFinish = (values) => {
        const dataValues = {
            ...values,
            ngayKhoiChieu: values["ngayKhoiChieu"].format("DD/MM/YYYY"),
            SapChieu: status.SapChieu,
            DangChieu: status.DangChieu,
        };
        console.log("Success:", dataValues);
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    const handleSelectStatus = (value) => {
        switch (value) {
            case "SapChieu":
                setStatus({ ...status, SapChieu: true });
                break;

            case "DangChieu":
                setStatus({ ...status, DangChieu: true });
                break;

            default:
                setStatus({ SapChieu: false, DangChieu: false });
                break;
        }
    };

    return (
        <div className="add--movie__container">
            <div className="add--movie">
                <div className="add--movie__title">
                    <h2>Add New</h2>
                </div>

                <Form
                    className="add--movie__form"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Row>
                        <Col span={24}>
                            <Row>
                                <Col span={24} md={10} className="dragger--cover">
                                    <Form.Item
                                        name="hinhAnh"
                                        valuePropName="fileList"
                                        getValueFromEvent={normFile}
                                        className="form--dragger"
                                    >
                                        <Upload.Dragger
                                            name="files"
                                            action="/upload.do"
                                        >
                                            <p className="ant-upload-drag-icon">
                                                <InboxOutlined />
                                            </p>
                                            <p className="ant-upload-text">
                                                Click or drag file to this area
                                                to upload
                                            </p>
                                            <p className="ant-upload-hint">
                                                Support for a single or bulk
                                                upload.
                                            </p>
                                        </Upload.Dragger>
                                    </Form.Item>
                                </Col>

                                <Col span={24} md={14} className="content--cover">
                                    <Row>
                                        <Col span={24}>
                                            <Form.Item
                                                className="form--group"
                                                name="tenPhim"
                                                label="Title"
                                                rules={addNewRules.tenPhim}
                                            >
                                                <Input placeholder="Title" />
                                            </Form.Item>
                                        </Col>
                                        <Col span={24}>
                                            <Form.Item
                                                className="form--group"
                                                name="moTa"
                                                label="Description"
                                                rules={addNewRules.moTa}
                                            >
                                                <Input.TextArea placeholder="Description" />
                                            </Form.Item>
                                        </Col>
                                        <Col span={24} lg={8} className="input--first">
                                            <Form.Item
                                                className="form--group"
                                                name="ngayKhoiChieu"
                                                label="DatePicker"
                                                rules={
                                                    addNewRules.ngayKhoiChieu
                                                }
                                            >
                                                <DatePicker
                                                    placeholder="Release Date"
                                                    className="w-full"
                                                />
                                            </Form.Item>
                                        </Col>
                                        <Col span={24} lg={8} className="input--second">
                                            <Form.Item
                                                className="form--group"
                                                name="danhGia"
                                                label="Rating"
                                            >
                                                <InputNumber
                                                    min={0}
                                                    max={10}
                                                    placeholder="Rating"
                                                    controls={false}
                                                    step={0.1}
                                                    onStep={false}
                                                />
                                            </Form.Item>
                                        </Col>
                                        <Col span={24} lg={8} className="input--last">
                                            <Form.Item
                                                label="Status"
                                                className="form--group"
                                                name="trangThai"
                                            >
                                                <Select
                                                    placeholder="Status"
                                                    onSelect={
                                                        handleSelectStatus
                                                    }
                                                    dropdownStyle={{
                                                        borderRadius: 16,
                                                        background: "#131720",
                                                    }}
                                                >
                                                    <Select.Option
                                                        value="SapChieu"
                                                        className="select--item"
                                                    >
                                                        Coming Soon
                                                    </Select.Option>
                                                    <Select.Option
                                                        value="DangChieu"
                                                        className="select--item"
                                                    >
                                                        Showing Now
                                                    </Select.Option>
                                                </Select>
                                            </Form.Item>
                                        </Col>
                                        <Col span={24}>
                                            <Form.Item
                                                label="Hot"
                                                valuePropName="Hot"
                                                className="form--group"
                                            >
                                                <span className="mr-4 text-white">
                                                    Hot
                                                </span>
                                                <Switch checked />
                                            </Form.Item>
                                        </Col>
                                        <Col span={24}>
                                            <Form.Item
                                                className="form--group"
                                                name="trailer"
                                                label="Trailer"
                                                rules={addNewRules.trailer}
                                            >
                                                <Input placeholder="Trailer" />
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>

                                <Col span={24} className="submit--cover">
                                    <Form.Item>
                                        <Button
                                            type="primary"
                                            htmlType="submit"
                                        >
                                            Submit
                                        </Button>
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Form>
            </div>
        </div>
    );
};

export default AddMovie;
