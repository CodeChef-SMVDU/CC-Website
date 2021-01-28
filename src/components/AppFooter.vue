<template>
    <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f59d45" fill-opacity="1" d="M0,192L180,32L360,128L540,160L720,288L900,128L1080,224L1260,128L1440,160L1440,320L1260,320L1080,320L900,320L720,320L540,320L360,320L180,320L0,320Z"></path></svg>
        <div class="footer" id="footers">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4" data-aos="fade" data-aos-delay="50"
    data-aos-duration="1000" >
                        <img src="@/assets/codechef/codechef.png">
                    </div>
                    <div class="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8" data-aos="fade" data-aos-delay="50"
    data-aos-duration="1000" >
    <br><br>
                        <h1>CodeChef SMVDU Chapter</h1>
                        <p class="bold">
                            <br>
                                Follow our
                                <a href="https://www.instagram.com/smvdu_cc/" target="_blank"
                                    >Instagram</a
                                >,
                                <a href="https://www.linkedin.com/groups/12483057/" target="_blank"
                                    >Linkedin</a
                                >, and
                                <a href="https://www.facebook.com/CodeChefSMVDUChapter" target="_blank"
                                    >Facebook</a
                                >
                                for the latest updates! <br>
                                Also don't forget to join our  
                                <a href="https://discord.gg/YRHQbpsFUm" target="_blank"
                                    >Discord Channel</a
                                >
                            </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "appfooter",
};
</script>

<style scoped>
img{
    height: 90%;
    width: 80%;
    align-content: center;
    align-items: center;
    padding: 10px 10px 10px 10px;
}
h1{
    text-align: left;
    color: white;
    font-weight: 800;
}
#logo {
  font-size: 30px;
}
a {
  color:  whitesmoke;
}
.footer {
  font-family: 'Montserrat', sans-serif;
  font-size: large;
  position: relative;
  width: 100%;
  bottom: 0;
  background-color: #f59d45;
  color: white;
  text-align: center;
  margin-bottom: 0;
}
p {
  text-align: left;
}
@media only screen and (max-width: 991px) {
  p{
      text-align: center;
  }
  h1{
      text-align: center;
  }
}
</style>
