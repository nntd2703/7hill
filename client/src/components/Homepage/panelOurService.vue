<template>
  <div class="container panelServies panel">
    <header-component headerLabel="Our Service" class="colorSFour header pt-5"/>
    <div class="row align-items-center pt-0 pb-5 pt-5">
      <div class="col-4">
        <img src="../../assets/artboard-1-copy.png" alt="" class="img-fluid"/>
        <h3 class="pt-4">Import</h3>
      </div>
      <div class="col-4">
        <img src="../../assets/export.png" alt="" class="img-fluid"/>
        <h3 class="pt-4">Export</h3>
      </div>
      <div class="col-4">
        <img src="../../assets/processing.png" alt="" class="img-fluid"/>
        <h3 class="pt-4">Processing</h3>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from './headerComponent'

export default {
  name: 'panelOurService',
  components: { HeaderComponent }
}
</script>

<style scoped lang="scss">
  .panelServies {
    text-align: center;
    .title {
      width: 100%;
    }
    .col {
      text-align: center;
    }
  }
  h3 {
    font-size: 1.5rem;
  }

  @media (max-width: 479px) {
    h3 {
      font-size: 1.3rem;
    }
  }
</style>
