<template>
  <div class="field">
    <div class="num"><slot name="number"></slot></div>
    <div>
      <div class="text">
        <slot name="text"></slot>
        <img src="../assets/img/arrow.svg" />
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.field {
  background-image: url("../assets/img/test_background.jpg");
  background-repeat: no-repeat;
  width: 260px;
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px;
  border-radius: 15px;
  margin: auto;
  background-color: #000000;
  cursor: pointer;
}

.field:hover {
  box-shadow: inset 5px 5px 20px 2px #000;
  transition: 0.7ms;
}

.text {
  display: flex;
  justify-content: space-between;
  font-family: Roboto-Regular, serif;
  color: white;
  font-size: 18px;
}

.num {
  color: white;
  font-size: 24px;
}
</style>
