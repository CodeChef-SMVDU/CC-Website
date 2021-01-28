<template>
  <div>
    <AppHeader></AppHeader>
    <br><br>
    <AppHome id="home"></AppHome>
    <br>
    <AppAbout id="about"></AppAbout>
    <tap></tap>

    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#82CAE4" fill-opacity="1" d="M0,192L180,32L360,128L540,160L720,288L900,128L1080,224L1260,128L1440,160L1440,320L1260,320L1080,320L900,320L720,320L540,320L360,320L180,320L0,320Z"></path></svg>
    <sponsors id="sponsors"></sponsors>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#82CAE4" fill-opacity="1" d="M0,192L180,32L360,128L540,160L720,288L900,128L1080,224L1260,128L1440,160L1440,0L1260,0L1080,0L900,0L720,0L540,0L360,0L180,0L0,0Z"></path></svg>
         <team id="team"></team>

    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#a6f25a " fill-opacity="1" d="M0,192L180,32L360,128L540,160L720,288L900,128L1080,224L1260,128L1440,160L1440,320L1260,320L1080,320L900,320L720,320L540,320L360,320L180,320L0,320Z"></path></svg>
    <faq id="faq"></faq>
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#a6f25a " fill-opacity="1" d="M0,192L180,32L360,128L540,160L720,288L900,128L1080,224L1260,128L1440,160L1440,0L1260,0L1080,0L900,0L720,0L540,0L360,0L180,0L0,0Z"></path></svg>

     <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#82CAE4" fill-opacity="1" d="M0,192L180,32L360,128L540,160L720,288L900,128L1080,224L1260,128L1440,160L1440,320L1260,320L1080,320L900,320L720,320L540,320L360,320L180,320L0,320Z"></path></svg>
     <judges id="judges"></judges>
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#82CAE4" fill-opacity="1" d="M0,192L180,32L360,128L540,160L720,288L900,128L1080,224L1260,128L1440,160L1440,0L1260,0L1080,0L900,0L720,0L540,0L360,0L180,0L0,0Z"></path></svg> -->
     <contact id="contact"></contact>
    <AppFooter id="footer"></AppFooter>
  </div>
</template>

<script>
import AppFooter from '@/components/AppFooter'
import AppHeader from '@/components/AppHeader'
import AppHome from '@/components/AppHome'
import faq from '@/components/faq'
import AppAbout from '@/components/AppAbout'
import team from '@/components/team'
// import judges from '@/components/judges'
import contact from '@/components/contact'
import sponsors from '@/components/sponsors'
// import tap from '@/components/tracksAndPrizes'
import tap from '@/components/tracksAndPrizes'
export default {
  components: {
    AppHeader: AppHeader,
    AppFooter: AppFooter,
    faq: faq,
    team: team,
    AppHome: AppHome,
    AppAbout: AppAbout,
    // judges: judges,
    contact: contact,
    sponsors: sponsors,
    // tap: tap,
    tap: tap,
  }
}
</script>
