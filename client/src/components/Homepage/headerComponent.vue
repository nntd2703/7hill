<template>
  <div class="header">
    <div class="container">
      <h1 class="p-3 headerLabel">{{ headerLabel }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'headerComponent',
  props: {
    headerLabel: String
  }
}
</script>

<style scoped lang="scss">
  .header {
    .headerLabel {
      font-family: Roboto;
      font-size: 2.5rem;
      font-weight: 300;
      font-style: normal;
      font-stretch: normal;
      line-height: 1;
      letter-spacing: normal;
      text-transform: uppercase;
      text-align: center;
    }
  }

  .colorSF {
    h1 {
      color: #ffffff;
      opacity: 0.7;
    }
  }

  .colorSFour {
    h1 {
      color: #444444;
    }
  }
</style>
