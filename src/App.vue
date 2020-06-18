<template>
  <v-app>
    <v-app-bar class="header"></v-app-bar>
    <div class="first_view">
      <h1 class="first_view__title">Shota Fukushige's portfolio</h1>
    </div>
    <!-- <v-container>
      <div class>
        <h2>福重 章太</h2>
        <p>Fukushige Shota</p>
        <img src="" alt="">
        <p>年齢</p>
        <p>職種</p>

        <p>職歴</p>
      </div>
    </v-container>
    <SkillCardList></SkillCardList>
    <p>製作物</p>
    <p>お問い合わせ</p>-->
    <v-footer class="footer" absolute="true">
      <small class="copyright">&copy; 2020 Shota Fukushige</small>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),
};
</script>

<style lang="scss" scoped>
.first_view {
  background-image: url("../public/shota_fukushige.jpg");
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;

  &__title {
    color: #18ffff;
    font-size: 90px;
    text-shadow: 1px 2px 3px grey;
  }
}

.footer {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
