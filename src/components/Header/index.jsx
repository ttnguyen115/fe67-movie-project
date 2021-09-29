import SearchIcon from "@mui/icons-material/Search";
import { AppBar, Button, InputBase, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "./css/style.css";

const Header = () => {
    return (
        <AppBar position="static" className="header">
            <Toolbar className="header__wrapper">
                <Typography
                    variant="h1"
                    component="h1"
                    className="header__logo"
                >
                    <Link to="/" className="header__logo--link">
                        Flix<span>TV</span>
                    </Link>
                </Typography>

                <div className="header__search">
                    <InputBase
                        placeholder="Search…"
                        inputProps={{ "aria-label": "search" }}
                        className="header__search--input"
                    />
                    <div className="header__search--icon">
                        <SearchIcon />
                    </div>
                </div>

                <Button>Login</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
