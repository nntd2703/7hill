<template>
  <div class="panelAbout">
    <div class="panelContent">
      <div class="container-fluid p-0">
        <section class="no-gutter align-items-center contentNormal">
          <div class="text-center d-flex align-items-center paral panelImage">
            <div class="position-absolute my-auto content">
              <h1 class="text-white">About Seven Hills Trading LTD Company</h1>
              <p class="text-white">It is a long established fact that a reader will be distracted by the
                readable
                content of a
                page when looking at its layout. The point of using Lorem Ipsum is that it has a
                more-or-less normal distribution of letters. as opposed to using.</p>
              <input class="btn mt-4" type="submit" value="See More" id="btnTest">
            </div>
          </div>
        </section>
      </div>
    </div>
    <panel-width-moble type-panel="textPanel" header-panel="About Seven Hills Trading LTD Company" content-panel="It is a long established fact that a reader will be distracted by the readable content
                    of a
                    page when looking at its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters. as opposed to using." button-label="See More"/>
  </div>
</template>

<script>
import PanelWidthMoble from './panelWidthMoble'
export default {
  name: 'panelContentAbout',
  components: { PanelWidthMoble }
}
</script>

<style scoped lang="scss">
  .panelAbout {
    .panelContent {
      position: relative;
      display: block;
      .panelImage{
        min-height: 400px;
        background-image: url("../../assets/panelContent.png");
      }
      .content {
        position: absolute;
        visibility: visible;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        z-index: 2;
        p {
          font-size: 1rem;
          font-weight: 300;
        }
        a:hover {
          cursor: pointer;
          transition: 0.2s;
          background: rgba(255, 255, 255, 0.5);
          box-shadow: rgba(255, 255, 255, 0.3) 2px 2px 20px 0px;
        }
        h1 {
          @media (max-width: 1023px) {
            font-size: 2.5rem;
          }
          @media (max-width: 767px) {
            font-size: 2rem;
          }
        }
        p,
        a {
          @media (max-width: 1200px) {
            font-size: 85% !important;
          }
          @media (max-width: 850px) {
            font-size: 70% !important;
          }
        }
      }
      @media (max-width: 1200px) {
        .content {
          height: auto;
          width: 90%;
        }
      }
      @media (max-width: 767px) {
        .content {
          display: none;
        }
      }
    }
    .panelContent::after {
      width: 100%;
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: linear-gradient(to bottom, rgba(0, 0, 0, 0), #000000);
    }

  }

</style>
