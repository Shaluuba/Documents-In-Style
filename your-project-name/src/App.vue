<template>
  <div id="app">
    <post-component></post-component>
  </div>
</template>

<script>
import PostComponent from './components/PostComponent.vue';

export default {
  name: 'App',
  components: {
    PostComponent
  }
};
</script>
