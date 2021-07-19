<template>
  <article class="post">
    <nuxt-content :document="article" />
    <h1 class="post__title">{{ article.title }}</h1>
    <p class="post__description">{{ article.description }}</p>
    <p class="post__serialnumber">{{ article.serialnumber }}</p>
    <p class="post__date">{{ formatDate(article.updatedAt) }}</p>
    <prev-next :prev="prev" :next="next"></prev-next>
  </article>
</template>

<script>
  import PrevNext from '~/components/PrevNext.vue'
  export default {
  components: { PrevNext },
    async asyncData({ $content, params }) {
      const article = await $content('articles', params.slug).fetch()
      const [prev, next] = await $content('articles')
        .only(['title', 'slug'])
        .sortBy('createdAt', 'asc')
        .surround(params.slug)
        .fetch()

      return { 
        article,
        prev,
        next
      }
    },

    methods: {
      formatDate(date) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' }
        
        return new Date(date).toLocaleDateString('en', options)
      }
    }
  }
</script>

<style>
  .post {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: calc(4rem + var(--meta-padding)) auto calc(4rem + var(--meta-padding)) 2rem;
    height: 100vh;
    width: 100%;
  }

  .post__title, .post__date, .post__description, .post__serialnumber {
    font-weight: 400;
    font-size: .8rem;
  }

  .post__title {
    grid-column: 1;
    grid-row: 1;
    padding: var(--meta-padding) 0 0 var(--meta-padding)
  }

  .post__date {
    grid-column: 3;
    grid-row: 1;
    justify-self: end;
    padding: var(--meta-padding) var(--meta-padding) 0 0;
  }

  .post__description {
    grid-column: 1;
    grid-row: 3;
    padding: 0 0 var(--meta-padding) var(--meta-padding);
  }

  .post__serialnumber {
    grid-column: 3;
    grid-row: 3;
    justify-self: end;
    padding: 0 var(--meta-padding) var(--meta-padding) 0;
  }

  .nuxt-content-container {
    grid-column: 1 / span 3;
    grid-row: 2;
    align-self: center;
    justify-self: center;
  }

  .prev-next {
    grid-column: 1 / span 3;
    grid-row: 2;
    align-self: center;
    font-family: ibm-plex-mono-1, ibm-plex-mono-2;
    font-size: .6rem;
    text-transform: uppercase;
    display: flex;
    justify-content: space-between;
  }

  .prev-link {
    
  }

  .next-link {
    
  }
</style>