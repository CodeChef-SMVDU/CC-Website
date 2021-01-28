<template>
  <div class="container contact">
      <div class="row">
        <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6" data-aos="fade" data-aos-delay="50"
    data-aos-duration="1000" >
            <h3>Contact Us</h3>
            <p> The support team is here to help you. Register your queries in this form or mail us at <a href="mailto:hackthemountains@gmail.com">hackthemountains@gmail.com</a></p>
                  <p class="register-mentor">
                            Share your Knowledge to participants? Register as
                            a
                            <a href="https://forms.gle/EzLwHxQQBRFNxBRZ6">Speaker</a>!
                  </p>
        </div>
        <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6" data-aos="fade" data-aos-delay="50"
    data-aos-duration="1000" >
                    <form>
            <ul>
                <li>
                <label for="name"
                    ><span>Name <span class="required-star">*</span></span></label
                >
                <input type="text" id="name" name="user_name" v-model="user.name" />
                </li>
                <li>
                <label for="mail"
                    ><span>Email <span class="required-star">*</span></span></label
                >
                <input
                    type="email"
                    id="mail"
                    name="user_email"
                    v-model="user.email"
                />
                </li>
                <li>
                <label for="msg"><span>Message</span></label>
                <textarea rows="4" cols="50" v-model="user.message"></textarea>
                </li>
                <li>
                <button class="btn btn-primary" @click.prevent="submit">
                    Submit
                </button>
                </li>
            </ul>
            </form>
            <div class="alert alert-warning" v-if="notsubmitted">
            Response not submitted
            </div>
            <div class="alert alert-success" v-if="submitted">
            Response successfully submitted
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "contact",
  data() {
    return {
      user: {
        name: null,
        email: null,
        message: null,
        status: false
      },
      notsubmitted: false,
      submitted: false,
    };
  },
  methods: {
    submit() {
      if (
        this.user.name != null &&
        this.user.email != null &&
        this.user.message != null
      ) {
        this.submitted = true;
        this.notsubmitted = false;
        console.log("submit");
        this.$http.post(
          "https://hack-the-mountain.firebaseio.com/hackathon.json",
          this.user
        );
        this.user.email = null;
        this.user.name = null;
        this.user.message = null;
      } else {
        this.submitted = false;
        this.notsubmitted = true;
        console.log("not submitted");
      }
    },
  },
};
</script>

<style scoped>
body {
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(0, 41, 255, 0.02) 0%,
    rgba(0, 41, 255, 0) 100%
  );
}
label,
input,
textarea {
  display: block;
  width: 100%;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  padding: 0.3em;
}
span {
  font-weight: 700;
  color: #102a43;
  line-height: 35px;
  line-height: 2.5rem;
  font-size: 12px;
  font-size: 0.8rem;
  text-transform: uppercase;
}
input[type="submit"] {
  background: #fc4366;
  color: white;
  font-weight: 700;
  font-size: 1.2rem;
  border-radius: 5px;
  margin-top: 1.3em;
}

.container {
  margin: 5em auto;
}
form {
  background-color: #ffffff;
  padding-top: 40px;
  padding-right: 40px;
  padding-bottom: 40px;
  padding-left: 40px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  overflow: hidden;
  transition: 0.3s ease;
}
form:hover{
  transform: scale(1.1);
    transition: 0.3s ease;
}
.required-star {
  color: #fc4366;
}

input,
textarea {
  width: 100%;
  padding: 9px 20px;
  border: 1px solid #e1e2eb;
  background-color: #fff;
  color: #102a43;
  caret-color: #829ab1;
  box-sizing: border-box;
  font-size: 14px;
  font-size: 1rem;
  line-height: 29px;
  line-height: 2rem;
  box-shadow: inset 0 2px 4px 0 rgba(206, 209, 224, 0.2);
  border-radius: 3px;
  line-height: 29px;
  line-height: 2rem;
}
.contact{
    text-align: left;
    font-family: 'Montserrat', sans-serif;
}
h3{
    font-weight: 800;
    padding: 10px;
    text-align: left;
    font-size: 2em;
}
p{
    padding: 10px;
}
</style>
