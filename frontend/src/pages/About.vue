<template>
  <div className="py-5 content container">
    <p className="text-center py-4 text">
      Hi, I’m a
      <span className="text-primary font-weight-bold">
        Web Developer
      </span>,
      <span className="text-secondary font-weight-bold">
        Database manager
      </span>,
      <span className="text-primary font-weight-bold">
        a Software Architect
      </span>
      , and open source enthusiast who is highly
      passionate about building fast, creative applications
      and writing beautiful
      code.
    </p>

    <hr />

    <p className="text-center pt-4 text">
      I write everything in
      <span className="text-secondary font-weight-bold"> TypeScript </span>
      so that everything works. Frontend of websites is writed in
      <span className="text-primary font-weight-bold"> React </span>&
      <span className="text-secondary font-weight-bold"> Vue.js </span>
      and backend in
      <span className="text-primary font-weight-bold"> Node.js </span>
      with
      <span className="text-secondary font-weight-bold"> Fastify (Fasteer) </span>&
      <span className="text-primary font-weight-bold"> TypeORM </span>
    </p>
  </div>

  <img src="@/assets/svg/about-phone-blob.svg"
  alt="about-phone-blob"
  id="about-phone-blob"
  className="d-none d-lg-block" />

  <div className="container">
    <h2 className="text-center pb-4 font-weight-bold">THINGS I'VE WORKED WITH</h2>
    <h4 className="text-center text-secondary font-weight-bold pb-3">Programming languages</h4>

    <div className="icons-center mb-4">
      <img
      src="@/assets/svg/typescriptlang-icon.svg"
      alt="typescriptlang-icon"
      id="typescriptlang-icon"
      className="about-svgs" />
      <img
      src="@/assets/svg/javascript.svg"
      alt="Unofficial_JavaScript_logo_2"
      id="Unofficial_JavaScript_logo_2"
      className="about-svgs ml-2" />
      <img src="@/assets/svg/java-icon.svg" alt="java-icon" id="java-icon" className="about-svgs" />
      <img
      src="@/assets/svg/php-icon.svg"
      alt="php-icon"
      id="php-icon"
      className="about-svgs" />
    </div>
    <div className="icons-center mb-4">
      <img
      src="@/assets/svg/nodejs-icon.svg"
      alt="nodejs-icon"
      id="nodejs-icon"
      className="about-svgs" />
      <img
      src="@/assets/svg/kotlinlang-icon.svg"
      alt="kotlin"
      id="kotlin"
      className="about-svgs ml-2" />
    </div>

    <h4 className="text-center text-secondary font-weight-bold pb-3">Frameworks</h4>

    <div className="icons-center mb-4">
      <img src="@/assets/svg/vue.js.svg" alt="Vue" id="Vue" className="about-svgs" />
      <img src="@/assets/svg/react.svg" alt="React" id="React" className="about-svgs" />
      <img
      src="@/assets/svg/express.svg"
      alt="express-seeklogo"
      id="express-seeklogo"
      className="about-svgs
      ml-2" />
      <img src="@/assets/svg/nette.svg" alt="Nette" id="Nette" className="about-svgs ml-2" />
    </div>
    <div className="icons-center mb-4">
      <img
      src="@/assets/svg/yarn.svg"
      alt="yarnpkg-icon"
      id="yarnpkg-icon"
      className="about-svgs" />
      <img src="@/assets/svg/fastify.svg" alt="fastify" id="fastify" className="about-svgs ml-2" />
      <img src="@/assets/svg/nestjs-icon.svg" alt="nest" id="nest" className="about-svgs ml-2" />
    </div>

    <h4 className="text-center text-secondary font-weight-bold pb-3">Databases</h4>

    <div className="icons-center mb-4">
      <img
      src="@/assets/svg/mysql-icon.svg"
      alt="mysql-icon"
      id="mysql-icon"
      className="about-svgs" />
      <img
      src="@/assets/svg/mongodb-icon.svg"
      alt="mongodb-icon"
      id="mongodb-icon"
      className="about-svgs" />
      <img
      src="@/assets/svg/postgresql-icon.svg"
      alt="postgresql-icon"
      id="postgresql-icon"
      className="about-svgs" />
      <img
      src="@/assets/svg/sqlite-icon.svg"
      alt="sqlite-icon"
      id="sqlite-icon"
      className="about-svgs" />
    </div>

    <div className="icons-center mb-4">
      <img src="@/assets/svg/sqlite-icon.svg" alt="redis" id="redis" className="about-svgs" />
    </div>

    <h4 className="text-center text-secondary font-weight-bold pb-3">Other</h4>

    <div className="icons-center mb-4">
      <img
      src="@/assets/svg/gitlab-icon.svg"
      alt="gitlab-icon"
      id="gitlab-icon"
      className="about-svgs" />
      <img
      src="@/assets/svg/git-scm-icon.svg"
      alt="git-scm-icon"
      id="git-scm-icon"
      className="about-svgs ml-2" />
      <img
      src="@/assets/svg/docker-tile.svg"
      alt="docker-tile"
      id="docker-title"
      className="about-svgs" />
      <img
      src="@/assets/svg/google_cloud-icon.svg"
      alt="google_cloud-icon"
      id="google_cloud-icon" className="about-svgs ml-2" />
    </div>

    <div className="icons-center mb-4">
      <img
      src="@/assets/svg/heroku-icon.svg"
      alt="heroku-icon" id="heroku-icon"
      className="about-svgs" />
      <img
      src="@/assets/svg/ubuntu-icon.svg"
      alt="ubuntu-icon" id="ubuntu-icon"
      className="about-svgs ml-2" />
      <img
      src="@/assets/svg/npmjs-icon.svg"
      alt="npmjs-icon" id="npmjs-icon"
      className="about-svgs ml-2" />
      <img src="@/assets/svg/yarn.svg" alt="Group" id="Group" className="about-svgs ml-2" />
    </div>

    <div className="icons-center">
      <img
      src="@/assets/svg/github.svg"
      alt="github-tile"
      id="github-title"
      className="about-svgs" />
      <img src="@/assets/svg/redux.svg" alt="redux" id="redux-title" className="about-svgs ml-2" />
    </div>
  </div>
    <div class="container mt-5">
    <h2 className="text-center pb-4 font-weight-bold">WORK EXPERIENCE</h2>
      <div class="text-center">
        <p class="text-now">End</p>
      </div>
      <div class="timeline">
        <experienceItem post="CEO"
        desc="I lead a company, that wants to be the best.
        We try to offer work to young people who do not want to work
        in a corporate company. The company focuses on the development &
        penetration testing of websites and mobile applications." starttime="2021-01-01">
          <template #company_link>
            <a href="https://froneb.com/"><img src="../assets/img/froneb.png" class="img-fluid" alt="img"></a>
          </template>
        </experienceItem>
        <experienceItem post="Junior Full-Stack Developer"
        desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Saepe, eaque amet deleniti hic quas qui cumque delectus aliquid,
        eius quia quod, quae, aliquam aspernatur facilis. Minima quod corporis
        dignissimos porro" starttime="2020-12-01">
          <template #company_link>
            <a href="https://gamerhost.pro/"><img src="../assets/img/Gamerhost.png" class="img-fluid" alt="img"></a>
          </template>
        </experienceItem>
        <experienceItem post="Junior Frontend Developer"
        desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Saepe, eaque amet deleniti hic quas qui cumque delectus aliquid,
        eius quia quod, quae, aliquam aspernatur facilis. Minima quod corporis
        dignissimos porro." starttime="2020-08-01">
          <template #company_link>
            <a href="https://colossustn.eu/"><img src="../assets/img/colossus-logo.jpg" class="img-fluid" alt="img"></a>
          </template>
        </experienceItem>
        <experienceItem post="Junior Backend Developer"
        desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Saepe, eaque amet deleniti hic quas qui cumque delectus aliquid,
        eius quia quod, quae, aliquam aspernatur facilis. Minima quod corporis
        dignissimos porro." starttime="2020-11-01" endtime="2021-01-12">
          <template #company_link>
            <a href="https://qplay.cz/"><img src="../assets/img/qplay.png" class="img-fluid" alt="img"></a>
          </template>
        </experienceItem>
        <experienceItem post="Freelance"
        desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Saepe, eaque amet deleniti hic quas qui cumque delectus aliquid,
        eius quia quod, quae, aliquam aspernatur facilis. Minima quod corporis
        dignissimos porro." starttime="2018-09-01">
          <template #company_link>
            <img src="../assets/img/freelance.png" class="img-fluid" alt="img">
          </template>
        </experienceItem>
      </div>
      <div class="text-center">
        <button class="button-cv" href="">
        Download CV
        </button>
      </div>
    </div>
  <img
  src="@/assets/svg/about-blob.svg"
  alt="about-blob"
  id="about-blob"
  className="about-blob d-none d-lg-block" />
