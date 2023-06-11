<script setup></script>

<template>
  <router-view></router-view>
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
* {
  margin: 0;
  border: none;
  border-radius: 0;
}

body {
  padding: 0 75px 0 75px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-image: url("assets/img/background.jpg");
}
</style>
