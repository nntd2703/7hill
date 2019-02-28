<template>
  <div class="navigationBar">
    <div class="container">
      <div class="row">
        <nav v-bind:class="[activeClass, optionClass]" id="navbar">
          <a href="/" class="navbar-brand"><img src="../../assets/artboard-2-copy.png"></a>
          <span class="ml-auto imgSearchMobile p-3">
                            <img src="../../assets/search.svg" alt="" class="img-fluid"></span>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                  aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-center w-100" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <router-link to="/"><a class="nav-link" >Home <span class="sr-only">(current)</span></a></router-link>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" ondblclick="renderOurProduct();"
                   id="navbarDropdownMenuLink"
                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Our Product
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><router-link to="/category1"><a class="dropdown-item" href="category1.html">Category 1</a></router-link></li>
                  <li><router-link to="/category2"><a class="dropdown-item" href="category2.html">Category 2</a></router-link></li>
                  <li class="dropdown-submenu"><a class="dropdown-item dropdown-toggle" href="#">Product
                    3</a>
                    <ul class="dropdown-menu">
                      <li><router-link to="/ourproduct"><a class="dropdown-item" href="our-product.html">Our Product</a></router-link></li>
                      <li><a class="dropdown-item" href="#">Product 3.2</a></li>
                      <li class="dropdown-submenu"><a class="dropdown-item dropdown-toggle"
                                                      href="#">Product 3.3</a>
                        <ul class="dropdown-menu">
                          <li><a class="dropdown-item" href="#">Product 3.3.1</a></li>
                          <li><a class="dropdown-item" href="#">Product 3.3.2</a>
                          </li>
                        </ul>
                      </li>
                      <li class="dropdown-submenu"><a class="dropdown-item dropdown-toggle"
                                                      href="#">Product 3.4</a>
                        <ul class="dropdown-menu">
                          <li><a class="dropdown-item" href="#">Product 3.4.1</a></li>
                          <li><a class="dropdown-item" href="#">Product 3.4.2</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <router-link to="/about"><a class="nav-link" href="about.html">About Us</a></router-link>
              </li>
              <li class="nav-item">
                <router-link to="/contactus"><a class="nav-link" href="contact.html">Contact</a></router-link>
              </li>

              <li class="nav-item">
                <router-link to="/pdp"><a class="nav-link" href="pdp.html">Meeting Founder</a></router-link>
              </li>
            </ul>
          </div>
          <span class="ml-auto imgSearch">
                            <img src="../../assets/search.svg" alt="" class="img-fluid"></span>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navigationBar',
  data () {
    return {
      activeClass: 'navbar navbar-expand-lg navbar-light w-100 pl-0 bg-white',
      optionClass: ''
    }
  },
  mounted () {
    var navbar = document.getElementById('navbar')
    var sticky = navbar.offsetTop
    window.onscroll = function () {
      stickNavBar()
    }
    function stickNavBar () {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add('fixed-top')
      } else {
        navbar.classList.remove('fixed-top')
      }
    }

    $('.dropdown-menu a.dropdown-toggle').on('click', function (e) {
      if (!$(this).next().hasClass('show')) {
        $(this).parents('.dropdown-menu').first().find('.show').removeClass('show')
      }
      var $subMenu = $(this).next('.dropdown-menu')
      $subMenu.toggleClass('show')

      $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
        $('.dropdown-submenu .show').removeClass('show')
      })
      return false
    })

    $(document).ready(function () {
      $(document).click(function (event) {
        var clickover = $(event.target)
        var _opened = $('.navbar-collapse').hasClass('show')
        if (_opened === true && !clickover.hasClass('navbar-toggler')) {
          $('.navbar-toggler').click()
        }
      })
    })
  }
}
</script>

<style scoped lang="scss">
  .navigationBar {
    .nav-item {
      padding: 0 2rem;
      text-align: center;
      @media (max-width: 1216px) {
        padding: 0 1rem;
      }
    }
    ul {
      li {
        display: block;
      }
    }
    .nav-link,
    .dropdown-item {
      text-transform: uppercase;
      color: #222222 !important;
      font-family: Roboto;
      font-size: 1.1rem;
      font-weight: 400;
    }
    .dropdown-submenu {
      position: relative;
    }
    .dropdown-submenu a::after {
      transform: rotate(-90deg);
      position: absolute;
      right: 6px;
      top: .8em;
    }
    .dropdown-submenu .dropdown-menu {
      top: 0;
      left: 100%;
      margin-left: .1rem;
      margin-right: .1rem;
    }
    .imgSearch {
      display: none;
      @media (min-width: 992px) {
        display: block;
      }
    }
    .imgSearchMobile {
      display: none;
      @media (max-width: 991px) {
        display: block;
      }
    }
    @media (max-width: 991px) {
      .dropdown-menu {
        border: none;
        text-align: center;
        .dropdown-toggle:after {
          -moz-transform: rotate(360deg);
          -ms-transform: rotate(360deg);
          -o-transform: rotate(360deg);
          -webkit-transform: rotate(360deg);
          transform: rotate(360deg);
        }
      }
    }
  }
</style>
