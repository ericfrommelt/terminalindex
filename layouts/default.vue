<template>
  <main>
    <section class="binding">
      <Binding />
    </section>
    <Nuxt />
  </main>
</template>

<script>
export default {
  
}
</script>

<style>
  :root {
    --primary-color-dark: hsl(243 50% 47%);
    --primary-color-light: hsl(0 0% 100%);
    --meta-padding: 8rem;
  }

  html,
  body {
    background-color: var(--primary-color-dark);
    color: var(--primary-color-light);
    padding: 0;
    margin: 0;
    font-family: ibm-plex-sans-1, ibm-plex-sans-2, -apple-system, BlinkMacSystemFont, Segoe UI,
      Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
      sans-serif;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  figure {
    margin: 0;
  }

  main {
    display: flex;
    height: 100vh;
  }

  .binding {
    align-self: center;
    background-color: var(--primary-color-light);
    height: 100%;
    display: flex;
    min-width: 3.2rem;
  }
</style>