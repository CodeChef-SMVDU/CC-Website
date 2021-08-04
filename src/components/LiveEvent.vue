<template>
  <div class="container">
    <div class="tracks" id="tracks">
      <h1>On-Going Event</h1>
      <div class="event-card">
        <div class="counter">
          <Countdown id="countdown" end="August 7, 2021 16:30"></Countdown>
        </div>
        <img class="event" src="@/assets/cyber1.png"/>
        <div class="register">
          <b-button size="lg" class="btn" href="https://bit.ly/smvducybersecurity" variant="primary">Register</b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Countdown from 'vuejs-countdown'

export default {
  components: { Countdown }
}
</script>

<style scoped>
.counter {
  text-align: center;
  margin-bottom: 15px;
}
.register {
  margin-top: 15px;
  text-align: center;
}
.event {
    max-width:100%;
    max-height:100%;
}
.event-card{
    box-shadow: 5px 5px  15px -6px rgba(0, 0, 0, 0.75);
    border-radius: 20px 20px 20px 20px;
    align-content: center;
    margin: 0 auto;
    top: 10%;
    width: 78%;
    padding: 5%;
    position: relative;
    overflow: hidden;
    font-family: 'Montserrat', sans-serif;
    transition: box-shadow 1s ease;
    background-color: white;
}
.event-card:hover{
    box-shadow: 10px 10px 54px -6px rgba(0, 0, 0, 0.75);
}
h1{
    text-align: center;
    font-family: 'Montserrat', sans-serif;
}
.title {
  font-size: 26px;
  font-weight: 800;
}
.desc {
  font-size: 19px;
  color: #969899;
  margin-top: 5px;
}
.row {
  margin: 100px 10px 10px 10px;
}
.img-thumbnail {
  margin: 20px 10px 10px 10px;
  border-radius: 15px;
  height: 150px;
  width: 150px;
}

.prizes-card{
    margin: 10px;
    background-color: #ffffff;
    box-shadow: rgba(0, 0, 0, 0.07) 5px 5px 15px 4px;
    border-radius: 8px;
    transition: 1s ease;
    max-height: 110px;
    overflow: hidden;
}

.prizes-card:hover{
    transform: scale(1.07);
    transition: 1s ease;
    cursor: pointer;
    max-height: 800px;
}
.prizes-card:hover>h3{
    text-decoration: underline;
}

.prizes-list{
    padding-top: 20px;
    color: #838fa0;
    line-height: 20px;
}
#prize{
    text-align: center;
    font-weight: 700;
    font-size: 16px;
    color: #969899;
}
</style>
