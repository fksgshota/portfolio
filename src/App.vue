<template>
  <v-app>
    <Header></Header>
    <div id="first" class="first_block">
      <v-container>
        <h1 class="first_block__title">Shota Fukushige's portfolio</h1>
      </v-container>
    </div>
    <div id="second" class="second_block blue-grey lighten-5">
      <SelfIntroduction></SelfIntroduction>
    </div>
    <div id="third" class="third_block blue-grey">
      <SkillCardList></SkillCardList>
    </div>
    <div id="forth" class="forth_block grey lighten-5">
      <ProductCardList></ProductCardList>
    </div>
    <div id="fifth" class="fifth_block blue-grey">
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
  background-image: linear-gradient(
      to top left,
      rgb(96, 125, 139, 0.6),
      rgb(96, 125, 139, 0.6)
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
    color: #ffffff;
    font-size: 90px;
    font-weight: normal;
    text-align: center;
    @media screen and (max-width: 768px) {
      font-size: 50px;
    }
  }
}
.second_block {
  padding: 80px 0;
}
.third_block {
  padding: 80px 0;
}
.forth_block {
  padding: 80px 0;
}
.fifth_block {
  padding: 80px 0;
}
</style>
