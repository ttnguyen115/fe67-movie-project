import React from "react";
import AdminHeader from "./AdminHeader";
import AdminMovie from "./Movie";
import AdminUser from "./User";
import { useParams, useHistory } from "react-router";
import AdminSidebar from "./AdminSidebar";

const Admin = () => {
    const { id } = useParams();
    const history = useHistory();

    const handleRedirect = () => history.push("/*");

    return (
        <AdminWrapper>
            {id === "films" ? (
                <AdminMovie />
            ) : id === "users" ? (
                <AdminUser />
            ) : (
                handleRedirect
            )}
        </AdminWrapper>
    );
};

const AdminWrapper = ({ children }) => {
    return (
        <React.Fragment>
            <AdminHeader />
            <AdminSidebar />
            {children}
        </React.Fragment>
    );
};

export default Admin;
