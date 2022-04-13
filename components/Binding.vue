<template>
  <div class="binding__wrapper">
    <h1 class="title">
      <NuxtLink to="/">
        Terminal Index
      </NuxtLink>
    </h1>
  </div>
</template>

<style scoped>
  .binding__wrapper {
    align-self: flex-end;
  }

  .title {
    color: var(--primary-color-dark);
    font-size: 1rem;
    font-weight: 400;
    text-transform: uppercase;
    writing-mode: vertical-lr;
    transform: rotateZ(180deg);
    padding: 4rem 0;
  }

</style>