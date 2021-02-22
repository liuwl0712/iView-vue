<template>
  <div>
    <Card shadow>
      <Row
        slot="title"
        class="content-row"
      >
        <Col span="12">
        <span class="content-BreadcrumbCopy">员工管理 / <span class="content-BreadcrumbCopy-span">{{staffEdit}}</span></span>
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
          :rules="rules"
          ref="formInline"
          inline
          :label-width="100"
        >
          <FormItem
            prop="employeeSName"
            label="员工姓名:"
          >
            <Input
              v-model="formInline.employeeSName"
              type="text"
              placeholder="员工姓名"
              clearable
            >
            </Input>
          </FormItem>
          <FormItem
            prop="employeeId"
            label="员工工号:"
          >
            <Input
              v-model="formInline.employeeId"
              type="text"
              placeholder="员工工号"
              clearable
            >
            </Input>
          </FormItem>
          <FormItem
            prop="staffDepartment"
            label="员工部门:"
          >
            <Select
              v-model="formInline.staffDepartment"
              clearable
              placeholder="员工部门"
            >
              <Option value="beijing">New York</Option>
              <Option value="shanghai">London</Option>
              <Option value="shenzhen">Sydney</Option>
            </Select>
          </FormItem>
          <FormItem
            prop="staffPosition"
            label="员工职位:"
          >
            <Input
              v-model="formInline.staffPosition"
              type="text"
              placeholder="员工职位"
              clearable
            >
            </Input>
          </FormItem>
          <FormItem
            prop="employeePhone"
            label="员工手机号:"
          >
            <Input
              v-model="formInline.employeePhone"
              type="text"
              placeholder="员工手机号"
              clearable
            >
            </Input>
          </FormItem>
          <FormItem
            prop="employeeBirthday"
            label="员工生日:"
          >
            <DatePicker
              v-model="formInline.employeeBirthday"
              format="yyyy/MM/dd"
              type="date"
              placeholder="员工生日"
              clearable
              style="width: 100%;"
            ></DatePicker>
          </FormItem>
          <FormItem
            prop="employeeEducation"
            label="员工学历:"
          >
            <Input
              v-model="formInline.employeeEducation"
              type="text"
              placeholder="员工学历"
              clearable
            >
            </Input>
          </FormItem>
          <FormItem
            prop="employeeMailbox"
            label="员工邮箱:"
          >
            <Input
              v-model="formInline.employeeMailbox"
              type="text"
              placeholder="员工邮箱"
              clearable
            >
            </Input>
          </FormItem>
          <FormItem
            prop="employeesBirthplace"
            label="员工籍贯:"
          >
            <Input
              v-model="formInline.employeesBirthplace"
              type="text"
              placeholder="员工籍贯"
              clearable
            >
            </Input>
          </FormItem>
          <FormItem
            prop="major"
            label="所学专业:"
          >
            <Input
              v-model="formInline.major"
              type="text"
              placeholder="所学专业"
              clearable
            >
            </Input>
          </FormItem>
          <FormItem
            prop="employeeAddress"
            label="员工住址:"
          >
            <Input
              v-model="formInline.employeeAddress"
              maxlength="100"
              show-word-limit
              type="textarea"
              placeholder="员工住址"
              clearable
            />
          </FormItem>
        </Form>
        </Col>
      </Row>
      <Row style="margin-top:20px">
        <span class="shadow-span">工资信息</span>
        <Col
          span="24"
          class="col-form"
        >
        <Form
          :model="formInline"
          :rules="rules"
          ref="formInline"
          inline
          :label-width="100"
        >
          <FormItem
            prop="salaryCardNumber"
            label="工资卡号:"
          >
            <Input
              v-model="formInline.salaryCardNumber"
              type="text"
              placeholder="工资卡号"
              clearable
            >
            </Input>
          </FormItem>
          <FormItem
            prop="basicWage"
            label="基本工资:"
          >
            <Input
              v-model="formInline.basicWage"
              type="text"
              placeholder="基本工资"
              clearable
            >
            </Input>
          </FormItem>
          <FormItem
            prop="performancePay"
            label="绩效工资:"
          >
            <Input
              v-model="formInline.performancePay"
              type="text"
              placeholder="绩效工资"
              clearable
            >
            </Input>
          </FormItem>
          <FormItem
            prop="socialSecurity"
            label="社保扣款:"
          >
            <Input
              v-model="formInline.socialSecurity"
              type="text"
              placeholder="社保扣款"
              clearable
            >
            </Input>
          </FormItem>
          <FormItem
            prop="probationPeriod"
            label="试用期薪资:"
          >
            <Input
              v-model="formInline.probationPeriod"
              type="text"
              placeholder="试用期薪资"
              clearable
            >
            </Input>
          </FormItem>
          <FormItem
            prop="positiveSalary"
            label="转正薪资:"
          >
            <Input
              v-model="formInline.positiveSalary"
              type="text"
              placeholder="转正薪资"
              clearable
            >
            </Input>
          </FormItem>
          <FormItem
            prop="jobSalary"
            label="岗位薪资:"
          >
            <Input
              v-model="formInline.jobSalary"
              type="text"
              placeholder="岗位薪资"
              clearable
            >
            </Input>
          </FormItem>
        </Form>
        </Col>
      </Row>
      <div class="staff-edit-divbtn">
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
  name: "StaffEdit",
  props: ["staffEdit"],
  data() {
    return {
      formInline: {
        employeeSName: "",
        employeeId: "",
        staffDepartment: "",
        staffPosition: "",
        employeePhone: "",
        employeeBirthday: "",
        employeeEducation: "",
        employeeMailbox: "",
        employeesBirthplace: "",
        major: "",
        employeeAddress: "",
        salaryCardNumber: "",
        basicWage: "",
        performancePay: "",
        socialSecurity: "",
        probationPeriod: "",
        positiveSalary: "",
        jobSalary: "",
      },
      rules: {
        employeeSName: [
          {
            required: true,
            message: "请填写",
            trigger: "blur",
          },
        ],
        employeeId: [
          {
            required: true,
            message: "请填写",
            trigger: "blur",
          },
        ],
        staffDepartment: [
          {
            required: true,
            message: "请填写",
            trigger: "blur",
          },
        ],
        staffPosition: [
          {
            required: true,
            message: "请填写",
            trigger: "blur",
          },
        ],
        employeePhone: [
          {
            required: true,
            message: "请填写",
            trigger: "blur",
          },
        ],
        employeeBirthday: [
          {
            required: true,
            message: "请填写",
            trigger: "blur",
          },
        ],
        employeeEducation: [
          {
            required: true,
            message: "请填写",
            trigger: "blur",
          },
        ],
        employeeMailbox: [
          {
            required: true,
            message: "请填写",
            trigger: "blur",
          },
        ],
        employeesBirthplace: [
          {
            required: true,
            message: "请填写",
            trigger: "blur",
          },
        ],
        major: [
          {
            required: true,
            message: "请填写",
            trigger: "blur",
          },
        ],
        employeeAddress: [
          {
            required: true,
            message: "请填写",
            trigger: "blur",
          },
        ],
        salaryCardNumber: [
          {
            required: true,
            message: "请填写",
            trigger: "blur",
          },
        ],
        basicWage: [
          {
            required: true,
            message: "请填写",
            trigger: "blur",
          },
        ],
        performancePay: [
          {
            required: true,
            message: "请填写",
            trigger: "blur",
          },
        ],
        socialSecurity: [
          {
            required: true,
            message: "请填写",
            trigger: "blur",
          },
        ],
        probationPeriod: [
          {
            required: true,
            message: "请填写",
            trigger: "blur",
          },
        ],
        positiveSalary: [
          {
            required: true,
            message: "请填写",
            trigger: "blur",
          },
        ],
        jobSalary: [
          {
            required: true,
            message: "请填写",
            trigger: "blur",
          },
        ],
      },
    };
  },
  mounted() {},
  methods: {
    backTo() {
      this.$parent.addStaff();
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
.staff-edit-divbtn {
  margin: 50px 0px;
  Button {
    margin-left: 20px;
    width: 80px;
  }
}
</style>