<template>
  <v-app-bar class="header" color="#eeeeee">
    <HeaderButton v-for="link in links" :key="link.name" :name="link.name" :id="link.id"></HeaderButton>
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
