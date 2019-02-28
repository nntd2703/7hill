<template>
  <div class="topBar">
    <div class="container">
      <div class="row align-items-center">
        <information-item/>
        <div class="multiLanguage ml-auto">
          <div class="onoffswitch4">
            <input type="checkbox" name="onoffswitch4" class="onoffswitch4-checkbox" id="myonoffswitch4"
                   checked>
            <label class="onoffswitch4-label" for="myonoffswitch4">
              <span class="onoffswitch4-inner"></span>
              <span class="onoffswitch4-switch"></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import InformationItem from './informationItem'
export default {
  components: { InformationItem },
  props: {
    msg: String
  }
}

</script>

<style scoped lang="scss">
  .topBar {
    background-color: #005c13;
    position: relative;
    .multiLanguage {
      margin-top: 6px;
      .onoffswitch4 {
        float: right;
        position: relative;
        width: 90px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
      }
      .onoffswitch4-checkbox {
        display: none;
      }
      .onoffswitch4-label {
        display: block;
        overflow: hidden;
        cursor: pointer; //border: 0.1px solid white;
        border-radius: 0px;
      }
      .onoffswitch4-inner {
        display: block;
        width: 200%;
        margin-left: -100%;
        -moz-transition: margin 0.3s ease-in 0s;
        -webkit-transition: margin 0.3s ease-in 0s;
        -o-transition: margin 0.3s ease-in 0s;
        transition: margin 0.3s ease-in 0s;
      }
      .onoffswitch4-inner:before,
      .onoffswitch4-inner:after {
        display: block;
        float: left;
        width: 50%;
        height: 30px;
        padding: 0;
        line-height: 26px;
        font-size: 1.8rem;
        color: white;
        font-family: Trebuchet, Arial, sans-serif;
        font-weight: bold;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        border: 2px solid transparent;
        background-clip: padding-box;
      }
      .onoffswitch4-inner:before {
        content: "EN";
        padding-left: 30px; //background-color: #005c13;
        color: #ffffff;
        content: url("../../assets/en.png");
      }
      .onoffswitch4-inner:after {
        content: "VN";
        padding-right: 30px; //background-color: #005c13;
        content: url("../../assets/vn.png");
        color: #ffffff;
        text-align: right;
      }
      .onoffswitch4-switch {
        display: block;
        width: 25px;
        margin: 0px;
        position: absolute;
        top: 0;
        bottom: 0;
        right: 65px;
        -moz-transition: all 0.3s ease-in 0s;
        -webkit-transition: all 0.3s ease-in 0s;
        -o-transition: all 0.3s ease-in 0s;
        transition: all 0.3s ease-in 0s;
      }
      .onoffswitch4-checkbox:checked + .onoffswitch4-label .onoffswitch4-inner {
        margin-left: 0;
      }
      .onoffswitch4-checkbox:checked + .onoffswitch4-label .onoffswitch4-switch {
        right: 0px;
      }
    }
    @media (max-width: 768px) {
      padding: 0 1rem;
    }
  }
</style>
