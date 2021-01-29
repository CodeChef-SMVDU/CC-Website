<template>
    <div class="faq">
        <h1 data-aos="fade" data-aos-delay="50"
    data-aos-duration="1000" ><span id="f">Frequently</span> Asked <span id="q">Questions</span></h1>
        <p data-aos="fade" data-aos-delay="50"
    data-aos-duration="1000" >We know you have a lot of questions, so check below for some of the most common questions we’ve received.</p>
        <br>
        <p data-aos="fade" data-aos-delay="50"
    data-aos-duration="1000" >For further questions, you may also contact us at <a href="mailto:codechef@smvdu.ac.in">codechef@smvdu.ac.in</a></p>
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
                    name: 'Sample Question?',
                    para: 'Sample Answer to the Question'
                },
                {
                    name: 'Sample Question?',
                    para: 'Sample Answer to the Question'
                },
                {
                    name: 'Sample Question?',
                    para: 'Sample Answer to the Question'
                },
                {
                    name: 'Sample Question?',
                    para: 'Sample Answer to the Question'
                },
                {
                    name: 'Sample Question?',
                    para: 'Sample Answer to the Question'
                }
            ],
            faq2: [
                {
                    name: 'Sample Question?',
                    para: 'Sample Answer to the Question'
                },
                {
                    name: 'Sample Question?',
                    para: 'Sample Answer to the Question'
                },
                {
                    name: 'Sample Question?',
                    para: 'Sample Answer to the Question'
                },
                {
                    name: 'Sample Question?',
                    para: 'Sample Answer to the Question'
                },
                {
                    name: 'Sample Question?',
                    para: 'Sample Answer to the Question'
                }
            ]
        };
    }
}
</script>

<style scoped>
.faq{
    background-color: #a6f25a ;
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
