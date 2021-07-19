<template>
  <div>
    <div 
      class="message"
      @mouseover="isActive  = true"
      @mouseleave="isActive = false"
    >
      <h1>{{ message }}</h1>
      <div 
        class="d1"
        v-bind:class='{ active: isActive }'
      ><h1>{{ message }}</h1>
      </div>
      <div 
        class="d2"
        v-bind:class='{ active: isActive }'
      ><h1>{{ message }}</h1>
      </div>
      <div 
        class="d3"
        v-bind:class='{ active: isActive }'
      ><h1>{{ message }}</h1>
      </div>
      <div 
        class="d4"
        v-bind:class='{ active: isActive }'
      ><h1>{{ message }}</h1>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .message {
    cursor: pointer;
    position: relative;
    z-index: 10000;
  }

  h1 {
    display: inline-block;
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: .1rem;
    text-transform: uppercase;
  }

  .d1, .d2, .d3, .d4 {
    position: absolute;
    top: 0;
    left: 0;
    transition: all .6s cubic-bezier(0,1.07,.16,.99);
    z-index: 1;
  }

  .d1 {
    clip-path: inset(0 0 45% 0);
  }

  .d1.active {
    top: -1.1rem;
  }

  .d2 {
    clip-path: inset(0 0 52% 0);
  }

  .d2.active {
    top: -1.8rem;
  }

  .d3 {
    clip-path: inset(48% 0 0 0);
  }

  .d3.active {
    top: 1.2rem;
  }

  .d4 {
    clip-path: inset(52% 0 0 0);
  }

  .d4.active {
    top: 2.2rem;
  }
</style>

<script>
  export default {
    data() {
      return {
        isActive: false,
        message: 'terminal index'
      }
    },
  }
</script>