<template>
  <div>
    <Row class="header-row">
      <Col
        span="24"
        style="max-width:calc(100% - 230px)"
      >
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
        src="https://i.loli.net/2017/08/21/599a521472424.jpg"
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
  methods: {
    outLogin() {
      this.$router.replace({
        path: "/login",
      });
    },
  },
};
</script>