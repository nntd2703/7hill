<template>
  <footer>
    <div class="footerContent container">
      <div class="row childFooter">
        <div class="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10949.142965462774!2d106.6890327442656!3d10.772557902286012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f3e8eddf565%3A0x2ab6e5fe92c2e5d7!2sNew+World+Saigon+Hotel!5e0!3m2!1sen!2s!4v1543255808288"
            style="border:0" allowfullscreen width="100%" height="auto"></iframe>
        </div>
        <div class="h-auto detailContent text-center">
          <div class="logoicon jumbotron">
            <div class="logo">
              <img src="../../assets/artboard-2-copy.png">
            </div>
            <div class="iconSocial">
              <a href="#"><img src="../../assets/group-11.png" alt=""></a>
              <a href="#"><img src="../../assets/group-11.png" alt=""></a>
              <a href="#"><img src="../../assets/group-11.png" alt=""></a>
            </div>
          </div>
          <div class="naviFooter">
            <ul>
              <li>Home</li>
              <li>Services</li>
              <li>Our Products</li>
              <li>About us</li>
              <li>Contact</li>
              <li>Meet the founder</li>
            </ul>
          </div>
          <div class="smallInformation">
            <ul>
              <li><img src="../../assets/callIcon.svg" alt="">
                <p class="companyInformation">sevenhillsltd@gmail.com</p>
              </li>
              <li><img src="../../assets/callIcon.svg" alt="">
                <p class="companyInformation">+84 875 789 287</p>
              </li>
              <li><img src="../../assets/callIcon.svg" alt="">
                <p class="last companyInformation">9 AM - 6 PM</p>
              </li>
            </ul>
          </div>
          <div class="footer-link icon-hover text-center">
            <a href="https://www.facebook.com/JaunieKASS">© 2018 Design By Trang's Team</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'panelFooter'
}
</script>

<style scoped lang="scss">
  footer {
    box-shadow: 0 -3px 8px 0 rgba(0, 0, 0, 0.1);
    background-color: #ffffff;
    .footerContent {
      padding: 1rem;
      margin: 0 auto;

      .childFooter {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-around;
        align-items: center;
        align-content: flex-start;
        @media (max-width: 479px) {
          .map, .detailContent {
            width: 50%;
          }
        }
      }
      .detailContent {
        .jumbotron {
          padding: 1rem;
          margin: 0;
          display: flex;
          .logo {
            padding-right: 2rem;
          }
          a {
            padding: 0 .5rem;
          }
          @media (max-width: 991px) {
            padding: 2rem 0rem;
            display: block;
            .logo {
              width: 100%;
            }
            .iconSocial {
              padding-top: 1rem;
            }
          }
        }
        .smallInformation {
          ul {
            margin-top: 10px;
            padding: 0px;
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: flex-start;
            align-items: center;
            align-content: flex-start;
            li {
              padding-left: 10px;
              p {
                padding-right: 20px;
                margin-left: 10px;
                padding-top: 4px;
                text-align: right;
                display: inline-block;
                color: #005c13;
                border-right: 1px solid #005c13;
              }
              @media (max-width: 480px) {
                p {
                  display: none;
                }
              }
              .last {
                border-right: none;
              }
            }
          }
        }
        @media (max-width: 992px) {
          .detailContent {
            padding-right: 0;
          }
          .detailContent,
          .map {
            float: none;
          }
        }
        @media (max-width: 480px) {
          text-align: center;
        }
      }
      .naviFooter {
        ul {
          margin-left: 0px !important;
          padding-left: 0px !important;
          li {
            padding: 12px;
            font-family: Roboto;
            font-size: 1.1rem;
            font-weight: 300;
            font-style: normal;
            font-stretch: normal;
            line-height: 0.8;
            letter-spacing: normal;
            color: #222222;
          }
        }
      }
      @media (max-width: 991px) {
        .naviFooter,
        .smallInformation {
          display: none;
        }
        .detailContent {
          @media (min-width: 768px) {
            padding-left: 2rem;
            .logo {
              padding: 0;
            }
          }
        }
      }
    }
  }

</style>
