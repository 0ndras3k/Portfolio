import React from "react";
import Navbar from "../components/layout/Navbar";

/** 
 * Images
 */
import collosus from "../assets/img/colossus.png"
import uploader from "../assets/img/uploader.png"
import mainpage from "../assets/img/main-page.png"

import php from "../assets/svg/php-icon.svg"
import nette from "../assets/svg/nette.svg"
import react from "../assets/svg/react.svg"

import projectblob from "../assets/svg/projects-blob.svg"

export const Projects = () => {
  return (
    <>
      <div className="py-5 content container">
        <Navbar />
        <h2 className="text-center mt-5 pb-4 font-weight-bold">Projects</h2>
        <h4 className="text-center text-secondary font-weight-bold pb-3">
          Commercial projects
        </h4>

        <div className="row">
          <div className="col-lg-4 pt-0 pt-lg-5 mb-4 mb-lg-0">
            <div className="card mt-0 mt-lg-5 secondary">
              <img
                src={collosus}
                alt=""
                className="card-img-top"
              />
              <div className="svg-holder">
                <img src={php} alt="" />
              </div>
              <p className="p-1 mb-0">Colossus Tournaments</p>
            </div>
          </div>
          <div className="col-lg-4 mb-4 mb-lg-0">
            <div className="card primary mb-4">
              <img
                src={collosus}
                alt=""
                className="card-img-top"
              />
              <div className="svg-holder">
                <img src={php} alt="" />
              </div>
              <p className="p-1 mb-0">Colossus Tournaments</p>
            </div>
            <div className="card primary">
              <img
                src={collosus}
                alt=""
                className="card-img-top"
              />
              <div className="svg-holder">
                <img src={php} alt="" />
              </div>
              <p className="p-1 mb-0">Colossus Tournaments</p>
            </div>
          </div>
          <div className="col-lg-4 pt-0 pt-lg-5">
            <div className="card mt-0 mt-lg-5 secondary">
              <img
                src={collosus}
                alt=""
                className="card-img-top"
              />
              <div className="svg-holder">
                <img src={php} alt="" />
              </div>
              <p className="p-1 mb-0">Colossus Tournaments</p>
            </div>
          </div>
        </div>

        <hr className="my-5" />

        <h4 className="text-center text-secondary font-weight-bold pb-3">
          Personal projects
        </h4>

        <div className="row">
          <div className="col-lg-4 pt-0 pt-lg-5 mb-4 mb-lg-0">
            <div className="card mt-0 mt-lg-5 secondary">
              <img
                src={collosus}
                alt=""
                className="card-img-top"
              />
              <div className="svg-holder">
                <img src={php} alt="" />
              </div>
              <p className="p-1 mb-0">Colossus Tournaments</p>
            </div>
          </div>
          <div className="col-lg-4 mb-4 mb-lg-0">
            <div className="card primary">
              <img
                src={mainpage}
                alt=""
                className="card-img-top"
              />
              <div className="svg-holder">
                <img src={react} alt="" />
              </div>
              <p className="p-1 mb-0">oklapka.tech</p>
            </div>
          </div>
          <div className="col-lg-4 pt-0 pt-lg-5">
            <div className="card mt-0 mt-lg-5 secondary">
              <img
                src={uploader}
                alt=""
                className="card-img-top"
              />
              <div className="svg-holder">
                <img src={nette} alt="" />
              </div>
              <p className="p-1 mb-0">file.oklapka.tech</p>
            </div>
          </div>
        </div>
      </div>
      <img src={projectblob} alt="projects-blob" id="projects-blob" className="d-none d-lg-block"></img>
    </>
  );
};

export default Projects;
