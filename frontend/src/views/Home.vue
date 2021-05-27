<template>
  <div class="bg-red-500">
    <img alt="Vue logo" src="../assets/images/logo.png" @click="onClick">
    <HelloWorld :msg="message"/>
  </div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue'
interface Backend {
  basic(): Promise<string>;
}

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    backend: Backend;
  }
}

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
  message: string = 'This is Thiago playing with TypeScript'
  onClick (): void {

    window.backend.basic().then(result => {
      console.log(result)
    });
  }
}
</script>
