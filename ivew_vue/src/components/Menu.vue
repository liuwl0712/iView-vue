<template>
  <div>
    <div class="menu-log">
      <Avatar
        :src="require('../assets/img/log.png')"
        shape="square"
        icon="ios-person"
        :size="avatarSize"
      />
      <h4 v-if="!isCollapsed">薪资管理系统</h4>
      <h5
        v-if="!isCollapsed"
        style="color:#57a3f3"
      >版本：V1.1.1</h5>
    </div>
    <Sider
      ref="side1"
      hide-trigger
      collapsible
      :collapsed-width="80"
      v-model="isCollapsed"
      style="height:100%"
    >
      <Menu
        :active-name="menuName"
        class="my-menu"
        @on-select="toRouter"
        :class="menuitemClasses"
        width="auto"
      >
        <MenuItem name="operationalData">
        <Icon type="ios-podium" />
        <span>运营数据</span>
        </MenuItem>
        <MenuItem name="staffManagement">
        <Icon type="logo-buffer" />
        <span>员工管理</span>
        </MenuItem>
        <MenuItem name="attendanceStatistics">
        <Icon type="ios-navigate"></Icon>
        <span>出勤统计</span>
        </MenuItem>
        <MenuItem name="salaryReport">
        <Icon type="ios-book" />
        <span>工资报表</span>
        </MenuItem>
        <MenuItem name="systemManagement">
        <Icon type="ios-cog" />
        <span>系统管理</span>
        </MenuItem>
        <MenuItem name="componentRealization">
        <Icon type="ios-cog" />
        <span>组件实现</span>
        </MenuItem>
      </Menu>
    </Sider>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "my-sider",
  data() {
    return {
      menuName: "operationalData",
      isCollapsed: false,
    };
  },
  computed: {
    ...mapState(["avatarSize"]),
    menuitemClasses() {
      return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
    },
  },
  mounted() {
    this.menuName = this.$route.name;
  },
  watch: {
    $route: function (to) {
      this.menuName = to.name;
    },
  },
  methods: {
    toRouter(name) {
      this.$router.push(name);
    },
    collapsedSider() {
      this.$refs.side1.toggleCollapse();
    },
  },
};
</script>
<style scoped>
.menu-item span {
  display: inline-block;
  overflow: hidden;
  width: 69px;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: bottom;
  transition: width 0.2s ease 0.2s;
}
.menu-item i {
  transform: translateX(0px);
  transition: font-size 0.2s ease, transform 0.2s ease;
  vertical-align: middle;
  font-size: 16px;
}
.collapsed-menu span {
  width: 0px;
  transition: width 0.2s ease;
}
.collapsed-menu i {
  transform: translateX(5px);
  transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
  vertical-align: middle;
  font-size: 22px;
}
</style>