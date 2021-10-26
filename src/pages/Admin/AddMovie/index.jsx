import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import {
    Button,
    Col,
    DatePicker,
    Form,
    Input,
    InputNumber,
    message,
    Row,
    Select,
    Switch,
    Upload,
} from "antd";
import React from "react";
import { addNewRules } from "../../../constants/formRules";
import { getBase64 } from "../../../helpers/getBase64";
import "./style.scss";

// const beforeUpload = (file) => {
//     const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
//     if (!isJpgOrPng) {
//         message.error("You can only upload JPG/PNG file!");
//     }
//     const isLt2M = file.size / 1024 / 1024 < 2;
//     if (!isLt2M) {
//         message.error("Image must smaller than 2MB!");
//     }
//     return isJpgOrPng && isLt2M;
// };

const AddMovie = () => {
    const [loadingImg, setLoadingImg] = React.useState(false);
    const [previewImage, setPreviewImage] = React.useState("");
    const [fileList, setFileList] = React.useState([]);
    const [isHot, setisHot] = React.useState(true);
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

    const getFormData = (object) => {
        const formData = new FormData();
        Object.keys(object).forEach(key => formData.append(`${key}`, `${object[key]}`));
        return formData;
    }

    const onFinish = (values) => {
        console.log(values);
        const dataValues = {
            ...values,
            ngayKhoiChieu: values["ngayKhoiChieu"].format("DD/MM/YYYY"),
            SapChieu: status.SapChieu,
            DangChieu: status.DangChieu,
            hot: isHot,
            File: fileList[0],
        };
        console.log(dataValues);
        
        console.log("Success:", getFormData(dataValues));
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

    const handleHotSwitch = (value) => setisHot(value);

    const handleUpload = () => {
        const formData = new FormData();
        formData.append("File", fileList[0]);
    };

    const uploadProps = {
        onRemove: (file) => {
            const index = fileList.indexOf(file);
            const newFileList = fileList.slice();
            newFileList.splice(index, 1);
            setFileList(newFileList);
        },
        beforeUpload: (file) => {
            setFileList([...fileList, file]);
            return false;
        },
        fileList,
    };

    const uploadButton = (
        <div>
            {loadingImg ? <LoadingOutlined /> : <PlusOutlined />}
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );

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
                                <Col
                                    span={24}
                                    md={10}
                                    className="dragger--cover"
                                >
                                    <Form.Item
                                        name="File"
                                        valuePropName="fileList"
                                        getValueFromEvent={normFile}
                                        className="form--dragger"
                                    >
                                        <Upload.Dragger
                                            {...uploadProps}
                                            name="File"
                                        >
                                            {uploadButton}
                                        </Upload.Dragger>
                                    </Form.Item>
                                </Col>

                                <Col
                                    span={24}
                                    md={14}
                                    className="content--cover"
                                >
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
                                        <Col
                                            span={24}
                                            lg={8}
                                            className="input--first"
                                        >
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
                                        <Col
                                            span={24}
                                            lg={8}
                                            className="input--second"
                                        >
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
                                        <Col
                                            span={24}
                                            lg={8}
                                            className="input--last"
                                        >
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
                                                <Switch
                                                    defaultChecked
                                                    onChange={handleHotSwitch}
                                                />
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
                                            onClick={handleUpload}
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
