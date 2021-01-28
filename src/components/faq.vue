<template>
    <div class="faq">
        <h1 data-aos="fade" data-aos-delay="50"
    data-aos-duration="1000" ><span id="f">Frequently</span> Asked <span id="q">Questions</span></h1>
        <p data-aos="fade" data-aos-delay="50"
    data-aos-duration="1000" >We know you have a lot of questions, so check below for some of the most common questions we’ve received.</p>
        <br>
        <p data-aos="fade" data-aos-delay="50"
    data-aos-duration="1000" >For further questions, you may also contact us at hackthemountains@gmail.com</p>
        <div class="container" data-aos="fade" data-aos-delay="50"
    data-aos-duration="1000" >
            <div class="row">
                        <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6" id="set">
                            <v-expansion-panels
                    :accordion="accordion"
                    :popout="popout"
                    :inset="inset"
                    :multiple="multiple"
                    :focusable="focusable"
                    :disabled="disabled"
                    :readonly="readonly"
                    :flat="flat"
                    :hover="hover"
                    :tile="tile">
                        <v-expansion-panel
                                v-for="(item,i) in faq1"
                                :key="i"
                                >
                            <v-expansion-panel-header>{{ item.name }}</v-expansion-panel-header>
                            <v-expansion-panel-content>
                                    {{ item.para }}
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>
                        </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6" id="set">
                    <v-expansion-panels
                    :accordion="accordion"
                    :popout="popout"
                    :inset="inset"
                    :multiple="multiple"
                    :focusable="focusable"
                    :disabled="disabled"
                    :readonly="readonly"
                    :flat="flat"
                    :hover="hover"
                    :tile="tile">
                        <v-expansion-panel
                                v-for="(item,i) in faq2"
                                :key="i"
                                >
                            <v-expansion-panel-header>{{ item.name }}</v-expansion-panel-header>
                            <v-expansion-panel-content>
                                    {{ item.para }}
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>
                </div>
             </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            accordion: false,
            popout: true,
            inset: false,
            multiple: false,
            disabled: false,
            readonly: false,
            focusable: false,
            flat: false,
            hover: true,
            tile: false,
            faq1: [
                {
                    name: 'What is a Hackathon?',
                    para: 'A hackathon is a programming competition in which competitors use technology to build innovative projects within 36 hours. There will be opportunities to win cool prizes, learn from our key-note speakers, and network with our sponsors.'
                },
                {
                    name: 'Where will it be hosted?',
                    para: 'Hack the mountains will be hosted in October, 2020, completely virtually. All you need is to create a Slack account to communicate with our Hack the mountains community.'
                },
                {
                    name: 'Are there any rules?',
                    para: 'Attendees must abide by the MLH Code of Conduct. We want to respect each other and keep Hack the mountains a safe environment for all participants.'
                },
                {
                    name: 'Do I have to know how to code to join?',
                    para: 'Nope! You can learn along the way or team up with experienced programmers. Skills such as designing, business planning, and etc are all going to impact the projects in various ways!'
                },
                {
                    name: 'Who can participate?',
                    para: 'Everyone can participate! We encourage anyone who is interested in learning more about Hackathons, programming, and the tech industry to join Hack the Mountains!'
                }
            ],
            faq2: [
                {
                    name: 'How much does it cost?',
                    para: 'Hack the mountains is absolutely free to attend! You can participate for free via.'
                },
                {
                    name: 'Can students Attend?',
                    para: 'Yes, this is a student-held hackathon only. We would love to have your participation.'
                },
                {
                    name: 'What are the topics and prizes of hackathon? ',
                    para: "The topic and the prizes will be declared soon. Also once you've registered with an e-mail id , we'll notify you with a mail about further announcements."
                },
                {
                    name: 'How many members in a team?',
                    para: 'A team consists of 2-4 members. You can also take part solo in this hackathon'
                },
                {
                    name: 'Can I volunteer as a mentor or judge?',
                    para: "Yes! Hack the Mountains wouldn't be possible without our volunteers. We will open mentor and judge sign ups soon, and you can get notified when it opens by signing up for email updates above!"
                }
            ]
        };
    }
}
</script>

<style scoped>
.faq{
    background-color: #877EA0 ;
    text-align: center;
    color: white;
    font-family: 'Montserrat', sans-serif;
}
h1{
    font-weight: 800;
}
p{
    font-size: large;
    padding: 10px 10px 10px 10px;
    color: white;
}
#f{
    color: white;
}
#q{
    color: white;
}
#set{
    margin-top: 10px;
}
</style>
