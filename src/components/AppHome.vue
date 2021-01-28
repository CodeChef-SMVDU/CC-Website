<template>
    <div id="home">
        <div>
            <div class="logo" data-aos="fade" data-aos-delay="50"
    data-aos-duration="1000" ><img src="@/assets/home.svg"></div>
                <div class="social">
                    <ul>
                      <li><a href="https://www.linkedin.com/company/hack-the-mountain-s/?viewAsMember=true" target="_blank"><i class="fab fa-linkedin"></i></a></li>
                      <li><a href="https://www.youtube.com/channel/UCws_V5zg2Kk7DZt7MAeEoxA" target="_blank"><i class="fab fa-youtube-square"></i></a></li>
                      <li><a href="https://twitter.com/HackMountains" target="_blank"><i class="fab fa-twitter"></i></a></li>
                      <li><a href="https://www.instagram.com/hack_the_mountains/?hl=en" target="_blank"><i class="fab fa-instagram"></i></a></li>
                      <li><a href="https://www.facebook.com/Hack-The-Mountains-107148594421205" target="_blank"><i class="fab fa-facebook"></i></a></li>
                    </ul>
                </div>
            <div class="caption" data-aos="fade" data-aos-delay="45"
    data-aos-duration="1000" >
                <h1>The best view comes after the hardest climb</h1>
                
                <p class="container para" > 
Hack the Mountain is a 36-hour Virtual Hackathon. It is a platform where hackers,
developers, innovators, entrepreneurs, and students can come together to create
solutions to real life problems. Developers can showcase their abilities, students can
increase their network, innovators can create new solutions. We invite all the young
minds out there to come and showcase their skills, increase their network and have fun.
                    <br><br>

                            Date : 10 - 11 October 2020 <a target="_blank" class=" cal" href="https://calendar.google.com/event?action=TEMPLATE&amp;tmeid=MnBibjh2dHI5OGk4ZmdhcDd0dnRnMzlnMDEgcGN1c2o5am5tbWZ1aTV2M3N1anR2dTQ3OGdAZw&amp;tmsrc=pcusj9jnmmfui5v3sujtvu478g%40group.calendar.google.com"><i class="fas fa-plus"></i></a><br>

                </p>
            </div>
            
            <div class="container" style="">
              <div class="buttons" data-aos="fade" data-aos-delay="50" data-aos-duration="1000" >
                  <button id="devfolio-apply-now" class="btn-lg"><svg class="logo" xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 115.46 123.46" style="height:24px;width:24px;margin-right:8px"><path d="M115.46 68a55.43 55.43 0 0 1-50.85 55.11S28.12 124 16 123a12.6 12.6 0 0 1-10.09-7.5 15.85 15.85 0 0 0 5.36 1.5c4 .34 10.72.51 20.13.51 13.82 0 28.84-.38 29-.38h.26a60.14 60.14 0 0 0 54.72-52.47c.05 1.05.08 2.18.08 3.34z" /><path d="M110.93 55.87A55.43 55.43 0 0 1 60.08 111s-36.48.92-48.58-.12C5 110.29.15 104.22 0 97.52l.2-83.84C.38 7 5.26.94 11.76.41c12.11-1 48.59.12 48.59.12a55.41 55.41 0 0 1 50.58 55.34z"/></svg>Apply with Devfolio</button>
                  <a class="btn btn-lg"  href="https://forms.gle/dq9HoNmBwNPfbBpZA">SPONSOR US</a>
              </div>  
            </div>
            
              
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'apphome', 
    data() {
      return {
        modalShow: false,
        form: {
        "email": "",
        "notes": "string",
        "referrer_url": "string",
        "metadata": { },
        "tags": []
        },
        nameState: null,
      }
    },
     methods: {
      checkFormValidity() {
        const valid = this.$refs.form.checkValidity()
        this.nameState = valid
        return valid
      },
      resetModal() {
        this.form.email = ''
        this.nameState = null
      },
      handleOk(bvModalEvt) {
        bvModalEvt.preventDefault()
        this.handleSubmit()
      },
      handleSubmit() {
        // Exit when the form isn't valid
        if (!this.checkFormValidity()) {
          return
        }
        this.$http.post(
          "https://api.buttondown.email/v1/subscribers",
          this.form,
          { 
            headers: {
                        authorization: "token " + "73d8df0a-03dd-49cd-85b6-ac054280e5f9",
                    }
          },
        );
        console.log(this.form);
        this.$nextTick(() => {
          this.$bvModal.hide('modal-center')
        })
      }
    }
}
</script>


<style scoped>
.logo{
    text-align: center;
}
.caption{
    text-align: center;
    font-family: 'Montserrat', sans-serif;
}
.caption h1{
    font-weight: bold;
    font-family: 'Montserrat', sans-serif;
}
.caption p{
    font-size: 1.2rem;
    font-family: 'Montserrat', sans-serif;
}
 .buttons {
    text-align: center;    
}
/* .buttons a:nth-child(1) i{
    margin-right: 15px;
    color: white;
    font-weight: 100;
    font-size: 25px;
} */

.buttons a:nth-child(2),.btn{
    margin: 10px;
    color: #000000;
    background-color: white;
    font-weight: 600;
    padding: 12px 20px;
    font-size: 18px;    
} 
#home{
    background-color: #877EA0 ;
    color: white;
}
.register-mentor{
    font-weight: 400;
    text-align: center;
}
.register-mentor a{
    color:white;
    text-decoration: underline;
}

p{
    line-height: 25px;
    font-family: 'Montserrat', sans-serif;

}

.button{
    margin: 5px 5px 5px 5px;
}

#devfolio-apply-now {
    -ms-flex-align: center;
    -webkit-box-align: center;
    align-items: center;
    background-color: #3770FF;
    border-radius: 3px;
    border: none;
    color: #FFFFFF;
    cursor: pointer;
    /* display: -ms-flexbox;
    display: -webkit-box; */
    /* display: flex; */
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    font-size: 18px;
    font-weight: 600;
    padding: 12px 20px;
    text-align: center;
    text-transform: lowercase;
}

#devfolio-apply-now:not([disabled]) {
    cursor: pointer;
}

#devfolio-apply-now:hover {
    background-color: #2954BF !important;
}

a:active, a:hover{
    text-decoration: none;
}
img{
    width: 100%;
  height: 450px;
}

.cal{
    font-size: 30px;
    color: #DED374 ;
}
.social{
  float: right;
  border-top: 2px solid #3770FF;
  border-left: 2px solid #3770FF;
  border-bottom: 2px solid #3770FF;
  background-color: rgba(55, 112, 255, 0.3);
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  padding-bottom: 7px;
  padding-left: 7px;
  padding-top: 7px;
  padding-right: 5px;
  transition: 1s ease;
  z-index: 3000;
  position: fixed;
  top: 50%;
  right: 0;
}
.social:hover{
  transform: scale(1.2);
  transition: 1s ease;
}
@media only screen and (max-width: 1200px) {
  .social {
    height: 0px;
    width: 0px;
    visibility: hidden;
    overflow: hidden;
  }
}
.para{
  margin-bottom: 0;
  padding-bottom: 0;
}
i{
  font-size: 30px;
  transition: 0.3s ease;
  cursor: pointer;
}
.fab:hover{
  color: red;
  transition: 0.3s ease;
}
ul {
  list-style-type: none;
  margin-bottom: 0;
}
li {
  list-style: none;
}
a{
  text-decoration: none;
  color: white;
}
</style>
