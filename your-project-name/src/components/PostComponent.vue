<template>
    <div class="top-nav">
      <div class="navigation-links-left">
        <a href="PostComponent.vue">Home</a>
      </div>
      <div class="navigation-links-right">
        <!-- Add more links as needed -->
        <a href="Signup.vue">Sign Up</a>
        <!-- ... other links ... -->
      </div>
      <div style="padding: 10px">
          <img src="https://i.pinimg.com/originals/f1/0f/f7/f10ff70a7155e5ab666bcdd1b45b726d.jpg"
               alt="Profile Picture"
               width="40" id="user-pic">
        </div>
    </div>
  
  <div class="push">
    <button class="btn">Reset likes</button>
  </div>

    <div>
      <div v-for="post in posts" :key="post.postHeader.date" class="post-bubble">
        <div class="post-header">
          <img :src="post.postHeader.profilePicture.src" :alt="post.postHeader.profilePicture.alt" :width="post.postHeader.profilePicture.width">
          <span>{{ post.postHeader.date }}</span>
        </div>
        <img v-if="post.postImage" :src="post.postImage.src" :alt="post.postImage.alt" :class="post.postImage.class">
        <p>{{ post.postContent }}</p>
        <div class="like-section">
          <img :src="post.likeButton.src" :alt="post.likeButton.alt" :width="post.likeButton.width">
          <span>{{ post.likeCount }}</span>
          <button @click="likePost(post)">Like</button>
        </div>
      </div>
    </div>

  <div class="footer">
    <p>Autorid: Liisi Voitra, Markus Karl Mägi, Liisa Leit.</p>
      <a style="font-size: 17px">Copyright © 2023 University of Tartu, Computer Science, All rights reserved</a>
  </div>
  </template>

  <script>
  import { mapGetters, mapActions } from 'vuex';

  export default {
  computed: {
    ...mapGetters(['allPosts']),
    posts() {
      return this.allPosts;
    }
  },
  methods: {
    ...mapActions(['likePost']),
  },
  created() {
    this.$store.dispatch('fetchPosts');
  }
    }
  </script>

  <style scoped>
html {
    position: relative;
    height: 100%;
}
body {
    font-family: 'Courier New', monospace;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    background-color: azure;
    position: relative;
    min-height: 100%;
    padding-bottom: 100px;
}

p{
    font-family: Bahnschrift;
}
p1{
    font-size: 15px;
    font-family: Bahnschrift;
}

a{
    font-family: Bahnschrift;
    font-size: 20px;
}
span{
    font-size: 20px;
}

.signup-form {
    display: flex;
    flex-direction: column;
}

.form-field {
    margin-bottom: 10px;
}

.form-field label {
    display: block;
    font-family: 'Courier New', monospace;
    font-weight: bold;
    margin-bottom: 5px;
}

.form-field input {
    font-family: 'Courier New', monospace;
    font-weight: bold;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.signup-form button {
    font-family: 'Courier New', monospace;
    font-weight: bold;
    padding: 10px;
    background-color: darkslategrey;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 10px;
}

.signup-form button:hover {
    background-color: teal;
}

.signup-form-container {
    background-color: cadetblue;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 300px;
    margin-top: 20px;
    margin-bottom: 20px;
}

.top-nav {
    background-color: darkcyan;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    width: 100%;
    box-sizing: border-box;
    border-radius: 10px;
    height: 77px;
}

.nav-placeholder {
    width: 40px;
}

.navigation-links-right{
    display: flex;
    justify-content: right;
    flex-grow: 1;
}

.navigation-links-left{
    display: flex;
    justify-content: left;
    flex-grow: 1;
}

.navigation-links a {
    padding: 0 10px;
}

.post-bubble {
    background-color: rgb(202, 202, 202);
    padding: 15px;
    border-radius: 20px;
    width: 60%;
    text-align: left;
    margin: auto;
    margin-top: 10px;
    margin-bottom: 10px;
    flex-direction: column;
  background-color: turquoise;
}

.top-nav a {
    text-decoration: none;
    color: inherit;
    padding: 5px 10px;
    display: inline-block;
    transition: background-color 0.3s;
}

.top-nav a:hover {
    background-color: lightgray;
    border-radius: 5px;
}


/* Descendant Selector */
.post-bubble p:not(.light-blue) {
    margin-bottom: 5px;
}

.center {
    display: block;
    width: 90%;
    margin: auto;
    border-radius: 20px;

}

.post-header {
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.footer {
    background-color: grey;
    border-radius: 10px 10px 10px 10px;
    position: marker;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 1rem;
    text-align: center;
    height: 80px;
}

#user-pic {
    cursor: pointer;
}

#user-pic:hover + #user-dropdown-content, .dropdown-content:hover {
    display: block;
}

.btn {
    background-color: darkslategrey;
    padding: 10px 20px;
    border: none;
    color: rgb(255, 255, 255);
    cursor: pointer;
    display: block;
    margin: 20px auto;
    font-family: Bahnschrift;
}

.btn:hover {
    background-color: teal;
}

.input-fields input {
    margin-top: 10px;
    padding: 10px;
    width: 100%;
    box-sizing: border-box;
    font-weight: normal;
}

/* Descendant Selector */
.login-bubble p:not(.light-blue) {
    margin-bottom: 5px;
}

/* Child Selector */
.login-bubble > p:not(.light-blue) {
    margin-top: 5px;
}

/* Adjacent Sibling Selector */
.login-bubble div + p:not(.light-blue) {
    color: grey;
}

/* General Sibling Selector */
.login-bubble div ~ p.light-blue {
    text-decoration: underline;
}

.create-bubble {
    background-color: cadetblue;
    padding: 40px;
    border-radius: 20px;
    width: 400px;
    text-align: center;
}

/* Descendant Selector */
.create-bubble p:not(.light-blue) {
    margin-bottom: 5px;
}

/* Child Selector */
.create-bubble > p:not(.light-blue) {
    margin-top: 5px;
}

/* Adjacent Sibling Selector */
.create-bubble div + p:not(.light-blue) {
    color: grey;
}

/* General Sibling Selector */
.create-bubble div ~ p.light-blue {
    text-decoration: underline;}
</style>
}