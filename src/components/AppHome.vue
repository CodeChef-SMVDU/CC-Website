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
                <h1>CodeChef-SMVDU</h1>
                
                <p class="container para" > 
CodeChef-SMVDU is a non-commercial organisation with a goal to provide a platform for programmers and developers everywhere to meet, compete & have fun. At CodeChef-SMVDU, we believe in the words of Matt Mullenweg - “Technology is best when it brings people together”.
                    <br><br>
                </p>
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
    background-color: #f59d45 ;
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
