<template>
  <v-card class="skill_card blue-grey darken-2" dark>
    <v-card-title class="skill_card__title">
      <img :src="img_path" alt="logo" class="skill_card__logo" />
      {{ title }}
    </v-card-title>
    <v-rating
      class="skill_card__rating"
      half-increments
      readonly
      size="30"
      dense
      :value="star"
      color="#34e89e"
      background-color="#eeeeee"
    ></v-rating>
    <v-card-text class="skill_card__description">{{ description }}</v-card-text>
  </v-card>
</template>

<script>
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
    img_path: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.skill_card {
  width: 49%;
  margin: 16px 0;
  @media screen and (max-width: 479px) {
    width: 100%;
  }
  &__title {
    display: flex;
    align-items: center;
  }
  &__logo {
    width: 30px;
    margin-right: 16px;
  }
  &__rating {
    padding-left: 16px;
  }
}
</style>
