<template>
  <div>
    <Card shadow>
      <Row
        slot="title"
        class="content-row"
      >
        <Col span="12">
        <span class="content-BreadcrumbCopy">出勤统计 / <span class="content-BreadcrumbCopy-span">{{attendanceEdit}}</span></span>
        </Col>
      </Row>
      <Row>
        <span class="shadow-span">基本信息</span>
        <Col
          span="24"
          class="col-form"
        >
        <Form
          :model="formInline"
          inline
          :label-width="100"
        >
          <FormItem
            prop="employeeSName"
            label="员工姓名:"
          >
            <Input
              v-model="formInline.employeeSName"
              disabled
              type="text"
              placeholder="员工姓名"
              clearable
            >
            </Input>
          </FormItem>
          <FormItem
            prop="staffDepartment"
            label="员工部门:"
          >
            <Input
              v-model="formInline.staffDepartment"
              disabled
              type="text"
              placeholder="员工部门"
              clearable
            >
            </Input>
          </FormItem>
        </Form>
        </Col>
      </Row>
      <Row style="margin-top:20px">
        <span class="shadow-span">出勤信息</span>
        <Col
          span="24"
          class="col-form"
        >
        <Form
          :model="formInline"
          inline
          :label-width="100"
        >
          <FormItem
            prop="daysOff"
            label="请假天数:"
          >
            <InputNumber
              v-model="formInline.daysOff"
              controls-outside
            ></InputNumber>
          </FormItem>
          <FormItem
            prop="daysNotClockedIn"
            label="未打卡天数:"
          >
            <InputNumber
              v-model="formInline.daysNotClockedIn"
              controls-outside
            ></InputNumber>
          </FormItem>
          <FormItem
            prop="overtimeDays"
            label="加班天数:"
          >
            <InputNumber
              v-model="formInline.overtimeDays"
              controls-outside
            ></InputNumber>
          </FormItem>
          <FormItem
            prop="daysOfUnwrittenLog"
            label="未写日志天数:"
          >
            <InputNumber
              v-model="formInline.daysOfUnwrittenLog"
              controls-outside
            ></InputNumber>
          </FormItem>
          <FormItem
            prop="numberOfLate"
            label="迟到次数:"
          >
            <InputNumber
              v-model="formInline.numberOfLate"
              controls-outside
            ></InputNumber><br>
            <span class="title-span">1-10分钟(含10分钟)</span><br>
            <InputNumber
              v-model="formInline.numberOfLate"
              controls-outside
            ></InputNumber><br>
            <span class="title-span">10-30分钟(含30分钟)</span><br>
          </FormItem>
          <FormItem
            prop="leaveEarly"
            label="早退次数:"
          >
            <InputNumber
              v-model="formInline.leaveEarly"
              controls-outside
            ></InputNumber>
            <br>
            <span class="title-span">1-10分钟(含10分钟)</span><br>
            <InputNumber
              v-model="formInline.leaveEarly"
              controls-outside
            ></InputNumber><br>
            <span class="title-span">10-30分钟(含30分钟)</span><br>
          </FormItem>
        </Form>
        </Col>
      </Row>
      <div class="attendance-edit-divbtn">
        <Button type="warning">保存数据</Button>
        <Button
          @click="backTo"
          type="warning"
          ghost
        >返回</Button>
      </div>
    </Card>
  </div>
</template>
<script>
export default {
  name: "AttendanceEdit",
  props: ["attendanceEdit"],
  data() {
    return {
      formInline: {
        employeeSName: "刘威龙",
        staffDepartment: "技术部",
        daysOff: 1,
        daysNotClockedIn: 2,
        overtimeDays: 3,
        daysOfUnwrittenLog: 4,
        numberOfLate: 5,
        leaveEarly: 6,
      },
    };
  },
  mounted() {},
  methods: {
    backTo() {
      this.$parent.editAttendance();
    },
  },
};
</script>
<style lang="scss" scoped>
.shadow-span {
  padding: 0px 5px;
  border-bottom: 4px solid #3d3d3d;
  text-shadow: -1px 14px 12px #000;
  font-weight: 600;
}
.col-form {
  margin-top: 30px;
}
.ivu-form-item {
  width: calc(25% - 10px);
}
.attendance-edit-divbtn {
  margin: 50px 0px;
  Button {
    margin-left: 20px;
    width: 80px;
  }
}
.title-span {
  font-size: 12px;
  color: #999;
}
</style>