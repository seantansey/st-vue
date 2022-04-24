<template>
  <div class="about">
    <h1>About</h1>
    <div class="flex-row">
      <div class="about-content flex-1">
        <h3>I'm a Software Engineer specializing in Front-end development based in Denver, Colorado.</h3>
        <p>
          I enjoy building solutions for complex front end UI problems.
          I'm of the belief that simple, explict, readable and maintable code is more important than minor performance improvements made by writing condensed "clever" code.
          While trained in full-stack development I've found myself drawn to working on UI's in both web and mobile applications. 
        </p>
        <p>
          When I'm not coding you'll find me snowboarding, fishing, in the gym, or enjoying the numerous outdoor activities Colorado has to offer.
        </p>
        <font-awesome-icon icon="fa-solid fa-envelope" size="lg"  class="social-icon"/>
        <span class="social-text">sean.d.tansey@gmail.com</span>
        <a class="linkedin" href="https://www.linkedin.com/in/seantansey/">
          <font-awesome-icon icon="fa-brands fa-linkedin" size="lg"  class="social-icon"/>
          <span class="social-text">linkedin.com/in/seantansey</span>
        </a> 

        <a class="github" href="https://github.com/stansey92">
          <font-awesome-icon icon="fa-brands fa-github" size="lg"  class="social-icon" />
          <span class="social-text">github.com/stansey92</span>
        </a>

      </div>
      <div class="flex-1">
        <img class="profile-picture" src="@/assets/mountain-bike.png">
      </div>
    </div>
    <h2>Skills<span class="note"> *</span></h2>
    <h3>Front-end development (preferred)</h3>
    <div class="flex-row">
      <ul>
        <li>JavaScript</li>
      <ul>
        <li>Vue</li>
        <li>React / React-Native</li>
        <li>Svelte</li>
      </ul>
      <li>HTML</li>
      <li>CSS</li>
      <ul>
        <li>SCSS / Sass</li>
        <li>Responsive design</li>
        <li>Tailwind</li>
        <li>Bootstrap</li>
      </ul>
    </ul>
    <div >
      <font-awesome-icon icon="fa-brands fa-js-square" size="10x" class="js logo" />
      <font-awesome-icon icon="fa-brands fa-vuejs" size="10x" class="vue logo"/>
      <font-awesome-icon icon="fa-brands fa-react" size="10x" class="logo"/>
      <font-awesome-icon icon="fa-brands fa-html5" size="10x" class="logo"/>
      <font-awesome-icon icon="fa-brands fa-css3" size="10x" class="logo"/>
      <font-awesome-icon icon="fa-brands fa-sass" size="10x" class="logo"/>
    </div>

    </div>
   
    <h3>Back-end development</h3>
    <ul>
      <li>
        <font-awesome-icon icon="fa-brands fa-node" size="xl"/>
        Node
      </li>
      <li>
        <font-awesome-icon icon="fa-brands fa-laravel" size="xl"/>
        Laravel (Php)
      </li>
      <li>
        <font-awesome-icon icon="fa-brands fa-gem" size="xl"/>
        Ruby on Rails
      </li>
    </ul>
    <h3>Other</h3>
    <ul>
      <li>Unit testing (Jest)</li>
      <li>Agile development process</li>
      <li>Google Analytics</li>
    </ul>
    <div class="note">* skills listed above are ones I have professional experience with. I have experimented with many others.</div>

    <h2>Experience</h2>
    <h3>IHS Markit (now part of S&P Global)</h3>
    <div>Software Engineer</div>
    <div>Associate II Software Engineer</div>
    <ul>
      <li>Working alongside a small agile team developed new UI features as part of sitewide design update for a client in the financial industry.</li>
      <li>Refactored existing web components to support multi-tenancy allowing onboarding of new regions.</li>
      <li>Added support for Google Analytics tracking allowing clients to see how users are interacting with their site.</li>
      <li>Refactored existing web components to meet accessibility requirements for ADA compliance.</li>
      <li>Built API to support new web features.</li>
      <li>Unit tested all new code written both front and back end. </li>
    </ul>


    </ul>

    <h2>Interests</h2>
      <ul>
        <li>Snowboarding</li>
        <li>Camping</li>
        <li>Fishing</li>
        <li>Mountain biking</li>
        <li>Surfing</li>
        <li>Snowmobiling</li>
        <li>Guitar</li>
        <li>Minnesota Vikings</li>
      </ul>
  </div>
</template>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

  h1 {
    margin-bottom: $margin-sm;
  }

  h2 {
    margin-top: $margin-xl;
  }

  h3 {
    margin-bottom: 0;
  }

  .flex-row {
    display: flex;
    flex-direction: row;

      @media only screen and (max-width: $tablet-sm) {
        flex-direction: column;
      }

  }

  .js {
    color: #f7df1e;
  }

  .vue {
    color: $green;
  }

  .logo {
    margin: $margin-sm;
  }

  .about-content {
    margin-right: $margin;

      @media only screen and (max-width: $tablet-sm) {
        margin-bottom: $margin;
      }


   
  }

  .profile-picture {
    width: 100%;
  }

  h3 {
    color: $green;
  }

  a {
    display: block;
  }

  a:hover {
    color: $green;
    text-decoration: underline;
  }

  .social-icon {
    margin-right: $margin-sm;
  }

  .social-text {
    font-size: 14px;
  }

  .linkedin {
    color: #0a66c2;
    text-decoration: none;
  }

  .github {
    color: $grey;
    text-decoration: none;
  }

  .flex-1 {
    flex: 1;
  }

  .note {
    color: $grey;
  }
</style>
