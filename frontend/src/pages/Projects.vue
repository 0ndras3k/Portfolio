<template>
  <div className="py-5 content container">
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
                src="../assets/img/colossus.png"
                alt=""
                className="card-img-top"
              />
              <div className="svg-holder">
                <img src="../assets/svg/nette.svg" alt="" />
              </div>
              <p className="p-1 mb-0">Colossus Tournament</p>
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
                src="../assets/img/main-page.png"
                alt=""
                className="card-img-top"
              />
              <div className="svg-holder">
                <img src="../assets/svg/vue.js.svg" alt="" />
                <img src="../assets/svg/nodejs-icon.svg" alt="" className="ml-2" />
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
      <img src="../assets/svg/projects-blob.svg"
      alt="projects-blob"
      id="projects-blob"
      className="d-none d-lg-block">
</template>

<script lang="ts">
export default {
  name: 'Home',
};
</script>
