<template>
  <div class="posts__list">
    <ul>
      <li v-for="article of articles" :key="article.slug">
        <NuxtLink :to="`${article.slug}`">
          <h2><span class="serialnumber">{{ article.serialnumber }}</span> {{ article.title }}</h2>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    async asyncData({$content, params}) {
      const articles = await $content('articles')
        .only(['serialnumber', 'slug', 'title'])
        .sortBy('createdAt', 'asc')
        .fetch()

      return {
        articles
      }
    }
  }
</script>

<style scoped>
  ul {
    list-style: none;
    padding: 0;
  }

  h2 {
    font-size: 1.6rem;
    font-weight: 400;
  }

  .posts__list {
    padding: var(--meta-padding);
  }

  .serialnumber {
    font-family: ibm-plex-mono-1, ibm-plex-mono-2;
    font-size: .8rem;
  }
</style>
