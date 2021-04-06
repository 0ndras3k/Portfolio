<template>
  <div id="nav">
    <div class="py-5 content container">
      <nav>
        <ul>
          <li class="head" id="home">
            <a aria-current="page" class="active"><router-link to="/">Home</router-link></a>
          </li>
          <li class="head" id="home">
            <a><router-link to="/projects">Projects</router-link></a>
          </li>
          <li class="head" id="home">
            <a><router-link to="/about">About</router-link></a>
          </li>
          <li class="head" id="home">
            <a><router-link to="/contact">Contact</router-link></a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
  <router-view />
</template>

<style lang="scss">
@import "assets/scss/main.scss";
</style>
