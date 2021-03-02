<template>
  <div>
    <Tag
      v-for="item in tags"
      :key="item.path"
      :type="item.type"
      :closable="item.closable"
      :color="item.color"
      class="tab-tags"
      @click.native="clickChange(item)"
      v-if="item.path=='/operationalData'"
    >{{item.title}}</Tag>
    <div id="itxst">
      <Tag
        v-for="item in tags"
        :key="item.path"
        :type="item.type"
        :closable="item.closable"
        :color="item.color"
        class="tab-tags"
        @click.native="clickChange(item)"
        @on-close="handleClose(item)"
        v-if="item.path!='/operationalData'"
      >{{item.title}}</Tag>
    </div>
  </div>
</template>
<script>
// 引入Sortable实现拖拽
import Sortable from "sortablejs";
export default {
  data() {
    return {
      tags: [
        {
          type: "dot",
          closable: false,
          color: "primary",
          title: "运营数据",
          path: "/operationalData",
        },
      ],
    };
  },
  watch: {
    $route: function (to) {
      let flag = true;
      for (let i = 0; i < this.tags.length; i++) {
        if (this.tags[i].path == to.path) {
          this.tags[i].color = "primary";
          flag = false;
        } else {
          this.tags[i].color = "";
        }
      }
      if (flag) {
        for (let i = 0; i < this.tags.length; i++) {
          this.tags[i].color = "";
        }
        this.tags.push({
          type: "dot",
          closable: true,
          color: "primary",
          title: to.meta.title,
          path: to.path,
        });
      }
    },
  },
  mounted() {
    this.rowDrop();
    if (this.$route.path != "/operationalData") {
      for (let i = 0; i < this.tags.length; i++) {
        if (this.tags[i].path == "/operationalData") {
          this.tags[i].color = "";
        }
      }
      this.tags.push({
        type: "dot",
        closable: true,
        color: "primary",
        title: this.$route.meta.title,
        path: this.$route.path,
      });
    }
  },
  methods: {
    clickChange(item) {
      this.$router.push({ path: item.path });
    },
    handleClose(item) {
      if (item.path != this.$route.path) {
        for (let i = 0; i < this.tags.length; i++) {
          if (item.path == this.tags[i].path) {
            this.tags.splice(i, 1);
          }
        }
      } else {
        for (let i = 0; i < this.tags.length; i++) {
          if (item.path == this.tags[i].path) {
            this.tags.splice(i, 1);
            this.$router.push({ path: this.tags[i - 1].path });
          }
        }
      }
    },
    rowDrop() {
      const el = document.getElementById("itxst");
      const _this = this;
      Sortable.create(el, {
        onEnd({ newIndex, oldIndex }) {
          console.log(newIndex);
          console.log(oldIndex);
          const currRow = _this.tags.splice(oldIndex + 1, 1)[0]; 
          _this.tags.splice(newIndex + 1, 0, currRow);
          console.log(_this.tags);
        },
      });
    },
  },
};
</script>
<style lang="scss" scoped>
#itxst {
  display: inline-block;
}
.tab-tags {
  cursor: pointer;
}
</style>