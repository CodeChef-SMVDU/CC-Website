<template>
    <div id="home">
        <div>
            <div class="logo" data-aos="fade" data-aos-delay="50"
    data-aos-duration="1000" ><img id="hero-svg" src="@/assets/codechef/codechef.png" height="auto" width="200"></div>
    <br>
                <div class="social">
                    <ul>
                      <li><a href="https://www.linkedin.com/groups/12483057/" target="_blank"><i class="fab fa-linkedin fab_link"></i></a></li>
                      <li><a href="https://www.youtube.com/channel/UCXIWwKmojZpBJH0LgU-MWVA" target="_blank"><i class="fab fa-youtube-square"></i></a></li>
                      <!-- <li><a href="https://twitter.com/" target="_blank"><i class="fab fa-twitter"></i></a></li> -->
                      <li><a href="https://discord.gg/YRHQbpsFUm" target="_blank"><i class="fab fa-discord fab_dis"></i></a>
                      <li><a href="https://www.instagram.com/smvdu_cc/" target="_blank"><i class="fab fa-instagram fab_insta"></i></a></li>
                      <li><a href="https://www.facebook.com/CodeChefSMVDUChapter" target="_blank"><i class="fab fa-facebook fab_face"></i></a></li>
                    </ul>
                </div>
            <div class="caption top_intro" data-aos="fade" data-aos-delay="45"
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

#home {
  padding-top: 2rem;
  margin-top: 6vh;   /* just because nav is sticky and has some problem with proper positioning and styling */
}

.top_intro {
  padding-top: 1.5rem;
  min-height: 35vh;
}
.logo{
    text-align: center;
}
#hero-svg{
  margin-top: 50px;
  width: 30vh;
  height: 30vh;
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
a:active, a:hover{
    text-decoration: none;
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
.fab_link:hover{
  color: #0e76a8;
  transition: 0.3s ease;
}
.fab_insta:hover{
  color: #8a3ab9 ;
  transition: 0.3s ease;
}
.fa-youtube-square:hover{
  color:#FF0000;
}
.fab_face:hover{
  color: #4267B2;
  transition: 0.3s ease;
}
.fab_dis:hover{
  color: #7289d9;
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