</template>

<style lang="scss">

.button-cv{
  background-color: #fff;
  border: 2px dashed #e29587;
  width: 150px;
  height: 50px;
}

.button-cv:hover{
  background-color: #e29587;
  color: #fff;
}

:focus{
    outline: 0px solid transparent !important;
}
.timeline {
    padding: 50px 0;
    position: relative;
}
.timeline-nodes {
        padding-bottom: 25px;
        position: relative;
    }
.timeline-nodes:nth-child(even) {
    flex-direction: row-reverse;
}
.timeline h3, .timeline p {
    padding: 5px 15px;
}
.timeline h3{
    font-weight: lighter;
    background: #d66d75;
}
.timeline p, .timeline time {
    color: #e29587
}
.timeline::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 50%;
    width: 0;
    border-left: 2px dashed #d66d75;
    height: 100%;
    z-index: 1;
    transform: translateX(-50%);
}
.timeline-content {
    border: 1px solid #e29587;
    position: relative;
    border-radius: 0 0 10px 10px;
    box-shadow: 0px 3px 25px 0px rgba(10, 55, 90, 0.2)
}
.timeline-nodes:nth-child(odd) h3,
.timeline-nodes:nth-child(odd) p {
    text-align: right;
}
.timeline-nodes:nth-child(odd) .timeline-date {
    text-align: left;
}

