<template>
  <div 
    class="wrapper"
    v-bind:class='{ active: isActive }'
    @mouseover="isActive = true"
    @mouseleave="isActive = false"
  >    
    <h1 
      class="introspection"
      v-bind:class='{ active: isActive }'
    >Introspection</h1>
    <h1 
      class="retribution"
      v-bind:class='{ active: isActive }'
    >Retribution</h1>
    <h1 
      class="transformation"
      v-bind:class='{ active: isActive }'
    >Transformation</h1>
  </div>
</template>

<style scoped>
  h1 {
    text-transform: uppercase;
  }

  .wrapper {
    cursor: pointer;
    position: relative;
  }

  .wrapper.active {
    transition: all 1s cubic-bezier(0,1.07,.16,.99);
  }

  .introspection, .retribution, .transformation {
    line-height: .5em;
    text-align: right;
    transition: all .3s cubic-bezier(0,1.07,.16,.99);
  }

  .introspection.active, .retribution.active, .transformation.active {
    line-height: .1em;
  }

  .introspection.active {
    font-size: 3rem;
  }

  .retribution {
    letter-spacing: .1rem;
  }

  .retribution.active {
    font-size: 4.8rem;
  }

  .transformation.active {
    font-size: 5.2rem;
  }
</style>

<script>
  export default {
    data() {
      return {
        isActive: false,
      }
    }
  }
</script>