<template>
  <div>
    <AppHeader></AppHeader>
    <AppHome id="home"></AppHome>
    <br>
    <LiveEvent id="event"/>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f59d45 " fill-opacity="1" d="M0,192L180,32L360,128L540,160L720,288L900,128L1080,224L1260,128L1440,160L1440,320L1260,320L1080,320L900,320L720,320L540,320L360,320L180,320L0,320Z"></path></svg>
    <AppAbout id="about"></AppAbout>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f59d45 " fill-opacity="1" d="M0,192L180,32L360,128L540,160L720,288L900,128L1080,224L1260,128L1440,160L1440,0L1260,0L1080,0L900,0L720,0L540,0L360,0L180,0L0,0Z"></path></svg>
    <tap></tap>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f59d45" fill-opacity="1" d="M0,192L180,32L360,128L540,160L720,288L900,128L1080,224L1260,128L1440,160L1440,320L1260,320L1080,320L900,320L720,320L540,320L360,320L180,320L0,320Z"></path></svg>
    <Events id="events"></Events>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f59d45" fill-opacity="1" d="M0,192L180,32L360,128L540,160L720,288L900,128L1080,224L1260,128L1440,160L1440,0L1260,0L1080,0L900,0L720,0L540,0L360,0L180,0L0,0Z"></path></svg>
    <team id="team"></team>
    <AppFooter id="footer"></AppFooter>
  </div>
</template>

<script>
// @ts-ignore
import AppFooter from '@/components/AppFooter'
import AppHeader from '@/components/AppHeader'
import AppHome from '@/components/AppHome'

import AppAbout from '@/components/AppAbout'
import team from '@/components/team'
import LiveEvent from '@/components/LiveEvent'
import Events from '@/components/Events'
// import sponsors from '@/components/sponsors'
// import tap from '@/components/tracksAndPrizes'
import tap from '@/components/tracksAndPrizes'

export default { 
  
  components: {
    AppHeader: AppHeader,
    AppFooter: AppFooter,
    team: team,
    AppHome: AppHome,
    AppAbout: AppAbout,
    Events: Events,
    LiveEvent: LiveEvent,
    // sponsors: sponsors,
    // tap: tap,
    tap: tap
  }
}
</script>
