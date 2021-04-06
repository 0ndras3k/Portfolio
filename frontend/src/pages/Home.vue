<template>
  <div class="py-5 content container" id="home-cont">
  <div class="py-5 content container"></div>
    <div className="row h-100 homepage">
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
          src="../assets/svg/main_photo.svg"
          className="d-none d-lg-block"
          alt="main_photo"
          id="main-photo"
        />
      </div>
    </div>
    <div class="py-5 content container"></div>
    <div class="py-5 content container">
      <div class="text-center">
        <button class="button-cv">Download CV!</button>
        <router-link to="/contact"><button class="button-cv ml-5">Contact me!</button></router-link>
      </div>
    </div>
    <div class="py-5 content container"></div>
  </div>
  <img
    src="../assets/svg/home-blob.svg"
    alt="home-blob"
    className="background-svg"
    id="home-blob"
  >
</template>

<script lang="ts">
export default {
  name: 'Home',
};
</script>
