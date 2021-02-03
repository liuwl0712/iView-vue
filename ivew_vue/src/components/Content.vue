<template>
  <div>
    <transition enter-active-class="animate__animated animate__fadeIn">
      <router-view
        class="content-content"
        v-show="show"
      ></router-view>
    </transition>
    <div class="content-footer">
      Prototype diagram PM Gordon
      <Icon type="ios-help-circle-outline" /> project code liuwl
      <br>
      {{time}}
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      time: new Date(),
      show: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.show = true;
    });
  },
};
</script>