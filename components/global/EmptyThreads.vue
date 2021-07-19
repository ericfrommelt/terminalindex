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
      <div 
        class="d5"
        v-bind:class='{ active: isActive }'
      ><h1>{{ message }}</h1>
      </div>
      <div 
        class="d6"
        v-bind:class='{ active: isActive }'
      ><h1>{{ message }}</h1>
      </div>
      <div 
        class="d7"
        v-bind:class='{ active: isActive }'
      ><h1>{{ message }}</h1>
      </div>
      <div 
        class="d8"
        v-bind:class='{ active: isActive }'
      ><h1>{{ message }}</h1>
      </div>
      <div 
        class="d9"
        v-bind:class='{ active: isActive }'
      ><h1>{{ message }}</h1>
      </div>
      <div 
        class="d10"
        v-bind:class='{ active: isActive }'
      ><h1>{{ message }}</h1>
      </div>
      <div 
        class="d11"
        v-bind:class='{ active: isActive }'
      ><h1>{{ message }}</h1>
      </div>
      <div 
        class="d12"
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
  }

  h1 {
    display: inline-block;
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: .1rem;
    text-transform: uppercase;
  }

  .d1, .d2, .d3, .d4, .d5, .d6, .d7, .d8, .d9, .d10, .d11, .d12 {
    position: absolute;
    top: 0;
    left: 0;
    transition: all .8s cubic-bezier(0,1.07,.16,.99);
    z-index: 1;
  }

  .d1 {
    clip-path: inset(0 92% 0 0);
  }
  .d1.active {
    top: -3rem;
    opacity: .9;
  }

  .d2 {
    clip-path: inset(0 82% 0 7%);
  }
  .d2.active {
    top: -6rem;
    opacity: .8;
  }

  .d3 {
    clip-path: inset(0 75% 0 18%);
  }
  .d3.active {
    top: -9rem;
    opacity: .7;
  }

  .d4 {
    clip-path: inset(0 68% 0 26%);
  }
  .d4.active {
    top: -12rem;
    opacity: .6;
  }

  .d5 {
    clip-path: inset(0 60% 0 33%);
  }
  .d5.active {
    top: -15rem;
    opacity: .5;
  }

  .d12 {
    clip-path: inset(0 0 0 92%);
  }
  .d12.active {
    top: 3rem;
    opacity: .9;
  }

  .d11 {
    clip-path: inset(0 8% 0 84%);
  }
  .d11.active {
    top: 6rem;
    opacity: .8;
  }

  .d10 {
    clip-path: inset(0 16% 0 75%);
  }
  .d10.active {
    top: 9rem;
    opacity: .7;
  }

  .d9 {
    clip-path: inset(0 25% 0 68%);
  }
  .d9.active {
    top: 12rem;
    opacity: .6;
  }

  .d8 {
    clip-path: inset(0 32% 0 60%);
  }
  .d8.active {
    top: 15rem;
    opacity: .5;
  }

  .d7 {
    clip-path: inset(0 41% 0 51%);
  }
  .d7.active {
    top: 18rem;
    opacity: .4;
  }

  .d6 {
    clip-path: inset(0 50% 0 42%);
  }
  .d6.active {
    top: 21rem;
    opacity: .3;
  }

</style>

<script>
  export default {
    data() {
      return {
        isActive: false,
        message: 'empty threads'
      }
    },
  }
</script>