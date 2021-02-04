<template>
  <div class="app-div">
    <Layout style="height: 100%;">
      <Sider hide-trigger style="background: #fff;">
        <my-sider
          class="home-sider"
          ref="sider"
        ></my-sider>
      </Sider>
      <Layout class="home-layout">
        <Header class="home-header">
          <my-header @fatherMethod="getFatherMethod"></my-header>
        </Header>
        <Content class="home-content">
          <my-content></my-content>
        </Content>
      </Layout>
    </Layout>
    <Modal
      v-model="modalShow"
      :closable="false"
      :mask-closable="false"
      :footer-hide="true"
      class-name="vertical-center-modal animate__animated animate__swing"
    >
      <Icon
        type="md-warning"
        size="30"
        color="#f90"
      />
      <strong style="font-size: 18px;margin-left:10px">您好:</strong>
      <li style="padding: 0px 10px;">
        <span style="color: #f90;">恭喜你使用我的作品，产品原型图设计作者为：“PM Gordon”，技术设计作者为：“刘威龙”，用于使用请标注作者！</span>
      </li>
      <div style="text-align: right;margin-top: 15px;">
        <Button
          type="primary"
          @click="modalShowChange"
        >我知道了
          <Icon type="ios-thumbs-up-outline" />
        </Button>
      </div>
    </Modal>
  </div>
</template>
<script>
import Menu from "../components/Menu";
import Header from "../components/Header";
import Content from "../components/Content";
export default {
  name: "Home",
  components: {
    "my-sider": Menu,
    "my-header": Header,
    "my-content": Content,
  },
  data() {
    return {
      modalShow: false,
    };
  },
  mounted() {
    this.modalShow = JSON.parse(sessionStorage.getItem("modalShow"));
  },
  methods: {
    modalShowChange() {
      this.modalShow = false;
      sessionStorage.setItem("modalShow", false);
    },
    getFatherMethod() {
      this.$refs.sider.collapsedSider();
      console.log(1);
    },
  },
};
</script>
