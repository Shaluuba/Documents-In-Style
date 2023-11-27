<template>
    <div>Hello, world!</div>
    <div class="posts-container">
      <div v-for="post in posts" :key="post.postHeader.date" class="post">
        <!-- post content -->
      </div>
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
  };
  </script>
  
  <style scoped>
    /* styles */
  </style>
  