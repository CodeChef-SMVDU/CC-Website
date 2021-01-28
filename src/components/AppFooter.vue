<template>
    <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#877EA0" fill-opacity="1" d="M0,192L180,32L360,128L540,160L720,288L900,128L1080,224L1260,128L1440,160L1440,320L1260,320L1080,320L900,320L720,320L540,320L360,320L180,320L0,320Z"></path></svg>
        <div class="footer" id="footers">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4" data-aos="fade" data-aos-delay="50"
    data-aos-duration="1000" >
                        <img src="@/assets/logo.png">
                    </div>
                    <div class="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8" data-aos="fade" data-aos-delay="50"
    data-aos-duration="1000" >
                        <h1>Hack The Mountains</h1>
                        <p class="bold">
                                Virtual, 10-11 October 2020
                            <br>
                                Follow our
                                <a href="https://www.instagram.com/hack_the_mountains/?hl=en" target="_blank"
                                    >Instagram</a
                                >,
                                <a href="https://www.youtube.com/channel/UCws_V5zg2Kk7DZt7MAeEoxA" target="_blank"
                                    >YouTube</a
                                >,
                                <a href="https://twitter.com/HackMountains" target="_blank"
                                    >Twitter</a
                                >,
                                <a href="https://www.linkedin.com/company/hack-the-mountain-s" target="_blank"
                                    >Linkedin</a
                                >, and
                                <a href="https://www.facebook.com/Hack-The-Mountains-107148594421205" target="_blank"
                                    >Facebook</a
                                >
                                for the latest updates! <br>
                                <a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf" target="_blank"
                                    >MLH Code of conduct</a
                                >
                            </p>
                            <p>
                                Sudan's Tech is a Tech-oriented organization based in India.
                            </p>
                            <p>
                                &copy; Sudan's Tech
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
    height: 100%;
    width: 100%;
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
  color: #DED374 ;
}
.footer {
  font-family: 'Montserrat', sans-serif;
  font-size: large;
  position: relative;
  width: 100%;
  bottom: 0;
  background-color: #877EA0;
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
