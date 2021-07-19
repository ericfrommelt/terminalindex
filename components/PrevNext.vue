<template>
  <div class="prev-next">
    <NuxtLink v-if="prev" :to="`${prev.slug}`" class="prev-link">
      <div class="arrow">
        <svg
          aria-labelledby="prevlink"
          id="prevlink"
          role="link"
          width="6" 
          height="12" 
          viewBox="0 0 6 12" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg">
          <title>prevlink</title>
          <path d="M5 1L1 6L5 11" stroke="#423DB4"/>
        </svg>
      </div>
    </NuxtLink>

    <span v-else>&nbsp;</span>

    <NuxtLink
      v-if="next"
      :to="`${next.slug}`"
      class="next-link"
    >
      <div class="arrow">
        <svg
          aria-labelledby="nextlink"
          id="nextlink"
          role="link"
          width="6" 
          height="12" 
          viewBox="0 0 6 12" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg">
          <title>nextlink</title>
          <path d="M1 11L5 6L1 1" stroke="#423DB4"/>
        </svg>
      </div>
    </NuxtLink>
    
    <span v-else>&nbsp;</span>
  </div>
</template>

<script>
  export default {
    props: {
      prev: {
        type: Object,
        default: () => null
      },
      next: {
        type: Object,
        default: () => null
      }
    }
  }
</script>

<style scoped>
  .prev-link {
    margin-left: 2rem;
  }

  .next-link {
    margin-right: 2rem;
  }

  .prev-link, .next-link {
    width: 2rem;
    height: 8rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    opacity: .3;
    transition: opacity .1s ease-in;
    border-radius: 2px;
  }

  .prev-link:hover, .next-link:hover {
    opacity: .6;
  }

  .arrow {
    padding-top: 4px;
  }
</style>