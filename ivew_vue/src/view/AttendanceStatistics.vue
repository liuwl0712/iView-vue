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
            <span class="content-Breadcrumb">出勤统计</span>
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
              <DatePicker
                type="daterange"
                split-panels
                placeholder="开始时间 ~ 结束时间"
                style="width: 200px"
                v-model="data"
              ></DatePicker>
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
              slot="action"
            >
              <span
                class="table-slot-edit"
                @click="editAttendance('编辑出勤')"
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
        <my-attendanceEdit :attendanceEdit="attendanceEdit"></my-attendanceEdit>
      </div>
    </transition>
  </div>
</template>
<script>
import columns from "../json/attendanceColumns.json";
import Tabledata from "../json/attendanceData.json";
import AttendanceEdit from "./AttendanceEdit.vue";
export default {
  name: "Attendance",
  components: {
    "my-attendanceEdit": AttendanceEdit,
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
      data: "",
      columns: columns,
      Tabledata: Tabledata,
      loading: false,
      attendanceEdit: "",
      switchView1: true,
      switchView2: false,
    };
  },
  methods: {
    editAttendance(val) {
      this.attendanceEdit = val;
      if (val == "编辑出勤") {
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
          filename: "出勤数据",
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