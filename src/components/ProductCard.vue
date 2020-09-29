<template>
  <v-card class="ProductCard" max-width="400">
    <v-img class="ProductCard__img" height="200px" :src="img_path" :alt="title"></v-img>
    <v-card-title class="ProductCard__title">{{ title }}</v-card-title>
    <v-card-text class="ProductCard__description">{{ description }}</v-card-text>
    <v-card-actions class="cardActions ProductCard__actions">
      <v-btn
        class="cardActions__link"
        color="#34e89e"
        outlined
        block
        :href="url"
        target="_blank"
        rel="noopener noreferrer"
      >Show more</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    img_path: {
      type: String,
      required: true,
    },
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.ProductCard {
  &__img {
    box-shadow: 0 2px 2px -2px gray;
  }
}
</style>
