<template>
  <div>
    <router-view class="content-content animate__animated animate__fadeIn"></router-view>
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
    };
  },
};
</script>
