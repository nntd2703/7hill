<template>
  <div class="productCategory container-fluid  p-4">
    <div class="headerCategory flex-column p-md-2">
      <img src="../../assets/categoryImg.svg" alt="">
      <h2>Product Categories</h2>
    </div>
    <div class="contentCategory d-flex">
      <ul class="list-group col-md-twenty productDetails p-2">
        <li class="list-group-item active headerGroupItem" data-toggle="collapse">Food Grains and Allied Products
        </li>
        <div class="listItemCollapse0">
          <li class="list-group-item">Pulses</li>
          <li class="list-group-item">Lentils</li>
          <li class="list-group-item">Rice</li>
          <li class="list-group-item">Gram</li>
          <li class="list-group-item">Wheat</li>
          <li class="list-group-item">Wheat Flour</li>
          <li class="list-group-item">Suji</li>
          <li class="list-group-item">Maida</li>
          <li class="list-group-item">Kabuli Channa</li>
          <li class="list-group-item">Black Channa</li>
          <li class="list-group-item">Pigeon beans</li>
          <li class="list-group-item">Kidney beans</li>
        </div>
      </ul>
      <ul class="list-group col-md-twenty productDetails p-2">
        <li class="list-group-item active headerGroupItem" data-toggle="collapse">Edible Nuts</li>
        <div class="listItemCollapse1">
          <li class="list-group-item">Cashew Kernels</li>
        </div>
        <li class="list-group-item active headerGroupItem" data-toggle="collapse">Spices</li>
        <div class="listItemCollapse2">
          <li class="list-group-item">Black Pepper</li>
          <li class="list-group-item">White Pepper</li>
          <li class="list-group-item">Star Anise Seeds</li>
          <li class="list-group-item">Cassia</li>
          <li class="list-group-item">Cinnamon</li>
        </div>
        <li class="list-group-item active headerGroupItem" data-toggle="collapse">Industrial Chemicals</li>
        <li class="list-group-item active headerGroupItem" data-toggle="collapse">Pottery & Handicrafts</li>
        <li class="list-group-item active headerGroupItem" data-toggle="collapse">Machinery & Raw Materials</li>
      </ul>
      <ul class="list-group col-md-twenty productDetails p-2">
        <li class="list-group-item active headerGroupItem" data-toggle="collapse">Other Products</li>
        <div class="listItemCollapse6">
          <li class="list-group-item">Guar Gum</li>
          <li class="list-group-item">Desiccated coconut</li>
          <li class="list-group-item">Cocoa Beans & Powder</li>
          <li class="list-group-item">Tapioca</li>
          <li class="list-group-item">Glucose</li>
          <li class="list-group-item">Corn Starch</li>
        </div>
        <li class="list-group-item active headerGroupItem" data-toggle="collapse">Agricultural Commodities</li>
        <li class="list-group-item active headerGroupItem" data-toggle="collapse">Spices and Condiments</li>
        <div class="listItemCollapse8">
          <li class="list-group-item">Red Chillies</li>
          <li class="list-group-item">Turmeric Fingers</li>
          <li class="list-group-item">Sun dried mango slices</li>
          <li class="list-group-item">Mango dry powder</li>
          <li class="list-group-item">Fresh&Dry Ginger</li>
        </div>
      </ul>
      <ul class="list-group col-md-twenty productDetails p-2">
        <li class="list-group-item active headerGroupItem" data-toggle="collapse">Oil seeds</li>
        <div class="listItemCollapse9">
          <li class="list-group-item">Soyabean</li>
          <li class="list-group-item">Ground Nut</li>
          <li class="list-group-item">Rapeseeds</li>
          <li class="list-group-item">Cotton</li>
          <li class="list-group-item">Castor</li>
          <li class="list-group-item">Sunflower</li>
          <li class="list-group-item">Sesame</li>
          <li class="list-group-item">Linseed</li>
        </div>
      </ul>
      <ul class="list-group col-md-twenty productDetails p-2">
        <li class="list-group-item active headerGroupItem" data-toggle="collapse">Live Stock , Frozen Meat, Sea
          Food,
          Dairy & Poultry Products,
          Dairy Equipments
        </li>
        <li class="list-group-item active headerGroupItem" data-toggle="collapse">Agro Chemicals</li>
        <li class="list-group-item active headerGroupItem" data-toggle="collapse">Pharmaceuticals</li>
        <li class="list-group-item active headerGroupItem" data-toggle="collapse">Textile Products and apparels</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'panelCategories',
  mounted () {
    $(document).ready(function () {
      hideListItemCategory()
    })

    window.onload = () => {
      hideListItemCategory()
    }
    window.onresize = () => {
      hideListItemCategory()
    }

    function hideListItemCategory () {
      var header = document.getElementsByClassName('headerGroupItem')
      var contentCategory = document.getElementsByClassName('contentCategory')
      var itemCollapse; var i = null
      if ($(window).width() <= 767) {
      // header.setAttribute("data-toggle", "collapse");
      // header.setAttribute("data-target", "#listItem");
      // item.classList.add("collapse");
        for (i = 0; i < header.length; i++) {
          header[i].setAttribute('data-target', '#listItem' + i)
          itemCollapse = document.getElementsByClassName('listItemCollapse' + i)
          if (itemCollapse && itemCollapse.length !== 0) {
            itemCollapse[0].setAttribute('id', 'listItem' + i)
            itemCollapse[0].classList.add('collapse')
          }
        }
        contentCategory[0].classList.add('flex-column')
      } else {
        for (i = 0; i < header.length; i++) {
          itemCollapse = document.getElementsByClassName('listItemCollapse' + i)
          if (itemCollapse.length !== 0) {
            itemCollapse[0].removeAttribute('id')
            itemCollapse[0].classList.remove('collapse')
          }
          header[i].removeAttribute('data-target')
        }
        contentCategory[0].classList.remove('flex-column')
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .productCategory {
    .headerCategory {
      img {
        width: 7%;
      }
      h2 {
        padding-left: 15px;
        display: inline-block;
        text-transform: uppercase;
        color: #444444;
        font-weight: 500;
        font-size: 1.9rem !important;
      }
      @media (max-width: 991px) {
        img {
          width: 75px;
        }
        h2 {
          font-size: 1.5rem;
        }
      }
      @media (max-width: 767px) {
        padding-top: 1.5rem;
        img {
          width: 70px;
        }
      }
    }
    .contentCategory {
      @media (min-width: 785px) {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-around;
        align-items: flex-start;
        align-content: space-between;
      }
      .productDetails {
        border-top: 0 none;
        .active {
          border: none;
          background: none;
          color: #222222;
          font-weight: 500;
          font-size: 1.2rem !important;
          font-family: Roboto;
          .open {
            -moz-transform: rotate(180deg);
            -ms-transform: rotate(180deg);
            -o-transform: rotate(180deg);
            -webkit-transform: rotate(180deg);
            transform: rotate(180deg);
          }
        }
        .active::after {
          display: block;
          float: left;
          content: '';
          width: 0;
          height: 0;
          border-left: 8px solid transparent;
          border-right: 8px solid transparent;
          border-top: 8px solid #a0a0a0;
          position: absolute;
          right: 1rem;
          top: 1rem;
          @media (min-width: 768px) {
            display: none;
          }
        }
        .list-group-item {
          font-family: Roboto;
          padding: .2rem;
          border: none;
          font-size: 1rem;
        }
        @media (max-width: 767px) {
          .list-group-item {
            width: 100%;
            font-size: .9rem;
            font-family: Roboto;
          }
        }
      }
    }
  }
</style>
