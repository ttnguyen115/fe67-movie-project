import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import { Button, Form, Input } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import background from "../../assets/img/notfound-bg.jpg";
import { formRules } from "../../constants/formRules";
import { signup } from "../../store/actions/user";
import "./styles.scss";

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const SignUp = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { loading, error } = useSelector((state) => state.user);

    const onFinish = (values) => {
        dispatch(signup(values));
        history.push("/signin");
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <div
            className="sign-up"
            style={{ backgroundImage: `url(${background})` }}
        >
            {error && (
                <Snackbar
                    open={!!error}
                    autoHideDuration={3000}
                    anchorOrigin={{ vertical: "top", horizontal: "right" }}
                >
                    <Alert severity="error">{error}</Alert>
                </Snackbar>
            )}
            <div className="form__wrapper">
                <Form
                    className="sign-up__form"
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <img
                        src="https://i.imgur.com/lC22izJ.png"
                        alt="logo"
                        className="m-auto mb-7"
                    />
                    <Form.Item
                        className="ant-col-24 form-control"
                        label="Username"
                        name="taiKhoan"
                        rules={formRules.usernameRules}
                        wrapperCol={{ span: 24 }}
                    >
                        <Input
                            placeholder="Username"
                            className="sign-up__input"
                        />
                    </Form.Item>

                    <Form.Item
                        className="form-control"
                        label="Email"
                        name="email"
                        rules={formRules.emailRules}
                        wrapperCol={{ span: 24 }}
                    >
                        <Input placeholder="Email" className="sign-up__input" />
                    </Form.Item>

                    <Form.Item
                        className="form-control"
                        label="Full name"
                        name="hoTen"
                        rules={formRules.fullnameRules}
                        wrapperCol={{ span: 24 }}
                    >
                        <Input
                            placeholder="Full name"
                            className="sign-up__input"
                        />
                    </Form.Item>

                    <Form.Item
                        className="form-control"
                        label="Phone"
                        name="soDt"
                        rules={formRules.phoneRules}
                        wrapperCol={{ span: 24 }}
                    >
                        <Input placeholder="Phone" className="sign-up__input" />
                    </Form.Item>

                    <Form.Item
                        className="form-control"
                        label="Password"
                        name="matKhau"
                        rules={formRules.passwordRules}
                        wrapperCol={{ span: 24 }}
                    >
                        <Input.Password
                            placeholder="Password"
                            iconRender={(visible) =>
                                visible ? (
                                    <EyeTwoTone />
                                ) : (
                                    <EyeInvisibleOutlined />
                                )
                            }
                            className="sign-up__input"
                        />
                    </Form.Item>

                    <Button
                        type="primary"
                        className="sign-up__btn"
                        htmlType="submit"
                        loading={loading}
                    >
                        Sign Up
                    </Button>

                    <div className="sign-up__link">
                        Already have an account?
                        <Link to="/signin"> Sign in!</Link>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default SignUp;
