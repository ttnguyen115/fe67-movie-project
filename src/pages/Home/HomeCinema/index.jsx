import React, { useState, useEffect } from "react";
import { Tabs } from "antd";
import "./index.scss";
import { useSelector, useDispatch } from "react-redux";
import { fetchCinemaTimes } from "../../../store/actions/cinema";
import { Tab } from "@material-ui/icons";
import { Grid, Container } from "@material-ui/core";
import moment from "moment";

const { TabPane } = Tabs;

const HomeCinema = () => {
  const [state, setstate] = useState({ tabPosition: "left" });
  const { loading, cinemaTimes } = useSelector((state) => state.cinema);
  const dispatch = useDispatch();
  const { tabPosition } = state;

  useEffect(() => {
    dispatch(fetchCinemaTimes());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="menu-home-items">
      <>
        <Tabs tabPosition={tabPosition}>
          {cinemaTimes.map((cinema) => {
            return (
              <TabPane
                tab={
                  <img
                    src={cinema.logo}
                    className="w-16 h-16 rounded-full"
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
                          <div className="flex items-center cum-rap">
                            <img
                              src={cumRap.hinhAnh}
                              className="w-12 h-12 rounded-full"
                              alt=""
                            />
                            <div className="ml-4 text-white">
                              {cumRap.tenCumRap}
                            </div>
                          </div>
                        }
                        key={cumRap.maCumRap}
                      >
                        <div className="list-movie">
                          {/* map danh sach phim tu cumrap */}
                          {cumRap.danhSachPhim.map((item, index) => {
                            return (
                              <div className="list-movie-item" key={index}>
                                <img src={item.hinhAnh} alt="" />
                                <div>
                                  <div className="list-movie-name ">
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
                                          {moment(
                                            lichPhim.ngayChieuGioChieu
                                          ).format("llll")}
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
