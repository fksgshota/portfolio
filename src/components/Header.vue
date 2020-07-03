<template>
  <v-app-bar fixed class="header blue-grey darken-2">
    <v-app-bar-nav-icon dark app class="header_nav_icon" @click="drawer = true"></v-app-bar-nav-icon>
    <v-container class="d-flex justify-space-around">
      <HeaderButton
        class="header_nav_link"
        v-for="link in links"
        :key="link.name"
        :name="link.name"
        :selector="link.selector"
      ></HeaderButton>
    </v-container>
  </v-app-bar>
</template>
<script>
import HeaderButton from './HeaderButton';

export default {
  data () {
    return {
      drawer: false,
      links: [
        {
          name: "TOP",
          selector: "#first",
        },
        {
          name: "Profile",
          selector: "#second",
        },
        {
          name: "Skills",
          selector: "#third",
        },
        {
          name: "Products",
          selector: "#fourth",
        },
        {
          name: "Contact",
          selector: "#fifth",
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
.header_nav_icon {
  display: none;
  @media screen and (max-width: 480px) {
    display: initial;
  }
}
.header_nav_link {
  display: initial;
  @media screen and (max-width: 480px) {
    display: none;
  }
}
</style>
