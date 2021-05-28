<template>
    <div id="nav" class="flex flex-col items-center justify-start h-screen bg-gray-400 shadow-md ">
      <div class="flex flex-col items-center justify-start w-full shadow-inner text-white-500">
        <router-link to="connections" class="w-full mt-6 mb-3 text-center">
          <icon-park type="database-point" theme="outline" fill="white" size="1.5em"/>
        </router-link>
        <router-link to="databases" class="w-full mt-6 mb-3 text-center">
          <icon-park type="database-success" theme="outline" fill="white" size="1.5em"/>
        </router-link>
        <ul>
          <li v-for="connection in connections" v-bind:key="connection.Id" v-text="connection.Name"></li>
        </ul>
        <button @click="addConnection(fakeConnection())">Add</button>
      </div>
    </div>
</template>


<script lang="ts">

import {IconPark} from '@icon-park/vue/es/all';
import { Component, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import Connection from "@/dto/connection";
const connectionStore = namespace('ConnectionStore')

@Component({
  components: {
    IconPark
  }
})
export default class Sidebar extends Vue {
  @connectionStore.Getter
  public connections!: Array<Connection>

  @connectionStore.Action
  // eslint-disable-next-line no-unused-vars
  public addConnection!: (newConnection: Connection) => void

  public fakeConnection(){
    return new Connection('Testing','localhost',6379, null, null)
  }
}
</script>

<style scoped>

</style>