<template>
    <div id="nav" class="flex flex-col items-center justify-start h-screen bg-gray-400 shadow-md ">
      <div class="flex flex-col items-center justify-start w-full shadow-inner text-white-500">
        <router-link to="connections" class="w-full mt-6 mb-3 text-center">
          <icon-park type="database-point" theme="outline" fill="white" size="1.5em"/>
        </router-link>
        <router-link to="databases" class="w-full mt-6 mb-3 text-center">
          <icon-park type="database-success" theme="outline" fill="white" size="1.5em"/>
        </router-link>
      </div>
    </div>
</template>


<script lang="ts">

import {IconPark} from '@icon-park/vue/es/all';
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
    IconPark
  }
})
export default class Sidebar extends Vue {}
</script>

<style scoped>

</style>