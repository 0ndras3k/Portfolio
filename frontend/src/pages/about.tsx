import React from "react";
import Navbar from "../components/layout/Navbar";

/** 
 * Images
 */

import aboutblob from "../assets/svg/about-blob.svg";
import aboutphoneblob from "../assets/svg/about-phone-blob.svg";

/**
 * SVG Skill logos
 */

import php from "../assets/svg/php-icon.svg"
import nette from "../assets/svg/nette.svg"
import react from "../assets/svg/react.svg"
import node from "../assets/svg/nodejs-icon.svg"
import vue from "../assets/svg/vue.js.svg"
import heroku from "../assets/svg/heroku-icon.svg";
import java from "../assets/svg/java-icon.svg";
import js from "../assets/svg/javascript.svg";
import ts from "../assets/svg/typescriptlang-icon.svg";
import graphql from "../assets/svg/graphql.svg"
import express from "../assets/svg/express.svg"
import fastify from "../assets/svg/fastify.svg"
import kotlin from "../assets/svg/kotlinlang-icon.svg"
import nest from "../assets/svg/nestjs-icon.svg"
import mysql from "../assets/svg/mysql-icon.svg"
import mongodb from "../assets/svg/mongodb-icon.svg"
import postgresql from "../assets/svg/postgresql-icon.svg"
import sqllite from "../assets/svg/sqlite-icon.svg"
import github from "../assets/svg/github.svg"
import gitlab from "../assets/svg/gitlab-icon.svg"
import git from "../assets/svg/git-scm-icon.svg"
import docker from "../assets/svg/docker-tile.svg"
import gcloud from "../assets/svg/google_cloud-icon.svg"
import ubuntu from "../assets/svg/ubuntu-icon.svg"
import npmjs from "../assets/svg/npmjs-icon.svg"
import yarn from "../assets/svg/yarn.svg"
import redis from "../assets/svg/redis-icon.svg"
import redux from "../assets/svg/redux.svg"

export const About = () => {
  return (
    <>
      <div className="py-5 content container">
        <Navbar />

        <p className="text-center py-4 text">
          Hi, I’m a 
          <span className="text-primary font-weight-bold"> Web Developer</span>,
          <span className="text-secondary font-weight-bold"> Database manager</span>,
          <span className="text-primary font-weight-bold"> a Software Architect</span>,
          and open source enthusiast who is highly passionate about building
          fast, creative applications and writing beautiful code.
        </p>

        <hr />

        <p className="text-center pt-4 text">
          I write everything in
          <span className="text-secondary font-weight-bold"> TypeScript </span>
          so that everything works.
          Frontend of websites is writed in
          <span className="text-primary font-weight-bold"> React </span>&
          <span className="text-secondary font-weight-bold"> Vue.js </span>
          and backend in
          <span className="text-primary font-weight-bold"> Node.js </span>
          with
          <span className="text-secondary font-weight-bold"> Fastify (Fasteer) </span>&
          <span className="text-primary font-weight-bold"> TypeORM </span>
        </p>
      </div>

        <img
          src={aboutphoneblob}
          alt="about-phone-blob"
          id="about-phone-blob"
          className="d-none d-lg-block"
        />

        <div className="container">
          <h2 className="text-center pb-4 font-weight-bold">
            THINGS I'VE WORKED WITH
          </h2>
          <h4 className="text-center text-secondary font-weight-bold pb-3">
            Programming languages
          </h4>

          <div className="icons-center mb-4">
            <img
              src={ts}
              alt="typescriptlang-icon"
              id="typescriptlang-icon"
              className="about-svgs"
            />
            <img
              src={js}
              alt="Unofficial_JavaScript_logo_2"
              id="Unofficial_JavaScript_logo_2"
              className="about-svgs"
            />
            <img
              src={java}
              alt="java-icon"
              id="java-icon"
              className="about-svgs"
            />
            <img
              src={php}
              alt="php-icon"
              id="php-icon"
              className="about-svgs"
            />
          </div>
          <div className="icons-center mb-4">
            <img
              src={node}
              alt="nodejs-icon"
              id="nodejs-icon"
              className="about-svgs"
            />
            <img
              src={kotlin}
              alt="kotlin"
              id="kotlin"
              className="about-svgs"
            />
          </div>

          <h4 className="text-center text-secondary font-weight-bold pb-3">
            Frameworks
          </h4>

          <div className="icons-center mb-4">
            <img
              src={vue}
              alt="Vue"
              id="Vue"
              className="about-svgs"
            />
            <img
              src={react}
              alt="React"
              id="React"
              className="about-svgs"
            />
            <img
              src={express}
              alt="express-seeklogo"
              id="express-seeklogo"
              className="about-svgs"
            />
            <img
              src={nette}
              alt="Nette"
              id="Nette"
              className="about-svgs"
            />
          </div>
          <div className="icons-center mb-4">
            <img
              src={graphql}
              alt="yarnpkg-icon"
              id="yarnpkg-icon"
              className="about-svgs"
            />
            <img
              src={fastify}
              alt="fastify"
              id="fastify"
              className="about-svgs"
            />
            <img
              src={nest}
              alt="nest"
              id="nest"
              className="about-svgs"
            />
          </div>

          <h4 className="text-center text-secondary font-weight-bold pb-3">
            Databases
          </h4>

          <div className="icons-center mb-4">
            <img
              src={mysql}
              alt="mysql-icon"
              id="mysql-icon"
              className="about-svgs"
            />
            <img
              src={mongodb}
              alt="mongodb-icon"
              id="mongodb-icon"
              className="about-svgs"
            />
            <img
              src={postgresql}
              alt="postgresql-icon"
              id="postgresql-icon"
              className="about-svgs"
            />
            <img
              src={sqllite}
              alt="sqlite-icon"
              id="sqlite-icon"
              className="about-svgs"
            />
          </div>

          <div className="icons-center mb-4">
          <img
              src={redis}
              alt="redis"
              id="redis"
              className="about-svgs"
            />
          </div>

          <h4 className="text-center text-secondary font-weight-bold pb-3">
            Other
          </h4>

          <div className="icons-center mb-4">
            <img
              src={gitlab}
              alt="gitlab-icon"
              id="gitlab-icon"
              className="about-svgs"
            />
            <img
              src={git}
              alt="git-scm-icon"
              id="git-scm-icon"
              className="about-svgs"
            />
            <img
              src={docker}
              alt="docker-tile"
              id="docker-title"
              className="about-svgs"
            />
            <img
              src={gcloud}
              alt="google_cloud-icon"
              id="google_cloud-icon"
              className="about-svgs"
            />
          </div>

          <div className="icons-center mb-4">
            <img
              src={heroku}
              alt="heroku-icon"
              id="heroku-icon"
              className="about-svgs"
            />
            <img
              src={ubuntu}
              alt="ubuntu-icon"
              id="ubuntu-icon"
              className="about-svgs"
            />
            <img
              src={npmjs}
              alt="npmjs-icon"
              id="npmjs-icon"
              className="about-svgs"
            />
            <img
              src={yarn}
              alt="Group"
              id="Group"
              className="about-svgs"
            />
          </div>

          <div className="icons-center">
            <img
              src={github}
              alt="github-tile"
              id="github-title"
              className="about-svgs"
            />
            <img
              src={redux}
              alt="redux"
              id="redux-title"
              className="about-svgs"
            />
          </div>
        </div>
        <img
          src={aboutblob}
          alt="about-blob"
          id="about-blob"
          className="about-blob d-none d-lg-block"
        />
    </>
  );
};

export default About;
