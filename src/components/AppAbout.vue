<template>
<div class="about">
    <br>
    <h1 data-aos="fade" data-aos-delay="50"
    data-aos-duration="1000" >About Us</h1>
    <br><br>
    <div class="about-card" data-aos="fade" data-aos-delay="50"
    data-aos-duration="1000" >
    <br>
    <p>Our primary intention is to promote all-round development of students through interactive sessions, events, workshops and projects that help them perceive real-world probems. We strive hard to educate and guide our members by equipping them with technical and management skills, thereby enabling them to make significant contributions towards the community.

</p></div>
    <br>
<br></div>
</template>

<script>
export default {
    name: 'appabout',

}
</script>

<style scoped>
.about{
    background-color: #a6f25a;
    color: #fff;
}

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