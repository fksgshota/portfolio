<template>
  <v-app class="App">
    <MyHeader class="header" />
    <div
      id="first"
      class="firstBlock"
    >
      <v-container class="siteTitle firstBlock__container">
        <h1 class="siteTitle__text">
          Shota Fukushige's portfolio
        </h1>
      </v-container>
    </div>
    <div
      id="second"
      class="secondBlock blue-grey lighten-5"
    >
      <MySelfIntroduction
        class="secondBlock__selfIntroduction"
      />
    </div>
    <div
      id="third"
      class="thirdBlock blue-grey"
    >
      <MySkillCardList class="thirdBlock__skillCardList" />
    </div>
    <div
      id="fourth"
      class="fourthBlock grey lighten-5"
    >
      <MyProductCardList class="fourthBlock__productCardList" />
    </div>
    <div
      id="fifth"
      class="fifthBlock blue-grey"
    >
      <MyContactUs class="fifthBlock__contactUs" />
    </div>
    <MyFooter />
  </v-app>
</template>

<script>
import MyHeader from "./components/MyHeader";
import MyFooter from "./components/MyFooter";
import MySelfIntroduction from "./components/MySelfIntroduction";
import MySkillCardList from "./components/MySkillCardList";
import MyProductCardList from "./components/MyProductCardList";
import MyContactUs from "./components/MyContactUs";

export default {
  name: "App",

  components: {
    MyHeader,
    MyFooter,
    MySelfIntroduction,
    MySkillCardList,
    MyProductCardList,
    MyContactUs,
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
    url("../public/shota_fukushige.jpeg");
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
.siteTitle__text {
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
