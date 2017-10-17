import Vue from 'vue';

import { Routers } from "./router/index"
import {components} from "./components"

new Vue({
  el: "#app",
  template: `<div>
      <Logo />
      <List>
        <Item v-for="(item, index) in items"
              :key="index"
              :isFirst="index === 0">
              {{item}}
        </Item>
      </List>
      <router-view/>
  </div>`,
  data() {
    return {
      items: [1,2,3,4,5,6,7,8],
    }
  },
  router: Routers,
  components
})
