<template>
     <div id="header">
    <b-navbar toggleable="lg" :sticky="sticky">
     <b-navbar-toggle target="nav-collapse" class="hamburger"></b-navbar-toggle>
      <b-navbar-brand href="#" id="navbar-brand"><img src="@/assets/codechef/codechef.png" height="auto" width="125px"></b-navbar-brand>


      <b-collapse id="nav-collapse" is-nav class="nav-shift">
        <!-- Right aligned nav items -->
        <b-navbar-nav>
          <b-navbar-nav>
            <b-nav-item href="#home" class="animate__animated animate__backInDown">Home</b-nav-item>
            <b-nav-item href="#about" class="animate__animated animate__backInDown">About</b-nav-item>
            <b-nav-item href="#events" class="animate__animated animate__backInDown">Events</b-nav-item>
            <b-nav-item href="#team" class="animate__animated animate__backInDown">Team</b-nav-item>
            <b-nav-item href="#faq" class="animate__animated animate__backInDown">FAQ</b-nav-item>
          </b-navbar-nav>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
 name: 'appheader',
 data() {
   return {
     sticky: true
   };
 }
}
</script>

<style scoped>
#header {
  background-color: #f8f9fa;
  color: black;
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
  font-size: 20px;
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