<template>
  <div class="field">
    <div class="container"><slot name="picture" class="picture"></slot></div>
    <div>
      <div class="text">
        <slot name="text"></slot>
      </div>
    </div>
    <div class="line"></div>
  </div>
</template>

<script setup></script>

<style scoped>
.field {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.text {
  margin-top: 25px;
  font-family: Roboto-Light, serif;
  font-size: 25px;
  color: white;
}

.container {
  margin-top: 30px;
  width: 600px;
}

.line {
  margin-top: 30px;
  background-color: #464646;
  width: calc(100% + 300px);
  height: 1px;
}
</style>
