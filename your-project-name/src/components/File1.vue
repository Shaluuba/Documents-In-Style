<template>
  <div v-for="post in posts" :key="post.id">
    <!-- Your post structure here -->
    <div>{{ post.content }}</div>
    <button @click="likePost(post.id)">Like</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState(['posts'])
  },
  methods: {
    ...mapActions(['fetchPosts'])
  },
  mounted() {
    this.fetchPosts();
  }
};
</script>
