<template>
     <div id="header">
    <b-navbar toggleable="lg" :sticky="sticky">
     <b-navbar-toggle target="nav-collapse" class="hamburger"></b-navbar-toggle>
      <!-- <b-navbar-brand href="#" id="navbar-brand">
        <img id="logo" src="@/assets/codechef/codechef.png" height="auto" width="50px">
      </b-navbar-brand> -->

      <b-collapse id="nav-collapse" is-nav class="nav-shift">
        <!-- Right aligned nav items -->
        <b-navbar-nav>
            <b-nav-item href="#home" class="animate__animated animate__backInDown">Home</b-nav-item>
            <b-nav-item href="#event" class="animate__animated animate__backInDown">Register</b-nav-item>

            <b-nav-item href="#about" class="animate__animated animate__backInDown">About</b-nav-item>
            <b-nav-item href="#events" class="animate__animated animate__backInDown">Past Events</b-nav-item>
            <b-nav-item href="#team" class="animate__animated animate__backInDown">Team</b-nav-item>

            <b-nav-item @click="darkThemeSwitch" class="animate__animated animate__backInDown"><i id="theme_img_moon" class="far fa-moon"></i></b-nav-item>
            <b-nav-item @click="darkThemeSwitch" class="animate__animated animate__backInDown"><i id="theme_img_sun" class="fas fa-sun"></i></b-nav-item>
          </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>

import themeChanger from "../util/theme.js";

export default {

  props: ['theme'],
 name: 'appheader',
 data() {
   return {
     themeChanger: null,
     sticky: true,
   };
 },
 methods: {
      darkThemeSwitch: function() {
        var th_img_m = document.getElementById('theme_img_moon');
        var th_img_s = document.getElementById('theme_img_sun');

        if(th_img_m.style.display !== 'none'){
          th_img_m.style.display = 'none';
          th_img_s.style.display = 'initial';
        }else{
          th_img_s.style.display = 'none'
          th_img_m.style.display = 'initial';
        }
        
        this.themeChanger._darkThemeSwitch();
      },
    },
    created: function() {
      this.themeChanger = new themeChanger();
    },
 
}
</script>

<style scoped>
#header a {
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

#header {
  
  min-height: 6vh;
  /* background-color: #3f5f70; */
  background-color: white;
}

#theme_img_moon {
  display: none;
}

#header {
  font-size: 18px;
  font-weight: bolder;
  font-family: 'Montserrat', sans-serif;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 3000;
}
#navbar-brand {
display:block;
max-width:50px;
min-width:50px;
position:fixed;
top:0;
width:10%;
z-index:10000
}
#logo {
  float: topright;
}
.nav-item{
    margin-right: 20px;
}

.nav-shift{
 justify-content: center;
}

@media (min-width: 777px) and (max-width: 995px) {
  #navbar-brand {
    margin-right: 75%;
  }
}

@media (min-width: 497px) and (max-width: 776px) {
  #navbar-brand {
    margin-right: 70%;
  }
}

@media (min-width: 320px) and (max-width: 496px) {
  #navbar-brand {
    margin-right: 35%;
  }
}

</style>