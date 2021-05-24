<template>
  <div>
    <Card>
      <Layout>
        <Sider
          hide-trigger
          class="com-sider-menu"
        >
          <div style="height:100%">
            <Menu
              active-name="operationalDatas"
              theme="primary"
              :width="menuWidth"
              accordion
              style="height:100%"
            >
              <template v-for="(item, componentIndex) in menu">
                <!-- 展开并且有子菜单 -->
                <Submenu
                  v-if="!isCollapsed && item.children.length"
                  v-bind:key="componentIndex"
                  :name="componentIndex"
                >
                  <template slot="title">
                    <Icon :type="item.icon" />
                    <span>{{ item.name }}</span>
                  </template>
                  <MenuItem
                    v-for="(children, index) in item.children"
                    :key="index"
                    :name="children.to"
                    :to="children.to"
                  >
                  {{ children.name }}
                  </MenuItem>
                </Submenu>

                <!-- 展开但没有子菜单 -->
                <MenuItem
                  v-else-if="!isCollapsed"
                  :name="item.to"
                  :to="item.to"
                  v-bind:key="componentIndex"
                >
                <Icon :type="item.icon" />
                <span>{{ item.name }}</span>
                </MenuItem>

                <!-- 不展开有子菜单 -->
                <Dropdown
                  v-else-if="isCollapsed && item.children.length"
                  v-bind:key="componentIndex"
                  placement="right-start"
                  class="menu-dropdown"
                >
                  <MenuItem :name="item.to">
                  <Icon :type="item.icon" />
                  </MenuItem>
                  <DropdownMenu slot="list">
                    <DropdownItem
                      v-for="(children, index) in item.children"
                      :key="index"
                      style="padding: 0 0;"
                    >
                      <MenuItem
                        :name="children.to"
                        :to="children.to"
                      >{{ children.name }}</MenuItem>
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>

                <!-- 不展开无子菜单 -->
                <Tooltip
                  v-else-if="isCollapsed"
                  :content="item.name"
                  placement="right"
                  v-bind:key="componentIndex"
                  theme="light"
                >
                  <MenuItem
                    :name="item.to"
                    :to="item.to"
                  >
                  <Icon :type="item.icon" />
                  </MenuItem>
                </Tooltip>
              </template>
            </Menu>
          </div>
        </Sider>
        <Layout>
          <Header style="margin-left: 30px;">
            <Icon
              :type="changeisCollapsedtype"
              style="color: #fff;"
              @click="changeisCollapsed"
              size="20"
            />
          </Header>
          <Content style="margin-left: 30px;margin-top:10px">
            <router-view></router-view>
          </Content>
        </Layout>
      </Layout>

    </Card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isCollapsed: false,
      menuWidth: "200px",
      changeisCollapsedtype: "ios-arrow-dropright",
      menu: [
        {
          name: "主页",
          to: "operationalDatas",
          icon: "md-apps",
          children: [],
        },
        {
          name: "菜单分类1",
          to: "user",
          icon: "ios-create-outline",
          children: [
            {
              name: "子菜单1",
              to: "staffManagements",
            },
            {
              name: "子菜单2",
              to: "menu",
            },
            {
              name: "子菜单3",
              to: "shared_report",
            },
          ],
        },
        {
          name: "菜单分类2",
          to: "user2",
          icon: "ios-archive-outline",
          children: [
            {
              name: "子菜单2-1",
              to: "firewall",
            },
            {
              name: "子菜单2-2",
              to: "navi_page",
            },
          ],
        },
      ],
    };
  },
  methods: {
    changeisCollapsed() {
      this.isCollapsed = !this.isCollapsed;
      if (!this.isCollapsed) {
        this.menuWidth = "200px";
        this.changeisCollapsedtype = "ios-arrow-dropleft";
      } else {
        this.menuWidth = "68px";
        this.changeisCollapsedtype = "ios-arrow-dropright";
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.com-sider-menu {
  width: auto !important;
  background: none;
  min-width: auto !important;
  max-width: none !important;
  flex: none !important;
}
.menu-com {
  width: 68px;
}
</style>