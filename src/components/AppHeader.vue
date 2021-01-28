<template>
     <div id="header">
    <b-navbar toggleable="lg" :sticky="sticky">
      <a id="mlh-trust-badge" style="display:block;max-width:100px;min-width:60px;position:fixed;right:50px;top:0;width:10%;z-index:10000" href="https://mlh.io/seasons/apac-2021/events?utm_source=apac-hackathon&utm_medium=TrustBadge&utm_campaign=2021-season&utm_content=gray" target="_blank"><img src="https://s3.amazonaws.com/logged-assets/trust-badge/2021/mlh-trust-badge-2021-gray.svg" alt="Major League Hacking 2021 Hackathon Season" style="width:100%"></a>
     <b-navbar-toggle target="nav-collapse" class="hamburger"></b-navbar-toggle>
      <b-navbar-brand href="#" id="navbar-brand"><img src="@/assets/logo.png" height="auto" width="125px"></b-navbar-brand>


      <b-collapse id="nav-collapse" is-nav class="nav-shift">
        <!-- Right aligned nav items -->
        <b-navbar-nav>
          <b-navbar-nav>
            <b-nav-item href="#home" class="animate__animated animate__backInDown">Home</b-nav-item>
            <b-nav-item href="#about" class="animate__animated animate__backInDown">About</b-nav-item>
            <b-nav-item href="#sponsors" class="animate__animated animate__backInDown">Sponsors</b-nav-item>
            <b-nav-item href="#tracks" class="animate__animated animate__backInDown">Tracks</b-nav-item>
            <b-nav-item href="#prizes" class="animate__animated animate__backInDown">Prizes</b-nav-item>
            <b-nav-item href="#faq" class="animate__animated animate__backInDown">FAQ</b-nav-item>
            <b-nav-item href="#team" class="animate__animated animate__backInDown">Team</b-nav-item>
            <b-nav-item href="#judges" class="animate__animated animate__backInDown">Schedule</b-nav-item>
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