<template>
<div>
    <br>
    <h1 data-aos="fade" data-aos-delay="50"
    data-aos-duration="1000" >About Us</h1>
    <br><br>
    <div class="about-card" data-aos="fade" data-aos-delay="50"
    data-aos-duration="1000" >
    <h3>What is Hack the Mountains?</h3>
    <br>
    <p>
Hack The Mountains is a community- focused Virtual Hackathon, designed especially for the
needs of the community itself. Whether you are a beginner or expert ,here is a perfect chance to
show your skills and witness a competitive yet inclusive developer community around it.</p>
<p>In light of the CoronaVirus outbreak, your safety and well being are our primary concern.
Hence all the activities Related to Hack the Mountain like workshops,talks will be conducted
online.</p></div>
    <br>
<div class="about-card-1" data-aos="fade" data-aos-delay="50"
    data-aos-duration="1000" >
<h3>About the Organiser:</h3>
<br>
<p>Hack the Mountains is organised by J&k First Tech community ‘ Sudans Tech ‘ mainly focussing
on providing technical education to students and empowering them all with technical knowledge.
It is the community for those who want to learn about technology from beginner level to expert
level.</p>
</div><br></div>
</template>

<script>
export default {
    name: 'appabout',

}
</script>

<style scoped>

h1{
    text-align: center;
    font-family: 'Montserrat', sans-serif;

}
.about-card{
        box-shadow: 5px 5px  15px -6px rgba(0, 0, 0, 0.75);
        border-radius: 20px 20px 20px 20px;
        height: 40%;
        width: 80%;
        padding: 50px;
        margin-left: 10%;
        overflow: hidden;
        font-family: 'Montserrat', sans-serif;
        transition: box-shadow 1s ease;

}

.about-card-1{
        box-shadow: 5px 5px  15px -6px rgba(0, 0, 0, 0.75);
        border-radius: 20px 20px 20px 20px;
        height: 30%;
        width: 80%;
        padding: 50px;
        margin-left: 10%;
        overflow: hidden;
        font-family: 'Montserrat', sans-serif;
        transition: box-shadow 1s ease;
}

.about-card:hover,.about-card-1:hover{
        box-shadow: 10px 10px 54px -6px rgba(0, 0, 0, 0.75);
}

p{
    font-size: 20px;
}


</style>