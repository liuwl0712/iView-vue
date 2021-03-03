<template>
  <div>
    <Card>
      <div style="text-align:center">
        <Tabs>
          <TabPane
            label="401"
            icon="ios-bug"
          >
            <my-401></my-401>
          </TabPane>
          <TabPane
            label="403"
            icon="ios-information-circle"
          >
            <my-403></my-403>
          </TabPane>
          <TabPane
            label="404"
            icon="md-desktop"
          >
            <my-404></my-404>
          </TabPane>
          <TabPane
            label="500"
            icon="md-funnel"
          >
            <my-500></my-500>
          </TabPane>
        </Tabs>
      </div>
    </Card>
    <router-view></router-view>
  </div>
</template>
<script>
import one from "./401Page";
import three from "./403Page";
import four from "./404Page";
import five from "./500Page";
export default {
  components: {
    "my-401": one,
    "my-403": three,
    "my-404": four,
    "my-500": five,
  },
};
</script>