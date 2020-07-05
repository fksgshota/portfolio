<template>
  <v-container class="self_introduction">
    <v-card class="my_info">
      <div class="my_info__top">
        <div class="block">
          <img src="/shota_fukushige_icon.jpg" class="my_info__img" />
        </div>
        <div class="my_info__overview">
          <v-card-title class="my_info__ja_name">福重 章太</v-card-title>
          <v-card-subtitle class="my_info__en_name">Fukushige Shota</v-card-subtitle>
          <p class="my_info__age">{{ageDisp}}</p>
          <a
            class="my_info__company"
            href="https://unimal.jp/"
            target="_blank"
            rel="noopener noreferrer"
          >株式会社unimal</a>
          <p class="my_info__work">フルスタックエンジニア見習い</p>
          <p class="my_info__blog">
            ブログ：
            <a
              class="my_info__blog__link"
              href="https://fksgshota.hatenablog.com/"
              target="_blank"
              rel="noopener noreferrer"
            >笑う門には福重なる</a>
          </p>
          <SNSList></SNSList>
        </div>
      </div>

      <v-card-text class="my_info__history">
        2012年に京セラ株式会社に入社。製造オペレーターとしての作業を行いながら、合間を縫ってパソコンスキルを活かした業務改善に取り組む。作業時間改善の累計は2790時間/月以上に及ぶ。元々パソコンに触れるのが好きでゲームや動画編集、パソコン本体の作成などを学生の頃から行う。業務改善を目的としたExcelVBAを学んだのをキッカケにプログラミングにハマり、自分のスキルとして身につけて仕事にしたいと強く思うようになる。
        2019年9月末にて同社を退職。2019年10月より株式会社ユニマルにエンジニア見習いとして転職し、勉強に勤しむ毎日。
        <br />
        <br />趣味：ギター、歌、ゲーム、プログラミング、パソコン、ガジェット
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import SNSList from './SNSList';

export default {
  methods: {
    ageCalc: function (year, month, day) {
      const birthY = year.toString()
      const birthM = month.toString()
      const birthD = day.toString()
      const today = new Date()
      const birthFull = parseFloat(`${birthY}${birthM.padStart(2, '0')}${birthD.padStart(2, '0')}`)
      const todayFull = parseFloat(`${today.getFullYear()}${(today.getMonth() + 1).toString().padStart(2, '0')}${today.getDay().toString().padStart(2, '0')}`)

      return Math.floor((todayFull - birthFull) / 10000)
    }
  },
  computed: {
    ageDisp: function () {
      const birthY = 1993
      const birthM = 8
      const birthD = 18
      const age = this.ageCalc(birthY, birthM, birthD)

      return `${age}歳`
    }
  },
  components: {
    SNSList
  },
}
</script>

<style lang="scss" scoped>
.my_info {
  display: flex;
  flex-direction: column;
  &__top {
    display: flex;
    @media screen and (max-width: 480px) {
      flex-wrap: wrap;
    }
  }
  .block {
    display: block;
  }
  &__img {
    margin: 16px 0 0 16px;
    width: 250px;
    height: auto;
    @media screen and (max-width: 480px) {
      width: 100%;
      margin: initial;
      padding: 16px;
    }
  }
  &__overview {
    width: auto;
  }
  &__age {
    padding-left: 16px;
    margin-bottom: 0;
  }
  &__company {
    padding-left: 16px;
    margin-bottom: 0;
    color: rgba(0, 0, 0, 0.87);
  }
  &__work {
    padding-left: 16px;
    margin-bottom: 0;
  }
  &__blog {
    padding: 0 0 16px 16px;
    &__link {
      color: rgba(0, 0, 0, 0.87);
    }
  }
}
</style>
