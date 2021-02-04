<template>
  <div
    class="app-div"
    :style="login"
  >
    <!--enter-active-class="animated tada"，进入生效动画直接使用animated中的tada样式-->
    <!-- leave-active-class="animated bounceOutRight" ，离开生效动画直接使用animated中的bounceOutRight样式-->
    <!--:duration="{enter:1000,leave:500}",表示持续时间，进来花费1000毫秒，出去花费500毫秒-->
    <!-- <transition enter-active-class="animate__animated animate__bounceInDown"> -->
    <div class="login-div animate__animated animate__bounceInDown">
      <Card
        :bordered="false"
        class="login-card"
      >
        <Avatar
          src="https://i.loli.net/2017/08/21/599a521472424.jpg"
          size="60"
        />
        <h1 class="login-card-title">员工薪资管理系统</h1>
        <h6>By PM Gordon</h6>
        <Form
          ref="formInline"
          :model="formInline"
          :rules="ruleInline"
          class="login-card-form"
        >
          <FormItem prop="user">
            <Input
              prefix="ios-contact"
              v-model="formInline.user"
              placeholder="Username"
            />
          </FormItem>
          <FormItem prop="password">
            <Input
              type="password"
              prefix="ios-lock-outline"
              v-model="formInline.password"
              placeholder="Password"
              password
            />
          </FormItem>
        </Form>
        <div class="login-card-btn">
          <Button
            type="primary"
            long
            @click="loginSubmit('formInline')"
          >登录</Button>
        </div>
        <div class="login-card-span">
          <span>忘记密码？</span>
        </div>
      </Card>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      login: {
        backgroundImage: "url(" + require("@/assets/img/background.jpg") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100%",
      },
      formInline: {
        user: "",
        password: "",
      },
      ruleInline: {
        user: [
          {
            required: true,
            message: "Please fill in the user name",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "Please fill in the password.",
            trigger: "blur",
          },
        ],
      },
    };
  },
  mounted() {
    sessionStorage.setItem("token", "");
  },
  methods: {
    loginSubmit(formInline) {
      this.$refs[formInline].validate((valid) => {
        if (valid) {
          // 模拟登录，应该使用接口，但是在这里就不使用了
          if (
            this.formInline.user == "test" &&
            this.formInline.password == "test123"
          ) {
            this.$Loading.start();
            setTimeout(() => {
              this.$Loading.finish();
              sessionStorage.setItem(
                "token",
                JSON.stringify(this.formInline.user + this.formInline.password)
              );
              sessionStorage.setItem("modalShow", true);
              this.$router.push({
                path: "/home",
              });
              this.$Message.success(
                "登录成功，欢迎：" + this.formInline.user + "！"
              );
            }, 1000);
          } else {
            this.$Loading.start();
            setTimeout(() => {
              this.$Loading.error();
              this.$Message.error("用户密码错误");
            }, 1000);
          }
        } else {
          return false;
        }
      });
    },
  },
};
</script>