import { InboxOutlined } from "@ant-design/icons";
import { Form, Upload, Row, Col, Input, DatePicker, InputNumber } from "antd";
import React from "react";
import "./style.scss";

const AddMovie = () => {
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
            "date-picker": values["ngayKhoiChieu"].format("DD/MM/YYYY"),
        };
        console.log("Success:", dataValues);
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
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
                                <Col span={24}>
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

                                <Col span={24}>
                                    <Row>
                                        <Col span={24}>
                                            <Form.Item
                                                className="form--group"
                                                name="tenPhim"
                                                label="Title"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message:
                                                            "Movie title is required",
                                                    },
                                                ]}
                                            >
                                                <Input placeholder="Title" />
                                            </Form.Item>
                                        </Col>
                                        <Col span={24}>
                                            <Form.Item
                                                className="form--group"
                                                name="moTa"
                                                label="Description"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message:
                                                            "Description is required",
                                                    },
                                                ]}
                                            >
                                                <Input.TextArea placeholder="Description" />
                                            </Form.Item>
                                        </Col>
                                        <Col span={24}>
                                            <Form.Item
                                                className="form--group"
                                                name="ngayKhoiChieu"
                                                label="DatePicker"
                                                rules={[
                                                    {
                                                        type: "object",
                                                        required: true,
                                                        message:
                                                            "Please select time!",
                                                    },
                                                ]}
                                            >
                                                <DatePicker
                                                    placeholder="Release Date"
                                                    className="w-full"
                                                />
                                            </Form.Item>
                                        </Col>
                                        <Col span={24}>
                                            <Form.Item
                                                className="form--group"
                                                name="danhGia"
                                                label="Rating"
                                                rules={[
                                                    {
                                                        min: 0,
                                                        max: 10,
                                                        message: "Rating must be between 0 and 10"
                                                    },
                                                ]}
                                            >
                                                <Input placeholder="Rating" />
                                            </Form.Item>
                                        </Col>
                                    </Row>
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
