<template>
  <div class="contactPanel">
    <div class="container">
      <div class="row contactForm">
        <div class="col-12 col-md-6 imageContact"><img src="../../assets/contactForm.png"></div>
        <div class="col-12 col-md-6 workWithUs">
          <form class="jumbotron">
            <div class="header">
              <h1>Work With Us</h1>
            </div>
            <div class="form-group col-xs-12 col-md-10 col-sm-12">
              <input type="text" class="form-control" name="" value="" placeholder="Name">
            </div>
            <div class="form-group col-xs-12 col-md-10 col-sm-12">
              <input type="email" class="form-control" name="" value="" placeholder="E-mail">
            </div>
            <div class="form-group col-xs-12 col-md-10 col-sm-12">
              <input type="tel" class="form-control" name="" value="" placeholder="Phone">
            </div>
            <div class="form-group col-xs-12 col-md-10 col-sm-12">
              <textarea class="form-control" name="" rows="3" placeholder="Message"></textarea>
            </div>
            <input class="btn" type="submit" value="Send mail">
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'panelContact'
}
</script>

<style scoped lang="scss">
  .contactPanel {
    padding: 3rem 0;
    height: auto;

    @media (max-width: 479px) {
      padding: 2rem;
    }

    .contactForm {
      box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.1);
    }

    .imageContact,
    .workWithUs {
      padding-right: 0;
      padding-left: 0;
    }

    .workWithUs {

      .jumbotron {
        padding-bottom: 0 !important;

        h1 {
          font-size: 3.1rem;

          @media (max-width: 996px) {
            font-size: 2.5rem;
          }

        }
        .form-group {
          font-family: Roboto;
          border-radius: 3px;
          padding: 0;

          input,
          textarea {
            font-size: 1rem;
          }

          textarea.form-control {
            height: auto;
          }

        }
      }
      @media (max-width: 999px) {
        .jumbotron {
          padding: 0;
          margin: 0 1rem;

          .form-group {
            font-size: 2rem;
          }
        }

      }
      @media (max-width: 767px) {
        .jumbotron {
          padding: 1rem 2rem;
          margin-bottom: 2rem;
        }
      }

    }
  }
</style>
