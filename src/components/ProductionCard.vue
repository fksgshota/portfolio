<template>
  <v-card class="mx-auto" max-width="400">
    <v-img class="white--text align-end" height="200px" :src="url">
      <v-card-title>{{ title }}</v-card-title>
    </v-img>
    <v-card-text class="text--primary">
      <div>{{ description }}</div>
    </v-card-text>

    <v-card-actions>
      <v-btn color="orange" text>見にいく</v-btn>
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
</style>
