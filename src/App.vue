<template>
  <v-app>
    <Header></Header>
    <div class="first_view">
      <h1 class="first_view__title">Shota Fukushige's portfolio</h1>
    </div>
    <div class="second_block">
      <SelfIntroduction></SelfIntroduction>
    </div>
    <!-- <SkillCardList></SkillCardList>
    <ProductionCardList></ProductionCardList>-->
    <Footer></Footer>
  </v-app>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';
import SelfIntroduction from './components/SelfIntroduction';
// import ProductionCardList from './components/ProductionCardList';
// import SkillCardList from './components/SkillCardList';


export default {
  name: 'App',

  components: {
    Header,
    Footer,
    SelfIntroduction,
    // ProductionCardList,
    // SkillCardList
  },

  data: () => ({
    //
  })
};
</script>

<style lang="scss" scoped>
.first_view {
  background: linear-gradient(
      to top left,
      rgb(53, 233, 158, 0.6),
      rgb(15, 52, 67, 0.6)
    ),
    url("/shota_fukushige.jpg");
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

.second_block {
  background-color: #eeeeee;
  padding: 80px 0;
}
</style>
