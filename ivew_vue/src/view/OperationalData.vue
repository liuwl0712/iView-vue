<template>
  <div>
    <Card shadow>
      <Row class="operational-row1">
        <Col span="12">
        <span class="content-Breadcrumb">考勤数据统计</span><br>
        <span style="margin-left:17px;color: #57a3f3;">上月考勤情况</span>
        </Col>
      </Row>
      <Row class="operational-row2">
        <Col
          span="4"
          v-for="item in dataCol"
          :key="item.id"
          :style="item.style"
          class="animate__animated animate__bounceIn"
        >
        <h4>{{item.title}}</h4>
        <h2>{{item.num}} 人</h2>
        </Col>
      </Row>
    </Card>
    <Card
      shadow
      style="margin-top:10px"
    >
      <Row class="operational-row1">
        <Col span="12">
        <span class="content-Breadcrumb">年度迟到情况</span><br>
        <span style="margin-left:17px;color: #57a3f3;">数据统计示例</span>
        </Col>
        <Col
          span="12"
          style="text-align: right;"
        >
        <RadioGroup
          v-model="RadioGroup"
          type="button"
        >
          <Radio label="1">今年</Radio>
          <Radio label="2">去年</Radio>
          <Radio label="3">近7日</Radio>
        </RadioGroup>
        <DatePicker
          type="daterange"
          split-panels
          placeholder="开始时间 ~ 结束时间"
          style="width: 200px;margin-left:15px"
          v-model="DatePicker"
        ></DatePicker><br>
        <Button
          icon="ios-download-outline"
          type="info"
          style="margin-top:20px"
        >导出数据</Button>
        </Col>
      </Row>
      <Row>
        <Col
          span="24"
          id="myChart"
        >
        </Col>
      </Row>
    </Card>
  </div>
</template>
<script>
export default {
  name: "OperationalData",
  data() {
    return {
      dataCol: [
        {
          id: "1",
          title: "迟到人数",
          num: "12",
          style: {
            backgroundImage: "url(" + require("@/assets/img/1.png") + ")",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "100%",
          },
        },
        {
          id: "2",
          title: "早退人数",
          num: "9",
          style: {
            backgroundImage: "url(" + require("@/assets/img/2.png") + ")",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "100%",
          },
        },
        {
          id: "3",
          title: "旷工人数",
          num: "7",
          style: {
            backgroundImage: "url(" + require("@/assets/img/3.png") + ")",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "100%",
          },
        },
        {
          id: "4",
          title: "未写日志人数",
          num: "2",
          style: {
            backgroundImage: "url(" + require("@/assets/img/4.png") + ")",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "100%",
          },
        },
        {
          id: "5",
          title: "未打卡人数",
          num: "1",
          style: {
            backgroundImage: "url(" + require("@/assets/img/5.png") + ")",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "100%",
          },
        },
      ],
      RadioGroup: "1",
      DatePicker: "",
    };
  },
  mounted() {
    setTimeout(() => {
      this.columnarEcharts();
    }, 100);
  },
  methods: {
    columnarEcharts() {
      let columnarChart = this.$echarts.init(
        document.getElementById("myChart"),
        "light",
        { renderer: "svg" }
      );
      let option = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c}",
        },
        legend: {
          bottom: 0,
          data: ["男", "女"],
        },
        xAxis: {
          type: "category",
          data: [
            "1月",
            "2月",
            "3月",
            "4月",
            "5月",
            "6月",
            "7月",
            "8月",
            "9月",
            "10月",
            "11月",
            "12月",
          ],
        },
        yAxis: {
          type: "value",
          name: "单位(次)",
        },
        series: [
          {
            name: "男",
            data: [120, 200, 150, 80, 70, 110, 130, 120, 200, 150, 80, 70],
            type: "bar",
            legendHoverLink: true, // 是否启用图列 hover 时的联动高亮
            itemStyle: {
              // 图形的形状
              color: "#f92",
              barBorderRadius: [18, 18, 0, 0],
            },
            barWidth: 12, // 柱形的宽度
          },
          {
            name: "女",
            data: [120, 200, 150, 80, 70, 110, 130, 120, 200, 150, 80, 70],
            type: "bar",
            legendHoverLink: true, // 是否启用图列 hover 时的联动高亮
            itemStyle: {
              // 图形的形状
              color: "#b24fef",
              barBorderRadius: [18, 18, 0, 0],
            },
            barWidth: 12, // 柱形的宽度
          },
        ],
      };
      columnarChart.setOption(option);
      columnarChart.resize({
        width: document.getElementById("myChart").clientWidth,
      });
      window.onresize = function () {
        if (document.getElementById("myChart") != null) {
          columnarChart.resize({
            width: document.getElementById("myChart").clientWidth,
          });
        }
      };
    },
  },
};
</script>
<style lang="scss" scoped>
.operational-row1 {
  height: auto;
  line-height: 30px;
}
.operational-row2 {
  height: 150px;
  padding: 10px 20px 30px;
  .ivu-col-span-4 {
    max-width: calc(20% - 20px);
    min-width: calc(20% - 20px);
    margin-right: 20px;
    border-radius: 10px;
    h4 {
      margin-top: 20px;
      padding: 0px 20px;
      color: #fff;
    }
    h2 {
      margin-top: 10px;
      padding: 0px 20px;
      color: #fff;
    }
  }
}
#myChart {
  height: 350px;
}
</style>