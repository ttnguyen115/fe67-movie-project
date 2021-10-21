import React from "react";
import AdminHeader from "./AdminHeader";
import AdminMovie from "./Movie";
import AdminUser from "./User";
import { useParams, useHistory } from "react-router";
import AdminSidebar from "./AdminSidebar";

const Admin = () => {
    const { id } = useParams();
    const history = useHistory();
    const [adminChildren, setAdminChildren] = React.useState(<AdminMovie />);

    React.useEffect(() => {
        switch (id) {
            case "users":
                setAdminChildren(<AdminUser />);
                break;

            case "films":
                setAdminChildren(<AdminMovie />);
                break;

            default:
                history.push("/*");
                break;
        }
    }, [id, history]);

    return <AdminWrapper>{adminChildren}</AdminWrapper>;
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
