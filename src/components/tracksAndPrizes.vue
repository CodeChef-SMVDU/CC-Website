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
