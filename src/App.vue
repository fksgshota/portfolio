<template>
  <v-app>
    <Header></Header>
    <div id="first" class="first_block">
      <h1 class="first_block__title">Shota Fukushige's portfolio</h1>
    </div>
    <div id="second" class="second_block">
      <SelfIntroduction></SelfIntroduction>
    </div>
    <div id="third" class="third_block">
      <SkillCardList></SkillCardList>
    </div>
    <div id="forth" class="forth_block">
      <ProductCardList></ProductCardList>
    </div>
    <div id="fifth" class="fifth_block">
      <ContactUs></ContactUs>
    </div>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';
import SelfIntroduction from './components/SelfIntroduction';
import SkillCardList from './components/SkillCardList';
import ProductCardList from './components/ProductCardList';
import ContactUs from './components/ContactUs';


export default {
  name: 'App',

  components: {
    Header,
    Footer,
    SelfIntroduction,
    SkillCardList,
    ProductCardList,
    ContactUs
  },
};
</script>

<style lang="scss" scoped>
.first_block {
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
.third_block {
  padding: 80px 0;
  background: linear-gradient(to top left, rgb(53, 233, 158), rgb(15, 52, 67));
}
.forth_block {
  padding: 80px 0;
}
</style>
