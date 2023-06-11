<script setup>
import AppField from "@/components/AppField";
import AppPopover from "@/components/ui/AppPopover";
import router from "@/router";
</script>

<template>
  <div class="header">
    <div class="logo">
      <span class="logo__text">Край Спорта</span>
    </div>
    <div class="menu">
      <button
        class="group inline-flex items-center rounded-md bg-black-700 px-3 py-2 text-2xl font-[350] font-sans text-white hover:text-[silver] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        @click="router.push('/news')"
      >
        Новости
      </button>
    </div>
  </div>
  <div class="content">
    <div class="hading">
      Открой для себя мир<br />
      вольной борьбы
    </div>
    <div class="hading-2">Начни заниматься уже завтра!</div>
    <button class="content__btn"><app-popover></app-popover></button>
  </div>
  <div class="footer">
    <div class="footer-left">
      <a
        href="https://instagram.com/wrestling_skif_anapa?igshid=MzNlNGNkZWQ4Mg=="
        class="footer-left__container"
      >
        <span class="footer-left__text">Подписывайтесь на нас в</span>
        <img class="footer-left__img" src="./assets/img/inst.png" />
      </a>
    </div>
    <div class="footer-right">
      <AppField @click="router.push('/news')">
        <template v-slot:number>01</template>
        <template v-slot:text
          >Выезд на ЮФО<br />
          в Белореченск</template
        >
      </AppField>
      <AppField>
        <template v-slot:number>02</template>
        <template v-slot:text
          >Выезд на ЮФО<br />
          в Белореченск</template
        >
      </AppField>
      <AppField>
        <template v-slot:number>03</template>
        <template v-slot:text
          >Выезд на ЮФО<br />
          в Белореченск</template
        >
      </AppField>
    </div>
  </div>
</template>

<style lang="scss">
@tailwind base;
@tailwind components;
@tailwind utilities;
@font-face {
  font-family: Roboto-Regular;
  src: url("assets/fonts/Roboto-Regular.ttf");
}
@font-face {
  font-family: Roboto-Bold;
  src: url("assets/fonts/Roboto-Bold.ttf");
}
@font-face {
  font-family: Roboto-Thin;
  src: url("assets/fonts/Roboto-Thin.ttf");
}
@font-face {
  font-family: Roboto-Light;
  src: url("assets/fonts/Roboto-Light.ttf");
}
@font-face {
  font-family: Bebas;
  src: url("assets/fonts/BebasNeue-Regular.ttf");
}

.header {
  margin-top: 30px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 75px;
}

.menu {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.logo {
  color: white;

  &__text {
    font-family: Roboto-Regular, serif;
    font-size: 26px;
    color: white;
  }
}

.content {
  margin-top: 100px;
  .hading {
    font-family: Roboto-Bold, serif;
    font-size: 60px;
    color: white;
  }
  .hading-2 {
    margin-top: 75px;
    font-family: Roboto-Light, serif;
    font-size: 30px;
    color: white;
  }
  &__btn {
    font-family: Roboto-Regular, serif;
    margin-top: 50px;
    padding: 20px 40px;
    border-radius: 35px;
    background-color: orange;
    font-size: 24px;
    cursor: pointer;
  }

  &__btn:hover {
    background-color: #ffb837;
    transition: 0.7ms;
  }
}

.footer {
  margin-top: 100px;
  display: flex;
  justify-content: space-between;
  height: 250px;
  &-left {
    display: flex;
    align-items: end;

    &__container {
      display: flex;
      align-items: center;
    }

    &__text {
      font-family: Roboto-Light, serif;
      font-size: 20px;
      color: white;
    }
    &__img {
      width: 130px;
      height: 40px;
      cursor: pointer;
    }
  }

  &-right {
    display: flex;
    gap: 30px;
    align-items: end;
  }
}
</style>
