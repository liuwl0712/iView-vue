<template>
  <div>
    <Card shadow>
      <Row
        slot="title"
        class="content-row"
      >
        <Col span="12">
        <span class="content-BreadcrumbCopy">工资报表 / <span class="content-BreadcrumbCopy-span">{{salaryEdit}}</span></span>
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
            prop="basicSalary"
            label="基本薪资:"
          >
            <InputNumber
              v-model="formInline.basicSalary"
              controls-outside
            ></InputNumber>
          </FormItem>
          <FormItem
            prop="perfectAttendanceAward"
            label="全勤奖:"
          >
            <InputNumber
              v-model="formInline.perfectAttendanceAward"
              controls-outside
            ></InputNumber>
          </FormItem>
          <FormItem
            prop="deductionsForViolations"
            label="违规扣款:"
          >
            <InputNumber
              v-model="formInline.deductionsForViolations"
              controls-outside
            ></InputNumber>
          </FormItem>
          <FormItem
            prop="daysOfAttendance"
            label="应出勤天数:"
          >
            <InputNumber
              v-model="formInline.daysOfAttendance"
              controls-outside
            ></InputNumber>
          </FormItem>
          <FormItem
            prop="payable"
            label="应发薪资:"
          >
            <InputNumber
              v-model="formInline.payable"
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
            prop="jobSalary"
            label="岗位薪资:"
          >
            <InputNumber
              v-model="formInline.jobSalary"
              controls-outside
            ></InputNumber>
          </FormItem>
          <FormItem
            prop="actualAttendanceDays"
            label="实际出勤天数:"
          >
            <InputNumber
              v-model="formInline.actualAttendanceDays"
              controls-outside
            ></InputNumber>
          </FormItem>
          <FormItem
            prop="performancePay"
            label="绩效薪资:"
          >
            <InputNumber
              v-model="formInline.performancePay"
              controls-outside
            ></InputNumber>
          </FormItem>
          <FormItem
            prop="overtime"
            label="加班费:"
          >
            <InputNumber
              v-model="formInline.overtime"
              controls-outside
            ></InputNumber>
          </FormItem>
          <FormItem
            prop="socialSecurityDeductions"
            label="社保扣款:"
          >
            <InputNumber
              v-model="formInline.socialSecurityDeductions"
              controls-outside
            ></InputNumber>
          </FormItem>
          <FormItem
            prop="actualSalary"
            label="实发薪资:"
          >
            <InputNumber
              v-model="formInline.actualSalary"
              controls-outside
            ></InputNumber>
          </FormItem>
          <FormItem
            prop="other"
            label="其他:"
          >
            <InputNumber
              v-model="formInline.other"
              controls-outside
            ></InputNumber>
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
  name: "SalaryEdit",
  props: ["salaryEdit"],
  data() {
    return {
      formInline: {
        employeeSName: "刘威龙",
        staffDepartment: "技术部",
        daysOff: 1,
        basicSalary: 8000,
        perfectAttendanceAward: 200,
        deductionsForViolations: 100,
        daysOfAttendance: 27,
        payable: 8100,
        overtimeDays: 6,
        jobSalary: 4000,
        actualAttendanceDays: 26,
        performancePay: 600,
        overtime: 300,
        socialSecurityDeductions: 521,
        actualSalary: 8090,
        other: 80,
      },
    };
  },
  mounted() {},
  methods: {
    backTo() {
      this.$parent.editSalary();
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