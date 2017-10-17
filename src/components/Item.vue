<template>
  <li class="Item">
      {{data}}
  </li>
</template>

<script lang="ts">
export default {
  name: "Item",
  data() {
      console.log(this);
      return {}
  },
  props: ["data"]
}
</script>

