<template>
  <div>
    <div class="menu-log">
      <Avatar
        :src="require('../assets/img/log.png')"
        shape="square"
        icon="ios-person"
        size="100"
      />
      <h4>薪资管理系统</h4>
      <h5 style="color:#57a3f3">版本：V1.1.1</h5>
    </div>

    <Menu
      :active-name="menuName"
      class="my-menu"
      @on-select="toRouter"
    >
      <MenuItem name="operationalData">
      运营数据
      </MenuItem>
      <MenuItem name="staffManagement">
      员工管理
      </MenuItem>
      <MenuItem name="attendanceStatistics">
      出勤统计
      </MenuItem>
      <MenuItem name="salaryReport">
      工资报表
      </MenuItem>
      <MenuItem name="systemManagement">
      系统管理
      </MenuItem>
    </Menu>
  </div>
</template>
<script>
export default {
  name: "my-sider",
  data() {
    return {
      menuName: "operationalData",
    };
  },
  mounted() {
    this.menuName = this.$route.name;
  },
  methods: {
    toRouter(name) {
      this.$router.push(name);
    },
  },
};
</script>