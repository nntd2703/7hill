<template>
  <div class="panelFounder pt-4">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6 aboutFounder jumbotron">
          <h1>Meet the Founder</h1>
          <p>It is a long established fact that a reader will be distracted by the readable content of a
            page
            when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less
            normal
            distribution of letters. as opposed to using.
            <br>
            <br>
            Many desktop publishing packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web sites still in their
            infancy.
            Various versions have evolved over the years, sometimes by accident, sometimes on purpose
            (injected humour and the like).</p>

          <input class="btn mt-4" type="submit" value="See More">
        </div>
        <div class="col-12 col-md-6 d-flex justify-content-center"><img src="../../assets/img_founder.png" alt=""></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'founderPanel'
}
</script>

<style scoped lang="scss">
  .panelFounder {
    .image {
      text-align: center;
    }
    .jumbotron {
      margin: 0
    }
    @media (max-width: 767px) {
      text-align: center;
      padding: 0rem;
      .image {
        padding: 0rem 1rem 1rem 1rem;
      }
      .jumbotron {
        padding-bottom: 0;
      }
      .aboutFounder {
        padding: 2rem 2rem;
      }
    }
  }
</style>
