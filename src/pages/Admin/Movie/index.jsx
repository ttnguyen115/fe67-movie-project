import { SearchOutlined } from "@mui/icons-material";
import { Input } from "antd";
import React from "react";
import { useDispatch } from 'react-redux';
import { getAdminMovieList } from "../../../store/actions/Admin/movie";
import "./style.scss";
import { useSelector } from 'react-redux';

const AdminMovie = () => {
    const dispatch = useDispatch();
    const { movieList } = useSelector(state => state.adminMovie)
    const [movieName, setMovieName] = React.useState(null);
    
    const onSearch = value => setMovieName(!!value ? value : null);

    React.useEffect(() => {
        dispatch(getAdminMovieList(movieName))
    }, [dispatch, movieName])

    return (
        <div className="admin--movie__wrapper">
            <div className="admin--movie">
                <div className="admin--movie__title">
                    <h2>Movie List</h2>
                    <span className="admin--movie__title--stat">{ movieList.length } total</span>
                    <div className="admin--movie__title--wrap">
                        <Input.Search
                            placeholder="Find Movie..."
                            onSearch={onSearch}
                            enterButton
                            className="admin--movie__search"
                            suffix={
                                <SearchOutlined
                                    style={{ color: "#2f80ed", fontSize: 18 }}
                                />
                            }
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminMovie;
