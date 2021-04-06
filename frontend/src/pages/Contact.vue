<template>
  <div class="contact">
    <div className="container">
      <h2 className="text-center pb-4 font-weight-bold">Contact me</h2>
      <form>
        <div className="row mb-4">
          <div className="col-lg-4 mb-4 mb-lg-0 form">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="col-lg-4 mb-4 mb-lg-0 form">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="col-lg-4 form">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" />
          </div>
        </div>

        <div className="form mb-4">
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" cols="30" rows="10"></textarea>
        </div>

        <button className="btn btn-primary-cstm btn-block mb-4">SUBMIT MY MESSAGE</button>
      </form>

      <h2 className="text-center pb-4 font-weight-bold">Social media</h2>

      <div className="media">
        <div className="m-auto">
          <a href="https://github.com/0ndras3k">
            <img
            src="@/assets/svg/github.svg"
            alt="github-tile"
            id="github-title"
            className="social-media" />
          </a>
          <a href="https://www.instagram.com/oklapka.tech/">
            <img src="@/assets/svg/instagram-icon.svg"
            class="ml-2"
            alt="instagram-icon"
            id="instagram-icon"
            className="social-media ml-5" />
          </a>
          <a href="https://www.linkedin.com/in/ondřej-klapka-b306591ba/">
            <img
            src="@/assets/svg/linkedin.svg"
            class="ml-2"
            alt="linkedin-icon"
            id="linkedin-icon"
            className="social-media ml-5" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Contact',
};
</script>
