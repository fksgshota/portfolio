<template>
  <v-app-bar class="header blue-grey darken-2">
    <v-container class="d-flex justify-space-around">
      <HeaderButton v-for="link in links" :key="link.name" :name="link.name" :id="link.id"></HeaderButton>
    </v-container>
  </v-app-bar>
</template>
<script>
import HeaderButton from './HeaderButton';

export default {
  data () {
    return {
      links: [
        {
          name: "TOP",
          id: "first",
        },
        {
          name: "Profile",
          id: "second",
        },
        {
          name: "Skills",
          id: "third",
        },
        {
          name: "Products",
          id: "first",
        },
        {
          name: "Contact",
          id: "first",
        },
      ]
    }
  },
  components: {
    HeaderButton
  }
}
</script>
<style lang="scss" scoped>
</style>
