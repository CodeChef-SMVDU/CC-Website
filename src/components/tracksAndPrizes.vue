<template>
    <div class="container">
        <div class="tracks" id="tracks">
            <h3>Tracks</h3>

            <div class="row" data-aos="fade" data-aos-delay="50"
    data-aos-duration="1000" >
                <div class="col-sm">
                    <div class="title">Healthcare</div>
                    <div class="desc">
                        This track is about how technology can help the people of the healthcare department. Here is
your perfect chance to appreciate and support those who have kept their own well-being as
secondary, and prioritised working day-and-night for us. 
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
                    <div class="title">Education</div>
                    <div class="desc">
                        This track is about how knowledge about technology can change various dimensions of life and
provide each individual an opportunity to grow and let others grow with them . 

                    </div>
                </div>
            </div>

            <div class="row" data-aos="fade" data-aos-delay="50"
    data-aos-duration="1000" >
                <div class="col-sm">
                    <div class="title">Augmented Reality</div>
                    <div class="desc">
                        Augmented reality (AR) adds digital elements to a live view often by using the camera on a smartphone.
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
                    <div class="title">Artificial Intelligence</div>
                    <div class="desc">
                        Artificial intelligence (AI) is the simulation of human intelligence processes by machines, especially computer systems
                    </div>
                </div>
            </div>

            <div class="row" data-aos="fade" data-aos-delay="50"
    data-aos-duration="1000" >
                <div class="col-sm">
                    <div class="title">Open Innovation</div>
                    <div class="desc">
                        Participants are welcomed to come up with new and practical ideas for any real world problem of
their choosing and contribute to it . 
                    </div>
                </div>
                <div class="col-sm">
                    <img src="@/assets/open.png" class="img-thumbnail">
                </div>
            </div>

        </div>

        <br><br>
        <hr>
        <br><br>

        <div class="prizes" id="prizes" data-aos="fade" data-aos-delay="50"
                data-aos-duration="1000" >
            <h3>Prizes</h3>
            <p id="prize">Hover to see more details...</p>
<v-row>
    <v-col
        md="6"
        lg="4"
        sm="12"
        cols="12"
        class="pa-2"
      >
        <div class="prizes-card ">
            <h3>1st Prize</h3>
                <ul class="container">
                    <li v-for="item in prizes.first" :key='item' class="prizes-list">{{item}}</li>
                </ul>
        </div>
    </v-col>

    <v-col
        md="6"
        lg="4"
        sm="12"
        cols="12"
        class="pa-2"
      >
        <div class="prizes-card ">
            <h3>2nd Prize</h3>
                <ul class="container">
                    <li v-for="item in prizes.second" :key='item' class="prizes-list">{{item}}</li>
                </ul>
        </div>
    </v-col>

    <v-col
        md="6"
        lg="4"
        sm="12"
        cols="12"
        class="pa-2"
      >
        <div class="prizes-card ">
            <h3>3rd Prize</h3>
                <ul class="container">
                    <li v-for="item in prizes.third" :key='item' class="prizes-list">{{item}}</li>
                </ul>
        </div>
    </v-col>
    <v-col
        md="6"
        lg="4"
        sm="12"
        cols="12"
        class="pa-2"
      >
        <div class="prizes-card ">
            <h3><a href="https://www.echoar.xyz/" target="_blank"><img src="@/assets/echoar.png" height="30px" width="100px"></a> Prize</h3>
                <ul class="container">
                    <li v-for="item in prizes.echoar" :key='item' class="prizes-list">{{item}}</li>
                </ul>
        </div>
    </v-col>

    <v-col
        md="6"
        lg="4"
        sm="12"
        cols="12"
        class="pa-2"
      >
        <div class="prizes-card ">
            <h3><a href="https://www.sashido.io/" target="_blank"><img src="@/assets/shashido.jpeg" height="30px" width="100px"></a> ML Challenge</h3>
                <ul class="container">
                    <li v-for="item in prizes.sashido" :key='item' class="prizes-list">{{item}}</li>
                </ul>
        </div>
    </v-col>

    <v-col
        md="6"
        lg="4"
        sm="12"
        cols="12"
        class="pa-2"
      >
        <div class="prizes-card ">
            <h3><a href="https://matic.network/" target="_blank"><img src="@/assets/matic.svg" width="100px" height="50px"></a> Prize</h3>
                <ul class="container">
                    <li v-for="item in prizes.matic" :key='item' class="prizes-list">{{item}}</li>
                </ul>
        </div>
    </v-col>

    <v-col
        md="6"
        lg="4"
        sm="12"
        cols="12"
        class="pa-2"
      >
        <div class="prizes-card ">
            <h3><a href="https://www.portis.io/" target="_blank"><img src="@/assets/portis.svg" height="100px" width="100px"></a> Prize</h3>
                <ul class="container">
                    <li v-for="item in prizes.portis" :key='item' class="prizes-list">{{item}}</li>
                </ul>
        </div>
    </v-col>
    
    <v-col
        md="6"
        lg="4"
        sm="12"
        cols="12"
        class="pa-2"
      >
        <div class="prizes-card ">
            <h3><a href="https://tezos.com/" target="_blank"><img src="@/assets/tezos1.png" height="70px" width="100px"></a> Prize</h3>
                <ul class="container">
                    <li v-for="item in prizes.tezos" :key='item' class="prizes-list">{{item}}</li>
                </ul>
        </div>
    </v-col>
                <v-col
        md="6"
        lg="4"
        sm="12"
        cols="12"
        class="pa-2"
      >
        <div class="prizes-card ">
            <h3>Best Beginner Hackers</h3>
                <ul class="container">
                    <li v-for="item in prizes.beginnerhacker" :key='item' class="prizes-list">{{item}}</li>
                </ul>
        </div>
    </v-col>
     <v-col
        md="6"
        lg="4"
        sm="12"
        cols="12"
        class="pa-2"
      >
        <div class="prizes-card ">
            <h3>Best Jugaad </h3>
                <ul class="container">
                    <li v-for="item in prizes.jugaad" :key='item' class="prizes-list">{{item}}</li>
                </ul>
        </div>
    </v-col>
         <v-col
        md="6"
        lg="4"
        sm="12"
        cols="12"
        class="pa-2"
      >
        <div class="prizes-card ">
            <h3>Best Hardware Hack Sponsored by Digi-Key</h3>
                <ul class="container">
                    <li v-for="item in prizes.hardware" :key='item' class="prizes-list">{{item}}</li>
                </ul>
        </div>
    </v-col>
        <v-col
        md="6"
        lg="4"
        sm="12"
        cols="12"
        class="pa-2"
      >
        <div class="prizes-card ">
            <h3>Participants Perks</h3>
                <ul class="container">
                    <li v-for="item in prizes.participants" :key='item' class="prizes-list">{{item}}</li>
                </ul>
        </div>
    </v-col>
            </v-row>
        </div>
    </div>
