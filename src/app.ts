import Vue from 'vue';

import {components} from "./components"

let a = new Vue({
  el: "#app",
  template: `<div>
      <List>
        <Item v-for="(item, index) in items"
              :key="index"
              :isFirst="index === 0">
              {{item}}
        </Item>
      </List>
  </div>`,
  data() {
    return {
      items: [1,2,3,4,5,6,7,8],
    }
  },
  components: {
    ...components
  },
})
