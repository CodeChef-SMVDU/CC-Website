<template>
<div class="judges" >
    <div class="container" data-aos="fade" data-aos-delay="50"
    data-aos-duration="1000" >
         <h3><span id="j">Events</span></h3>
            <iframe src='https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1BgzX5-wqEoIxU_KSWu1seochRqVNOWq3-Z6XBgRqWTo&font=Default&lang=en&initial_zoom=2&height=650' width='100%' height='650' webkitallowfullscreen mozallowfullscreen allowfullscreen frameborder='0'></iframe>
       <div class="team">
    </div>
    </div>
</div>
</template>

<style scoped>
.judges{
    text-align: center;
    background-color: #f59d45;
    font-family: 'Montserrat', sans-serif;
}

p{
    font-weight: bold;
    font-size: 2.0em;
    color: white;
}
#j{
    color: white;
}
#m{
    color: black;
}

.register-mentor{
    font-weight: 400;
}
.register-mentor a{
    color: rgb(194, 97, 97);
    text-decoration: underline;
}

.team{
    text-align: center;
    color: black;
    font-family: 'Montserrat', sans-serif;
}
h3{
    font-weight: 800;
    padding: 10px;
    text-align: center;
    font-size: 2.5em;
    color: white;
}
.judge-box {
    text-align: center;
    margin: auto;
    border: solid 1px #f3f3f3;
    margin-top: 30px;
    min-height: 225px;
    min-width: 250px;
    max-height: 260px;
    max-width: 250px;
    padding: 32px;
    border-radius: 8px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.07);
    transition: 0.2s ease;
    background-color: white;
}
.judge-pic {
    display: flex;
    justify-content: center;
}
.judge-name {
    font-weight: bold;
    font-size: 18px;
    color: var(--text-dark);
}
.judge-desc {
    font-size: 15px;
    line-height: 1.6;
    color:darkgray;
}
img {
    border-radius: 50%;
    max-width: 100px;
    max-height: 100px;
    margin-bottom: 10px;
}

.social-icons a i {
  padding: 10px;
  color: #6852a5;
}
.judge-box:hover {
    transform: scale(1.2);
    transition: 0.2s ease;
}

</style>
