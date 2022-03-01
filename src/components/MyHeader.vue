<template>
  <v-app-bar
    app
    class="Header blue-grey darken-2"
  >
    <v-app-bar-nav-icon
      dark
      class="Header__navIcon"
      @click.stop="drawer = !drawer"
    />
    <v-navigation-drawer
      v-model="drawer"
      class="navDrawer Header__navDrawer"
      app
      dark
      temporary
      hide-overlay
    >
      <v-list
        class="menuList navDrawer__list"
        nav
        dark
      >
        <v-list-item-group
          v-model="group"
          class="menuGroupe menuList__itemGroup"
        >
          <MyHeaderHamburgerMenu
            v-for="link in links"
            :key="link.name"
            class="menuGroupe__hamburger"
            :name="link.name"
            :selector="link.selector"
          />
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-container
      class="HeaderMenu Header__container d-flex justify-space-around"
    >
      <MyHeaderButton
        v-for="link in links"
        :key="link.name"
        class="HeaderMenu__link"
        :name="link.name"
        :selector="link.selector"
      />
    </v-container>
  </v-app-bar>
</template>
<script>
import MyHeaderButton from "./MyHeaderButton";
import MyHeaderHamburgerMenu from "./MyHeaderHamburgerMenu";

export default {
  components: {
    MyHeaderButton,
    MyHeaderHamburgerMenu,
  },
  data() {
    return {
      drawer: false,
      group: null,
    };
  },
  computed:{
    links(){
      return [
        {
          name: "TOP",
          selector: "#first",
        },
        {
          name: "PROFILE",
          selector: "#second",
        },
        {
          name: "SKILLS",
          selector: "#third",
        },
        {
          name: "PRODUCTS",
          selector: "#fourth",
        },
        {
          name: "CONTACT",
          selector: "#fifth",
        },
      ]
    }
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>
<style lang="scss" scoped>
.Header__navIcon {
  display: none;
  @media screen and (max-width: 480px) {
    display: initial;
  }
}
.HeaderMenu__link {
  display: initial;
  @media screen and (max-width: 480px) {
    display: none;
  }
}
</style>
