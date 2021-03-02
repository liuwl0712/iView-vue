<template>
  <div>
    <Row class="header-row">
      <Col
        span="24"
        style="max-width:calc(100% - 230px);cursor: pointer;"
      >
      <Icon
        type="md-menu"
        size="20"
        :class="[{myClass:classShow}]"
        @click="classClick"
      />
      </Col>
      <Col
        span="24"
        style="max-width:230px;cursor: pointer;"
      >
      <Badge
        dot
        style="display: initial;"
      >
        <Icon
          type="ios-notifications-outline"
          size="20"
        ></Icon>
      </Badge>
      <Divider type="vertical" />
      <span>Gordon</span>
      <Avatar
        icon="ios-person"
        class="header-Avatar"
        size="40"
      />
      <span class="header-span">管理员</span>
      <Divider type="vertical" />
      <Tooltip
        content="退出"
        theme="light"
      >
        <Icon
          type="md-log-out"
          size="16"
          @click="outLogin"
        />
      </Tooltip>
      </Col>
    </Row>
  </div>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      classShow: false,
    };
  },
  methods: {
    outLogin() {
      this.$router.replace({
        path: "/login",
      });
    },
    classClick() {
      this.classShow = !this.classShow;
      this.$emit("fatherMethod");
      if (this.classShow) {
        this.$store.commit("avatarSizeChange", "70");
        document.getElementsByClassName("menu-log")[0].style.height = "120px";
        document.getElementsByClassName("my-menu")[0].style.height =
          "calc(100% - 120px)";
        document.getElementsByClassName("ivu-layout-sider")[0].style.width =
          "80px";
        document.getElementsByClassName("ivu-layout-sider")[0].style.minWidth =
          "80px";
        document.getElementsByClassName("ivu-layout-sider")[0].style.maxWidth =
          "80px";
      } else {
        this.$store.commit("avatarSizeChange", "100");
        document.getElementsByClassName("menu-log")[0].style.height = "180px";
        document.getElementsByClassName("my-menu")[0].style.height =
          "calc(100% - 180px)";
        document.getElementsByClassName("ivu-layout-sider")[0].style.width =
          "200px";
        document.getElementsByClassName("ivu-layout-sider")[0].style.minWidth =
          "200px";
        document.getElementsByClassName("ivu-layout-sider")[0].style.maxWidth =
          "200px";
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.myClass {
  transform: rotate(90deg);
}
</style>