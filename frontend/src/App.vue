<template>
  <div  id="app" class="bg-black-500">
    <Splitpanes>
      <pane  size="20" min-size="20" max-size="70">
        <Sidebar></Sidebar>
      </pane>
      <pane min-size="30" max-size="80">
        <div class=" w-full h-screen">
          <router-view/>
        </div>
      </pane>
    </Splitpanes>
  </div>
</template>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}


.wails-reconnect-overlay{
  background-color: #23232F !important;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.wails-reconnect-overlay-content{
  background-color: #23232F !important;
  background-image: none !important;
  box-shadow: none !important;
  border-radius: 0;
  display: flex !important;
  height: 100% !important;
  margin: 0 !important;
  padding: 0 !important;
}
.wails-reconnect-overlay-title{
  display: none !important;
}

.wails-reconnect-overlay-loadingspinner{
  border-color: #DE3B4A #eee #eee !important;
}

#wails-reconnect-overlay-message{
  display: none !important;
}
</style>
<script>
import Vue from "vue";
import { Component } from 'vue-property-decorator'
import Sidebar from "@/components/Sidebar";
import { Splitpanes, Pane } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'
@Component({
  name: "App",
  components: {Sidebar, Splitpanes, Pane }
})
export default class App extends Vue {}
</script>