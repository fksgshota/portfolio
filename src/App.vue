<template>
  <v-app class="app">
    <Header class="header"></Header>
    <div id="first" class="firstBlock">
      <v-container class="title firstBlock__container">
        <h1 class="title__text">Shota Fukushige's portfolio</h1>
      </v-container>
    </div>
    <div id="second" class="secondBlock blue-grey lighten-5">
      <SelfIntroduction
        class="secondBlock__selfIntroduction"
      ></SelfIntroduction>
    </div>
    <div id="third" class="thirdBlock blue-grey">
      <SkillCardList class="thirdBlock__skillCardList"></SkillCardList>
    </div>
    <div id="fourth" class="fourthBlock grey lighten-5">
      <ProductCardList class="fourthBlock__productCardList"></ProductCardList>
    </div>
    <div id="fifth" class="fifthBlock blue-grey">
      <ContactUs class="fifthBlock__contactUs"></ContactUs>
    </div>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import SelfIntroduction from "./components/SelfIntroduction";
import SkillCardList from "./components/SkillCardList";
import ProductCardList from "./components/ProductCardList";
import ContactUs from "./components/ContactUs";

export default {
  name: "App",

  components: {
    Header,
    Footer,
    SelfIntroduction,
    SkillCardList,
    ProductCardList,
    ContactUs,
  },
};
</script>

<style lang="scss" scoped>
.firstBlock {
  background-image: linear-gradient(
      to top left,
      rgb(96, 125, 139, 0.6),
      rgb(96, 125, 139, 0.6)
    ),
    url("/portfolio/shota_fukushige.jpeg");
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 1200px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1900px) {
    height: 1000px;
  }
  @media screen and (max-width: 1500px) {
    height: 800px;
  }
  @media screen and (max-width: 768px) {
    height: 600px;
  }
}
.title__text {
  color: #ffffff;
  font-size: 90px;
  margin-top: 120px;
  font-weight: normal;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 50px;
  }
}
.secondBlock {
  padding: 80px 0;
}
.thirdBlock {
  padding: 80px 0;
}
.fourthBlock {
  padding: 80px 0;
}
.fifthBlock {
  padding: 80px 0;
}
</style>
