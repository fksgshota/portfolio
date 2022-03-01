<template>
  <v-card
    class="skillCard blue-grey darken-2"
    dark
  >
    <v-card-title class="cardTitle skillCard__title">
      <img
        :src="imgPath"
        alt="logo"
        class="cardTitle__logo"
      >
      {{ title }}
    </v-card-title>
    <v-rating
      class="skillCard__rating"
      half-increments
      readonly
      size="30"
      dense
      :value="star"
      color="#34e89e"
      background-color="#eeeeee"
    />
    <v-card-text class="skillCard__description">
      {{ description }}
    </v-card-text>
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
    imgPath: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.skillCard {
  width: 49%;
  margin: 16px 0;
  transition: background-color 0.5s;
  &:hover {
    background-color: #4d626b !important;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
  }
  &__rating {
    padding-left: 16px;
  }
}
.cardTitle {
  display: flex;
  align-items: center;
  &__logo {
    width: 30px;
    margin-right: 16px;
  }
}
</style>