.timeline-nodes:nth-child(even) .timeline-date {
    text-align: right;
}
.timeline-nodes:nth-child(odd) .timeline-content::after {
    content: "";
    position: absolute;
    top: 5%;
    left: 100%;
    width: 0;
    border-left: 10px solid #d66d75;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
}
.timeline-nodes:nth-child(even) .timeline-content::after {
    content: "";
    position: absolute;
    top: 5%;
    right: 100%;
    width: 0;
    border-right: 10px solid #d66d75;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
}
.timeline-image {
    position: relative;
    z-index: 100;
}
.timeline-image::before {
    content: "";
    width: 70px;
    height: 70px;
    border: 2px dashed #e29587;
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: #fff;
    z-index: 1;
}
.timeline-image img {
    position: relative;
    z-index: 100;
}
/*small device style*/

@media (max-width: 767px) {
  .timeline-nodes:nth-child(odd) h3,
  .timeline-nodes:nth-child(odd) p {
    text-align: left
  }
  .timeline-nodes:nth-child(even) {
      flex-direction: row;
  }
      .timeline::before {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 4%;
      width: 0;
      border-left: 2px dashed #e29587;
      height: 100%;
      z-index: 1;
      transform: translateX(-50%);
  }
  .timeline h3 {
      font-size: 1.7rem;
  }
  .timeline p {
      font-size: 14px;
  }
  .timeline-image {
      position: absolute;
      left: 0%;
      top: 60px;
      /*transform: translateX(-50%;);*/
  }
  .timeline-nodes:nth-child(odd) .timeline-content::after {
      content: "";
      position: absolute;
      top: 5%;
      left: auto;
      right: 100%;
      width: 0;
      border-left: 0;
      border-right: 10px solid #e29587;
      border-top: 10px solid transparent;
      border-bottom: 10px solid transparent;
  }
  .timeline-nodes:nth-child(even) .timeline-content::after {
      content: "";
      position: absolute;
      top: 5%;
      right: 100%;
      width: 0;
      border-right: 10px solid #e29587;
      border-top: 10px solid transparent;
      border-bottom: 10px solid transparent;
  }
  .timeline-nodes:nth-child(even) .timeline-date {
      text-align: left;
  }
  .timeline-image::before {
      width: 65px;
      height: 65px;
  }
}

/*extra small device style */
@media (max-width: 575px) {
  .timeline::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 3%;
  }
  .timeline-image {
      position: absolute;
      left: -5%;
  }
  .timeline-image::before {
      width: 60px;
      height: 60px;
  }
}
</style>

<script lang="ts">
import experienceItem from '../components/experienceItem.vue';

export default {
  name: 'About',
  components: {
    experienceItem,
  },
};
</script>
