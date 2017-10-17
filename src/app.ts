import Vue from 'vue';

import {components} from "./components"

let a = new Vue({
  el: "#app",
  template: `<div>
      <List>
        <Item v-for="(item, index) in items"
              :data="item"
              :key="index"></Item>
      </List>
  </div>`,
  data() {
    return {
      items: [1,2,3,4,5,6,7,8],
    }
  },
  components: {
    ...components
  }
})
