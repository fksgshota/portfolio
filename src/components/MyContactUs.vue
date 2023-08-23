<template>
  <v-container class="ContactUs">
    <h1 class="ContactUs__title">
      Contact Us
    </h1>
    <v-form
      v-if="showForm"
      ref="ContactUs_form"
      class="contactForm ContactUs__form"
      @submit.prevent="submit"
    >
      <v-text-field
        v-model="name"
        class="contactForm__item"
        dark
        :rules="nameRules"
        label="Name or Company"
        type="text"
        placeholder="name"
      />
      <v-text-field
        v-model="email"
        class="contactForm__item"
        dark
        :rules="emailRules"
        label="email"
        type="email"
        placeholder="example@email.jp"
      />
      <v-text-field
        v-model="subject"
        class="contactForm__item"
        dark
        :rules="subjectRules"
        label="subject"
        type
        placeholder="title"
      />
      <v-textarea
        v-model="message"
        class="contactForm__item"
        dark
        :rules="messageRules"
        label="message"
      />
      <v-btn
        outlined
        dark
        type="submit"
      >
        SEND
      </v-btn>
    </v-form>
    <div
      v-else
      class="message ContactUs__success"
    >
      <p class="message__thanks">
        お問い合わせありがとうございます！
        <br>確認後に返信させていただきます
      </p>
      <v-btn
        class="message__reload"
        outlined
        dark
        href="/"
      >
        送信画面を表示する
      </v-btn>
    </div>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      valid: true,
      // フォームの表示
      showForm: true,
      // お名前
      name: "",
      nameRules: [(v) => !!v || "Name is required"],
      // メールアドレス
      email: "",
      emailRules: [
        (v) => !!v || "Email is required",
        (v) => /.+@.+/.test(v) || "E-mail must be valid",
      ],
      // 件名
      subject: "",
      subjectRules: [(v) => !!v || "Subject is required"],
      // お問い合わせ内容
      message: "",
      messageRules: [(v) => !!v || "Message is required"],
    };
  },
  methods: {
    submit: function () {
      if (this.$refs.ContactUs_form.validate()) {
        const submitParams = new FormData();
        // お名前のname属性値
        submitParams.append("entry.2005620554", this.name);
        // メールアドレスのname属性値
        submitParams.append("entry.1045781291", this.email);
        // 件名のname属性値
        submitParams.append("entry.1166974658", this.subject);
        // ご依頼内容のname属性値
        submitParams.append("entry.839337160", this.message);

        // CORSエラー対策
        const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
        // Googleフォームのaction属性値
        const GOOGLE_FORM_ACTION =
          "https://docs.google.com/forms/u/2/d/e/1FAIpQLSfz2jqqXhiEIZXbkCHjA0IlnD5WFNRCdIEKcMhvGnAKSRjGwQ/formResponse";

        // Ajax POST通信
        // eslint-disable-next-line no-unused-vars
        axios
          .post(CORS_PROXY + GOOGLE_FORM_ACTION, submitParams)
          .then(() => {
            // フォーム非表示
            this.showForm = false;
          });
        // フォーム非表示
        this.showForm = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.ContactUs {
  text-align: right;
  &__title {
    text-align: left;
    color: #ffffff;
    margin-bottom: 50px;
    left: -5px;
  }
}
.message {
  text-align: center;
  color: #ffffff;
}
</style>
