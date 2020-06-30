<template>
  <v-card class="product_card" max-width="400">
    <v-img class="product_card__img" height="200px" :src="img_path" :alt="title"></v-img>
    <v-card-title class="product_card__title">{{ title }}</v-card-title>
    <v-card-text class="product_card__description">{{ description }}</v-card-text>
    <v-card-actions>
      <v-btn
        class="product_card__link"
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
.product_card {
  &__img {
    box-shadow: 0 2px 2px -2px gray;
  }
}
</style>
