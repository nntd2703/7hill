<template>
  <div id="contact" class="contact">
    <nav-top></nav-top>
    <navigation-bar></navigation-bar>
    <panel-about/>
    <div class="contactFormDetails">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-7 col-12">
            <form class="jumbotron row form">
              <div class="form-group name-group col-4 titleField">
                <div class="placeholder">
                  <label :for="name">Title </label>
                </div>
                <input type="text" class="form-control" id="title" required>
              </div>
              <div class="form-group name-group col-8">
                <div class="placeholder">
                  <label :for="`name`">Name </label>
                </div>
                <input type="text" class="form-control" :id="`name`" required>
              </div>
              <div class="form-group email-group col-12">
                <div class="placeholder">
                  <label for="email">Email </label>
                </div>
                <input type="email" class="form-control" id="email" required>
              </div>
              <div class="form-group email-group col-12">
                <div class="placeholder">
                  <label for="companyName" class="noneAsterisk">Company Name </label>
                </div>
                <input type="companyName" class="form-control" id="companyName">
              </div>
              <div class="form-group email-group col-12">
                <div class="placeholder">
                  <label for="website" class="noneAsterisk">Website </label>
                </div>
                <input type="website" class="form-control" id="website">
              </div>
              <div class="input-group form-group email-group col-12">
                <select class="custom-select dataCountry" id="dataCountry">
                  <option selected class="labelSelected" value="defaultValue" required>Country</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div class="form-group email-group col-12">
                <div class="placeholder">
                  <label for="city">City </label>
                </div>
                <input type="city" class="form-control" id="city" required>
              </div>
              <div class="form-group email-group col-12">
                <div class="placeholder">
                  <label for="mobile">Mobile </label>
                </div>
                <input type="mobile" class="form-control" id="mobile" required>
              </div>
              <div class="form-group email-group col-12">
                <div class="placeholder">
                  <label for="describe">Describe Your Buying Requirements in Details </label>
                </div>
                <textarea type="describe" class="form-control" id="describe" rows="4" required></textarea>
              </div>
              <button type="submit" class="btn btn-default">Submit</button>
            </form>
          </div>
          <div class="col-md-5 col-12 imageContactDetails">
            <div class="jumbotron text-center">
              <div class="headerImageContactDetails">
                <h2 class="text-uppercase">Contact Us</h2>
              </div>
              <div class="detailsContact pt-3">
                <p class="text-uppercase mb-2">seven hill trading ltd. company</p>
                <p class="mb-2">38E Lam Son Street, Ward 2, Tan Binh District, Ho Chi Minh City</p>
                <p lass="mb-2">Tax Number: 0314737605</p>
              </div>
              <img src="../assets/contactImage.png">
            </div>
          </div>
        </div>
      </div>
    </div>
    <panel-categories/>
    <panel-footer></panel-footer>
  </div>
</template>

<script>
import HomeIndex from '../view/home'
import PanelAbout from './Homepage/panelAbout'
import NavTop from './Homepage/navTop'
import NavigationBar from './Homepage/navigationBar'
import PanelCategories from './Homepage/panelCategories'
import PanelFooter from './Homepage/panelFooter'
export default {
  name: 'contact',
  components: { PanelFooter, PanelCategories, NavigationBar, NavTop, PanelAbout },
  created () {
    this.$emit(`update:layout`, HomeIndex)
  }
}
</script>

<style scoped lang="scss">
  .contact {
    .contactFormDetails {
      padding: 3.5rem 0;
      height: auto;
      .form {
        padding-left: 0;
        padding-right: 4rem;
      }
      @media (max-width: 767px) {
        padding: 2rem;
        .form {
          padding: 1rem;
        }
      }
      .centered {
        float: none;
        margin: 100px auto;
      }

      .form-group {
        position: relative;
        padding: 0;
        .placeholder {
          position: absolute;
          top: 7px;
          left: 12px;
          color: #B1B1B1;
          display: none;
        }
        label,
        select {
          font-wight: normal;
          color: #B1B1B1;
        }
        label:after {
          content: '*';
          color: red;
        }
        .noneAsterisk:after {
          content: none;
        }
        option {
          color: #495057;
        }
        .dataCountry option[selected]:after {
          content: "*";
          color: red;
        }

        .dataCountry option:after {

          content: "";

        }
      }
      .btn {
        padding-right: 3rem;
        padding-left: 3rem;
        font-weight: 400;
      }

      .titleField {
        padding-right: 15px;
      }

      .imageContactDetails {
        box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2);
        background-color: #ffffff;
        .detailsContact {
          padding-top: 2rem;
          p {
            font-weight: 500;
          }
        }
        .jumbotron{
          padding-bottom: 0;
        }
      }
    }
  }

</style>
