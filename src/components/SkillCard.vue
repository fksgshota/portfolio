<template>
  <v-card class="skill-card">
    <v-card-title class="skill-card-title">
      <p>{{ title }}</p>
    </v-card-title>
    <star-rating increment="0.5" max-rating="5" read-only="true" star-size="50" :rating="star"></star-rating>
    <v-card-text class="skill-card-description">{{ description }}</v-card-text>
  </v-card>
</template>

<script>
import StarRating from 'vue-star-rating'

export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    star: {
      type: Number,
      required: true,
      default: 0,
    },
    description: {
      type: String,
      required: true,
    },
  },
  data () {
    return {

    }
  },
  components: {
    StarRating
  }
}
</script>

<style lang="scss" scoped>
</style>
