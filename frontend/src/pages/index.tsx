import React from "react";
import mainBlob from "../assets/svg/main_photo.svg";
import homeBlob from "../assets/svg/home-blob.svg";
import Navbar from "../components/layout/Navbar";

export const Index = () => {
  return (
    <>
      <div className="py-5 content container" id="home-cont">
        <Navbar />
        <div className="homepage">
          <div className="row">
            <div className="col-lg-6 text-center text-lg-left">
              <p className="main-text">
                Hello everybody, i am <br />
                <span className="font-weight-bold text-primary">
                  Ondřej Klapka
                </span>
                <br />
                <span className="font-weight-bold">MFRN</span> Stack developer.
              </p>
            </div>
            <div className="col-lg-6">
              <img
                src={mainBlob}
                className="d-none d-lg-block"
                alt="main_photo"
                id="main-photo"
              />
            </div>
          </div>
        </div>
      </div>
      <img
        src={homeBlob}
        alt="home-blob"
        className="background-svg"
        id="home-blob"
      ></img>
    </>
  );
};

export default Index;