</template>


<script>
export default {
    data(){
       return{
           prizes:{
           first:[
               'Certificate of Appreciation',
               'Swag Kit',
               'Clerky Lifetime Plan $799 which help to build your startup documentation work and setup',
               'Wolfram  Award and Alpha pro subscription worth $375',
                '1Password 6 months access which is a virtual vault',
               'Magoosh Platform Access , a learning platform',
               '1 year jet brains balance',
               'Bubble.io 1k credits to every member of winning team',
               'Internship opportunities',
               'Bugsee $200 credits',
           ],
           second:[
               'Certificate of Appreciation',
                'Swag Kit',
                'Internship Opportunity',
                'Wolfram Alpha Award and Platform Access worth $375',
                'Magoosh Platform Access , a learning platform',
                '1 year jet brains balance',
                'Bubble.io 1k credits to every member of winning team',
                '1Password 6month portal access',
                'Bugsee $200 credits',
           ],
           third:[
               'Certificate of Appreciation',
                'Swag Kit',
                'Wolfram Alpha Award and Platform Access worth $375',
                'Bubble.io 1k credits to every member of winning team',
                '1Password 6month portal access',
                'Bugsee $200 credits',
           ],
           participants:[
                'Certificate of Appreciation',
                'Swags from MLH',
                'One month free Business TIER access to Echo AR platform', 
                '30 day wolfram platform access',
                '45-Days ShashiDo Platform access',
                '90-Days Balsamiq Platform Access',
                '$50 cloud credits  from Digital Ocean',
                'Interview Cake free courses access',
                'Souled Store Discount Coupons',
                '3-months repl.it portal access',
                'Voiceflow Professional Licence to every participants for 1 month',
                '.xyz free domain',
           ],
           echoar:[
               '$50 amazon voucher to each member of Winning team',
                '$ One month free Business TIER Access',
                'Feature in EchoAr newsletter (send to investors and AR|VR Ecosystem)',
                'Coding Blocks Coupons',
                'Souled Store Coupon',
                'Bugsee $200 credits',
                'Internship opportunities',
                '1 year jetBrains product license',
           ],
           sashido:[
                "Top 3 Projects created with SashiDo to be featured on SashiDo's blogspot along with a prize!",   
                'The winner will be selected through online poll voting on SashiDo socials.',
                'Internship Opportunities.',
                'Registration for a 45-day Sashi-Do free trial and an opportunity to create projects with ML & SashiDo.',
            ],
           matic:[
                "Ethereum (Rs 10,000) or Ethereum + Matic (Rs 15,000)",
                "Eligibility to apply for internship/full-time roles and seed funding of up to 5,000 USD for winners"
           ],
           portis:[
               "300 USD (in crypto) for best app built on Portis"
           ],
           tezos:[
               "20,000rs for best app built on Tezos"
           ],
           beginnerhacker:[
               "Our best team of beginners will take home arduino starter kits to continue hacking on at future events. Teams must be at least 50% first time hackers to be eligible.",
               "Arduino Starter Kits"
           ],
           jugaad:[
               "The most useless, silly, and creative hack will take home arduino starter kits too!",
               "Arduino Starter Kits"
           ],
           hardware:[
               "Using your preferred hardware or hardware emulator, build a hack for your chance to win a Grove Beginner Kit, with Arduino Uno R3 included. 1 prize for each winning team member with 2 winning teams per event!",
                "Winners receive Grove Beginner Kits",               
           ] 
           }
       }
    },
}
</script>


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
