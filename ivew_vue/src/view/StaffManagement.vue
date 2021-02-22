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
            <span class="content-Breadcrumb">员工管理</span>
            </Col>
            <Col
              span="12"
              class="col-span"
            >
            <span>员工</span>
            <span class="col-span-num">63,5556</span>
            <span>人</span>
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
                v-model="education"
                clearable
                style="width:150px"
                placeholder="请选择员工学历"
              >
                <Option
                  v-for="item in educationList"
                  :value="item.value"
                  :key="item.value"
                >{{ item.label }}</Option>
              </Select>
            </FormItem>
            <FormItem>
              <Select
                v-model="status"
                clearable
                style="width:150px"
                placeholder="请选择员工状态"
              >
                <Option
                  v-for="item in statusList"
                  :value="item.value"
                  :key="item.value"
                >{{ item.label }}</Option>
              </Select>
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
              type="primary"
              icon="ios-add"
              @click="addStaff('新增员工')"
            >新增员工</Button>
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
                @click="addStaff('修改员工')"
              >编辑</span>
              <span class="table-slot-delete">删除</span>
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
        <my-staffEdit :staffEdit="staffEdit"></my-staffEdit>
      </div>
    </transition>
  </div>
</template>
<script>
import columns from "../json/staffColumns.json";
import Tabledata from "../json/staffData.json";
import StaffEdit from "./StaffEdit.vue";
export default {
  name: "StaffManagement",
  components: {
    "my-staffEdit": StaffEdit,
  },
  data() {
    return {
      something: "",
      education: "",
      status: "",
      department: "",
      data: "",
      educationList: [
        {
          value: "1",
          label: "本科",
        },
        {
          value: "2",
          label: "硕士",
        },
        {
          value: "3",
          label: "博士",
        },
      ],
      statusList: [
        {
          value: "1",
          label: "在职",
        },
        {
          value: "2",
          label: "离职",
        },
      ],
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
      switchView1: true,
      switchView2: false,
      staffEdit: "",
    };
  },
  methods: {
    addStaff(val) {
      this.staffEdit = val;
      if (val == "新增员工" || val == "修改员工") {
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
          filename: "员工数据",
        });
        this.loading = false;
      }, 1000);
    },
  },
};
</script>
<style lang="scss" scoped>
.col-span {
  text-align: end;
  color: #000;
  .col-span-num {
    color: #2d8cf0;
    padding: 0px 5px;
  }
}
.table-slot-delete {
  margin-left: 15px;
  color: red;
  cursor: pointer;
  border-bottom: 1px solid;
}
.table-slot-edit {
  color: #2b85e4;
  cursor: pointer;
  border-bottom: 1px solid;
}
</style>