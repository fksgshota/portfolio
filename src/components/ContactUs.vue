<template>
  <v-container class="contact_us">
    <h1 class="contact_us__title">Contact Us</h1>
    <v-form class="contact_us__form">
      <v-text-field
        class="contact_us__form__item"
        dark
        label="Name or Company"
        type="text"
        placeholder="namae"
      ></v-text-field>
      <v-text-field
        class="contact_us__form__item"
        dark
        label="email"
        type="email"
        placeholder="example@"
      ></v-text-field>
      <v-text-field class="contact_us__form__item" dark label="subject" type placeholder="youkenn"></v-text-field>
      <v-textarea class="contact_us__form__item" dark label="message"></v-textarea>
      <v-btn outlined dark type="submit">SEND</v-btn>
    </v-form>
  </v-container>
</template>

<script>
export default {
  data () {
    return {

    }
  },

}
</script>

<style lang="scss" scoped>
.contact_us {
  text-align: right;
  &__title {
    text-align: left;
    color: #ffffff;
    margin-bottom: 50px;
    left: -5px;
  }
}
</style>
