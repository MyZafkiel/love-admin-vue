<template>
  <header class="panel-cover bg" style="background-image: url(https://cdn.isx.cool/404bg.jpg)">
    <div class="panel-main">
      <div class="panel-main__inner panel-inverted">
        <div class="panel-main__content">
          <img src="https://cdn.isx.cool/logo.png" width="150" alt="Noisy logo" class="panel-cover__logo logo">
          <h1 class="panel-cover__title panel-title">
            <a title="link to homepage for noisy">404</a>
          </h1>
          <hr class="panel-cover__divider">
          <p class="panel-cover__description">对不起，您要找的页面丢失了，(＞人＜；)</p>
          <hr class="panel-cover__divider panel-cover__divider--secondary">
          <p class="panel-cover__description">欢迎来到我的个人世界!</p>
        </div>
      </div>
      <div class="panel-cover--overlay cover-slate"></div>
    </div>
  </header>
</template>

<style scoped>
body {
  line-height: 1;
}

body {
  width: 100%;
  *zoom: 1;
}

body:before,
body:after {
  display: table;
  content: "";
}

body:after {
  clear: both;
}

html,
body {
  height: 100%;
}

html {
  height: 100%;
  max-height: 100%;
}




a {
  color: #DF9C81;
  text-decoration: none;
}

a:hover {
  color: #d06c44;
  -webkit-transition: .5s;
  -moz-transition: .5s;
  -o-transition: .5s;
  -ms-transition: .5s;
}

h1
 {
  margin-top: 1.0em;
  margin-bottom: .5em;
  color: #333333;
  font-weight: lighter;
  font-family: "ff-tisa-web-pro-1", "ff-tisa-web-pro-2", "Lucida Grande", "Hiragino Sans GB", "Hiragino Sans GB W3", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
  -webkit-font-smoothing: antialiased;
}

h1 {
  margin-top: 0;
  letter-spacing: .05em;
  font-size: 1.8em;
  line-height: 1.2em;
}

p {
  margin-bottom: 1.3em;
  line-height: 1.7em;
}

.logo {
  width: 25%;
  border: 3px solid #FFF;
  border-radius: 50%;
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.3);
  transition: all .5s;
}

.logo:hover {
  border: 3px solid #5ba4e5;
  transition: all .5s;
  transform: rotate(360deg);
  -ms-transform: rotate(360deg);
}

hr {
  border: none;
}

.panel-title {
  margin: 0 0 15px 0;
  color: #FFF;
  letter-spacing: 4px;
  font-size: 2.5em;
}

.panel-cover {
  position: fixed;
  z-index: 900;
  display: block;
  width: 100%;
  height: 100%;
  max-width: none;
  background-size: cover;
}


.panel-cover--overlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 0;
  display: block;
  background-color: rgba(68, 68, 68, 0.6);
  background-image: -webkit-linear-gradient(-410deg, rgba(68, 68, 68, 0.6) 20%, rgba(0, 0, 0, 0.9));
  background-image: linear-gradient(140deg, rgba(68, 68, 68, 0.6) 20%, rgba(0, 0, 0, 0.9));
}

.panel-cover__logo {
  margin: 0 0 .2em 20px;
}

.panel-cover__description {
  margin: 0 30px;
  font-weight: 400;
}

.panel-cover__divider {
  margin: 20px auto;
  width: 50%;
  border-top: 1px solid rgba(255, 255, 255, 0.14);
}

.panel-cover__divider--secondary {
  width: 15%;
}

.panel-main {
  display: table;
  width: 100%;
  height: 100%;
}

.panel-main__inner {
  position: relative;
  z-index: 800;
  display: table-cell;
  padding: 0 60px;
  vertical-align: middle;
}

.panel-main__content {
  margin: 0 auto;
  max-width: 620px;
}


.panel-inverted {
  color: #FFF;
  text-align: center;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.4);
  font-weight: 100;
}

.panel-inverted a {
  color: #FFF;
}

.cover-slate {
  background-color: rgba(60, 91, 147, 0.6);
  background-image: -webkit-linear-gradient(-410deg, rgba(61, 66, 96, 0.6) 20%, rgba(21, 23, 34, 0.8));
  background-image: linear-gradient(140deg, rgba(61, 66, 96, 0.6) 20%, rgba(21, 23, 34, 0.8));
}


.navigation__item a {
  padding: 10px 20px;
  border: 1px solid #DF9C81;
  border-radius: 20px;
  color: #DF9C81;
  text-shadow: none;
  letter-spacing: 1px;
  font-weight: bold;
  font-size: .9em;
  -webkit-font-smoothing: antialiased;
}

nav {
  position: relative;
  display: inline-block;
}

.navigation__item a {
  position: relative;
  display: block;
  border-color: #FFF;
  color: #FFF;
  opacity: .8;
}

.navigation__item a:hover {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.3);
  color: #FFF;
  opacity: 1;
  transition: all .3s;
}

.navigation--social a {
  padding: 6px 8px 6px 9px;
  border: 0;
}

.navigation--social a  {
  display: none;
}

.navigation--social a  {
  display: block;
  font-size: 1.7em;
}


*:focus {
  outline: none;
}


@media all and (max-width: 1100px) {
  .panel-title {
    font-size: 2em;
  }


  .panel-cover__description {
    margin: 0 10px;
    font-size: .9em;
  }


}

@media all and (max-width: 960px) {


  .panel-main {
    position: relative;
    display: table;
  }



  .panel-main__inner {
    display: table-cell;
    padding: 60px 10%;
  }

  .panel-cover__description {
    display: block;
    margin: 0 auto;
    max-width: 600px;
  }

  .panel-cover {
    width: 100%;
    height: 100%;
    background-position: center center;
  }


  .panel-cover.panel-cover--collapsed .panel-main__inner {
    display: block;
    padding: 70px 0 30px 0;
  }

  .panel-cover.panel-cover--collapsed .panel-cover__logo {
    width: 60px;
    border-width: 2px;
  }

  .panel-cover.panel-cover--collapsed .panel-cover__description {
    display: none;
  }

  .panel-cover.panel-cover--collapsed .panel-cover__divider {
    display: none;
    margin: 1em auto;
  }

  .cover-navigation .navigation li {
    margin-bottom: .4em;
    width: 80%;
  }
  .cover-navigation.navigation--social .navigation li {
    display: inline-block;
    width: 25.8%;
  }

}

@media all and (max-width: 767px) {
  .panel-cover__logo {
    width: 100px;
  }


}


@media all and (max-width: 340px) {
  .panel-main__inner {
    padding: 0 5%;
  }

  .panel-title {
    margin-bottom: .1em;
    font-size: 1.5em;
  }

  .navigation__item a {
    margin-bottom: .4em;
  }
}
</style>