<template>
  <div>
    <transition
      leave-active-class="animate__animated animate__bounceOutUp"
      enter-active-class="animate__animated animate__bounceInDown"
    >
      <div v-show="switchView1">
        <Card shadow>
          <Row
            slot="title"
            class="content-row"
          >
            <Col span="12">
            <span class="content-Breadcrumb">工资报表</span>
            </Col>
          </Row>
          <Form inline>
            <FormItem>
              <Input
                v-model="something"
                placeholder="Enter something..."
                clearable
              />
            </FormItem>
            <FormItem>
              <Select
                v-model="department"
                clearable
                style="width:150px"
                placeholder="请选择员工部门"
              >
                <Option
                  v-for="item in departmentList"
                  :value="item.value"
                  :key="item.value"
                >{{ item.label }}</Option>
              </Select>
            </FormItem>
            <FormItem>
              <Button
                type="primary"
                icon="ios-search"
              >Search</Button>
            </FormItem>
          </Form>
          <div class="content-ation">
            <Button
              type="info"
              icon="ios-download-outline"
              @click="exportData"
              :loading="loading"
            >数据导出</Button>
          </div>
          <Table
            stripe
            :columns="columns"
            :data="Tabledata"
            ref="table"
          >
            <template
              slot-scope="{ row, index }"
              slot="basicWage"
            >
              <span>￥ {{ row.basicWage }}</span>
            </template>
            <template
              slot-scope="{ row, index }"
              slot="wageJobs"
            >
              <span>￥ {{ row.wageJobs }}</span>
            </template>
            <template
              slot-scope="{ row, index }"
              slot="performancePay"
            >
              <span>￥ {{ row.performancePay }}</span>
            </template>
            <template
              slot-scope="{ row, index }"
              slot="deductionsForViolations"
            >
              <span>￥ {{ row.deductionsForViolations }}</span>
            </template>
            <template
              slot-scope="{ row, index }"
              slot="socialSecurityDeductions"
            >
              <span>￥ {{ row.socialSecurityDeductions }}</span>
            </template>
            <template
              slot-scope="{ row, index }"
              slot="perfectAttendanceAward"
            >
              <span>￥ {{ row.perfectAttendanceAward }}</span>
            </template>
            <template
              slot-scope="{ row, index }"
              slot="overtime"
            >
              <span>￥ {{ row.overtime }}</span>
            </template>
            <template
              slot-scope="{ row, index }"
              slot="actualSalary"
            >
              <span>￥ {{ row.actualSalary }}</span>
            </template>
            <template
              slot-scope="{ row, index }"
              slot="action"
            >
              <span
                class="table-slot-edit"
                @click="editSalary('工资信息')"
              >编辑</span>
            </template>
          </Table>
          <Page
            class="content-page"
            :total="100"
            show-total
            show-sizer
            show-elevator
          />
        </Card>
      </div>
    </transition>
    <transition
      enter-active-class="animate__animated animate__bounceInUp"
      leave-active-class="animate__animated animate__bounceOutDown"
    >
      <div
        class="switchViewCopy-div"
        v-if="switchView2"
      >
        <my-salaryEdit :salaryEdit="salaryEdit"></my-salaryEdit>
      </div>
    </transition>
  </div>
</template>
<script>
import columns from "../json/salaryColumns.json";
import Tabledata from "../json/salaryData.json";
import SalaryEdit from "./SalaryEdit.vue";
export default {
  name: "Attendance",
  components: {
    "my-salaryEdit": SalaryEdit,
  },
  data() {
    return {
      something: "",
      department: "",
      departmentList: [
        {
          value: "1",
          label: "技术部",
        },
        {
          value: "2",
          label: "财务部",
        },
        {
          value: "3",
          label: "后勤部",
        },
      ],
      columns: columns,
      Tabledata: Tabledata,
      loading: false,
      salaryEdit: "",
      switchView1: true,
      switchView2: false,
    };
  },
  methods: {
    editSalary(val) {
      this.salaryEdit = val;
      if (val == "工资信息") {
        this.switchView1 = !this.switchView1;
        setTimeout(() => {
          this.switchView2 = !this.switchView2;
        }, 500);
      } else {
        this.switchView2 = !this.switchView2;
        setTimeout(() => {
          this.switchView1 = !this.switchView1;
        }, 500);
      }
    },
    exportData() {
      this.loading = true;
      setTimeout(() => {
        this.$refs.table.exportCsv({
          filename: "工资报表",
        });
        this.loading = false;
      }, 1000);
    },
  },
};
</script>
<style scoped>
.table-slot-edit {
  color: #2b85e4;
  cursor: pointer;
  border-bottom: 1px solid;
}
</style>