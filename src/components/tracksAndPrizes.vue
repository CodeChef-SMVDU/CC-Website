<template>
    <div class="container">
        <div class="tracks" id="tracks">
            <h3>Domains</h3>

            <div class="row" data-aos="fade" data-aos-delay="50"
    data-aos-duration="1000" >
                <div class="col-sm">
                    <div class="title">Technical</div>
                    <div class="desc">
       Here at CodeChef-SMVDU we love to make stuff that makes life easier and take great pride in our tech team that converts these mere ideas into working and usable implementations.
                    </div>
                </div>
                <div class="col-sm">
                    <img src="@/assets/health.png" class="img-thumbnail">
                </div>
            </div>

            <div class="row" data-aos="fade" data-aos-delay="50"
    data-aos-duration="1000" >
                <div class="col-sm">
                    <img src="@/assets/edu.png" class="img-thumbnail">
                </div>
                <div class="col-sm">
                    <div class="title">Management</div>
                    <div class="desc">
                       The cornerstone of CodeChef-SMVDU's most successful events and workshops, our management domain makes sure each of our events outperforms the previous one.
                    </div>
                </div>
            </div>

            <div class="row" data-aos="fade" data-aos-delay="50"
    data-aos-duration="1000" >
                <div class="col-sm">
                    <div class="title">Competitive Coding</div>
                    <div class="desc">Our Cc domain boasts of great problem solving and analytical skills and always makes sure it keeps raising the bar consistently to outperform themselves.
                    </div>
                </div>
                <div class="col-sm">
                    <img src="@/assets/ar.png" class="img-thumbnail">
                </div>
            </div>

            <div class="row" data-aos="fade" data-aos-delay="50"
    data-aos-duration="1000" >
                <div class="col-sm">
                    <img src="@/assets/ai.png" class="img-thumbnail">
                </div>
                <div class="col-sm">
                    <div class="title">Design</div>
                    <div class="desc">From designing interactive web illustrations to graphic UI elements, our design team never fails to deliver when it comes to etching out to their imagination on a digital canvas.                    </div>
                </div>
            </div>

            <div class="row" data-aos="fade" data-aos-delay="50"
    data-aos-duration="1000" >
                <div class="col-sm">
                    <div class="title">Editorial</div>
                    <div class="desc">
                    From blogging to project documentation, from technical and web content writing to event descriptions, our editorial team does it all to perfection.
                    </div>
                </div>
                <div class="col-sm">
                    <img src="@/assets/open.png" class="img-thumbnail">
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.tracks{
    text-align: center;
    color: black;
    font-family: 'Montserrat', sans-serif;
}

.prizes{
    color: black;
    font-family: 'Montserrat', sans-serif;
}

h3{
    font-weight: 800;
    padding: 10px;
    text-align: center;
    font-size: 2.5em;
}
hr{
    border-top: 2px solid #82CAE4;
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
