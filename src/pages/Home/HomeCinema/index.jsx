import React, { useState, useEffect } from "react";
import { Tabs } from "antd";
import "./index.scss";
import { useSelector, useDispatch } from "react-redux";
import { fetchCinemaTimes } from "../../../store/actions/cinema";
import { Tab } from "@material-ui/icons";
import { Grid, Container } from "@material-ui/core";

const { TabPane } = Tabs;

const HomeCinema = () => {
  const [state, setstate] = useState({ tabPosition: "left" });

  // useSelector tạo biến lưu cinema list
  const fetchCinemaShowTimes = useSelector((state) => state.cinema);

  // dispatch
  const dispatch = useDispatch();

  // useEffect

  useEffect(() => {
    dispatch(fetchCinemaTimes());
  }, []);

  const { content } = fetchCinemaShowTimes.cinemaTimes;
  // console.log("list", fetchCinemaShowTimes);
  // console.log("lstCumRap", content);

  const { tabPosition } = state;
  return (
    <div className="menu-home-items">
      <>
        <Tabs tabPosition={tabPosition}>
          {/* call api, map logo rạp ở tab={img} */}
          {content?.map((cinema) => {
            return (
              <TabPane
                tab={
                  <img
                    src={cinema.logo}
                    className="rounded-full w-16 h-16"
                    alt=""
                  />
                }
                key={cinema.maHeThongRap}
              >
                {/* map ra list cụm rap  */}
                <Tabs tabPosition={tabPosition}>
                  {cinema.lstCumRap?.map((cumRap) => {
                    // console.log("cumrap", cumRap);
                    return (
                      <TabPane
                        tab={
                          <div className="cum-rap" style={{ display: "flex" }}>
                            <img
                              src={cumRap.hinhAnh}
                              className="rounded-full w-12 h-12"
                              alt=""
                            />
                            <div>{cumRap.tenCumRap}</div>
                          </div>
                        }
                        key={cumRap.maCumRap}
                      >
                        <div className="list-movie">
                          {/* map danh sach phim tu cumrap */}
                          {cumRap.danhSachPhim.map((item) => {
                            return (
                              <div className="list-movie-item">
                                <img src={item.hinhAnh} alt="" />
                                <div>
                                  <div className="list-movie-name">
                                    {item.tenPhim}
                                  </div>
                                  <div className="address">{cumRap.diaChi}</div>

                                  {/* map lstLichChieuTheoPhim tu danh sach phim */}
                                  {/* lich chieu, gio chieu */}

                                  {item.lstLichChieuTheoPhim
                                    ?.slice(0, 2)
                                    .map((lichPhim) => {
                                      return (
                                        <div className="show-times">
                                          {lichPhim.ngayChieuGioChieu}
                                        </div>
                                      );
                                    })}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </TabPane>
                    );
                  })}
                </Tabs>
              </TabPane>
            );
          })}
        </Tabs>
      </>
    </div>
  );
};

export default HomeCinema;
