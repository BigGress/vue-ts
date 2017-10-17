<template>
  <div class="List">
    <ul>
      <!-- <li>test</li> -->
      <slot></slot>
    </ul>
  </div>
</template>
<script lang="ts">
export default {
  name: "List",
  data () {
    return {

    }
  }
}
</script>

<style lang="scss">

  .List {
    ul {
      overflow: hidden;
      margin: 0;
      padding: 1px;
    }
  }
</style>

