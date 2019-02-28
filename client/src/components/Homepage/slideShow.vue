<template>
  <div class="slideShow">
    <div id="touchSlider" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#touchSlider" data-slide-to="0" class="active"></li>
        <li data-target="#touchSlider" data-slide-to="1"></li>
        <li data-target="#touchSlider" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100" src="../../assets/group-18.jpg" alt="First slide">
          <div class="carousel-caption d-none d-md-block mr-auto ml-auto blockCenterdiv w-50">
            <h2>Lorem Ipsum is simply</h2>
            <p>Lorem Ipsum has been the industry's standard dummy text ever since the
              1500s,
              when an unknown printer took a galley of type and scrambled it to make
              a
              type specimen book. It has survived not only five centuries, but also
              the
              leap into electronic typesetting, remaining essentially unchanged.</p>
            <a href="#" class="btn">
              <span class="btn-inner">Contact Us</span>
            </a>
          </div>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="../../assets/group-18.jpg" alt="First slide">
          <div class="carousel-caption d-none d-md-block mr-auto ml-auto blockCenterdiv w-50">
            <h2>Lorem Ipsum is simply</h2>
            <p>Lorem Ipsum has been the industry's standard dummy text ever since the
              1500s,
              when an unknown printer took a galley of type and scrambled it to make
              a
              type specimen book. It has survived not only five centuries, but also
              the
              leap into electronic typesetting, remaining essentially unchanged.</p>
            <a href="#" class="btn">
              <span class="btn-inner">Contact Us</span>
            </a>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#touchSlider" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#touchSlider" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    <panel-width-moble type-panel="textPanel" header-panel="Lorem Ipsum is simply" content-panel="Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s,
        when an unknown printer took a galley of type and scrambled it to make
        a
        type specimen book. It has survived not only five centuries, but also
        the
        leap into electronic typesetting, remaining essentially unchanged." button-label="Contact Us" />
  </div>
</template>

<script>
import PanelWidthMoble from './panelWidthMoble'
import { TweenMax, Power3 } from 'gsap/TweenMax'

export default {
  name: 'slideShow',
  components: { PanelWidthMoble },
  data () {
    return {
      panelText: 'true'
    }
  },
  mounted () {
    var slideshowDuration = 3000
    var slideshow = $('.main-content .slideshow')

    function slideshowSwitch (slideshow, index, auto) {
      if (slideshow.data('wait')) return

      var slides = slideshow.find('.slide')
      // var pages = slideshow.find('.pagination')
      var activeSlide = slides.filter('.is-active')
      var activeSlideImage = activeSlide.find('.image-container')
      var newSlide = slides.eq(index)
      var newSlideImage = newSlide.find('.image-container')
      var newSlideContent = newSlide.find('.slide-content')
      var newSlideElements = newSlide.find('.caption > *')
      if (newSlide.is(activeSlide)) return

      newSlide.addClass('is-new')
      var timeout = slideshow.data('timeout')
      clearTimeout(timeout)
      slideshow.data('wait', true)
      var transition = slideshow.attr('data-transition')
      var newSlideRight = null
      var newSlideLeft = null
      var newSlideImageRight = null
      var newSlideImageLeft = null
      var newSlideImageToRight = null
      var newSlideImageToLeft = null
      var newSlideContentLeft = null
      var newSlideContentRight = null
      var activeSlideImageLeft = null
      if (transition === 'fade') {
        newSlide.css({
          display: 'block',
          zIndex: 2
        })
        newSlideImage.css({
          opacity: 0
        })

        TweenMax.to(newSlideImage, 1, {
          alpha: 1,
          onComplete: function () {
            newSlide.addClass('is-active').removeClass('is-new')
            activeSlide.removeClass('is-active')
            newSlide.css({ display: '', zIndex: '' })
            newSlideImage.css({ opacity: '' })
            slideshow.find('.pagination').trigger('check')
            slideshow.data('wait', false)
            if (auto) {
              timeout = setTimeout(function () {
                slideshowNext(slideshow, false, true)
              }, slideshowDuration)
              slideshow.data('timeout', timeout)
            }
          } })
      } else {
        if (newSlide.index() > activeSlide.index()) {
          newSlideRight = 0
          newSlideLeft = 'auto'
          newSlideImageRight = -slideshow.width() / 8
          newSlideImageLeft = 'auto'
          newSlideImageToRight = 0
          newSlideImageToLeft = 'auto'
          newSlideContentLeft = 'auto'
          newSlideContentRight = 0
          activeSlideImageLeft = -slideshow.width() / 4
        } else {
          newSlideRight = ''
          newSlideLeft = 0
          newSlideImageRight = 'auto'
          newSlideImageLeft = -slideshow.width() / 8
          newSlideImageToRight = ''
          newSlideImageToLeft = 0
          newSlideContentLeft = 0
          newSlideContentRight = 'auto'
          activeSlideImageLeft = slideshow.width() / 4
        }

        newSlide.css({
          display: 'block',
          width: 0,
          right: newSlideRight,
          left: newSlideLeft,
          zIndex: 2
        })

        newSlideImage.css({
          width: slideshow.width(),
          right: newSlideImageRight,
          left: newSlideImageLeft
        })

        newSlideContent.css({
          width: slideshow.width(),
          left: newSlideContentLeft,
          right: newSlideContentRight
        })

        activeSlideImage.css({
          left: 0
        })

        TweenMax.set(newSlideElements, { y: 20, force3D: true })
        TweenMax.to(activeSlideImage, 1, {
          left: activeSlideImageLeft,
          ease: Power3.easeInOut
        })

        TweenMax.to(newSlide, 1, {
          width: slideshow.width(),
          ease: Power3.easeInOut
        })

        TweenMax.to(newSlideImage, 1, {
          right: newSlideImageToRight,
          left: newSlideImageToLeft,
          ease: Power3.easeInOut
        })

        TweenMax.staggerFromTo(newSlideElements, 0.8, { alpha: 0, y: 60 }, { alpha: 1, y: 0, ease: Power3.easeOut, force3D: true, delay: 0.6 }, 0.1, function () {
          newSlide.addClass('is-active').removeClass('is-new')
          activeSlide.removeClass('is-active')
          newSlide.css({
            display: '',
            width: '',
            left: '',
            zIndex: ''
          })

          newSlideImage.css({
            width: '',
            right: '',
            left: ''
          })

          newSlideContent.css({
            width: '',
            left: ''
          })

          newSlideElements.css({
            opacity: '',
            transform: ''
          })

          activeSlideImage.css({
            left: ''
          })

          slideshow.find('.pagination').trigger('check')
          slideshow.data('wait', false)
          if (auto) {
            timeout = setTimeout(function () {
              slideshowNext(slideshow, false, true)
            }, slideshowDuration)
            slideshow.data('timeout', timeout)
          }
        })
      }
    }

    function slideshowNext (slideshow, previous, auto) {
      var slides = slideshow.find('.slide')
      var activeSlide = slides.filter('.is-active')
      var newSlide = null
      if (previous) {
        newSlide = activeSlide.prev('.slide')
        if (newSlide.length === 0) {
          newSlide = slides.last()
        }
      } else {
        newSlide = activeSlide.next('.slide')
        if (newSlide.length === 0) { newSlide = slides.filter('.slide').first() }
      }

      slideshowSwitch(slideshow, newSlide.index(), auto)
    }

    function homeSlideshowParallax () {
      var scrollTop = $(window).scrollTop()
      if (scrollTop > window.innerHeight) return
      var inner = slideshow.find('.slideshow-inner')
      var newHeight = window.innerHeight - (scrollTop / 2)
      var newTop = scrollTop * 0.8

      inner.css({
        transform: 'translateY(' + newTop + 'px)', height: newHeight
      })
    }

    $(document).ready(function () {
      $('.slide').addClass('is-loaded')

      $('.slideshow .arrows .arrow').on('click', function () {
        slideshowNext($(this).closest('.slideshow'), $(this).hasClass('prev'))
      })

      $('.slideshow .pagination .item').on('click', function () {
        slideshowSwitch($(this).closest('.slideshow'), $(this).index())
      })

      $('.slideshow .pagination').on('check', function () {
        var slideshow = $(this).closest('.slideshow')
        var pages = $(this).find('.item')
        var index = slideshow.find('.slides .is-active').index()
        pages.removeClass('is-active')
        pages.eq(index).addClass('is-active')
      })

      /* Lazyloading
    $('.slideshow').each(function(){
      var slideshow=$(this);
      var images=slideshow.find('.image').not('.is-loaded');
      images.on('loaded',function(){
        var image=$(this);
        var slide=image.closest('.slide');
        slide.addClass('is-loaded');
      });
    */

      var timeout = setTimeout(function () {
        slideshowNext(slideshow, false, true)
      }, slideshowDuration)

      slideshow.data('timeout', timeout)
    })

    if ($('.main-content .slideshow').length > 1) {
      $(window).on('scroll', homeSlideshowParallax)
    }
  }
}
</script>

<style scoped lang="scss">

  .slideShow {
    letter-spacing: 0.05em;
    .btn {
      display: inline-block;
      padding: 1rem 1rem;
      color: #fff;
      text-decoration: none;
      position: relative;
      background: transparent;
      background: #f7890b;
      letter-spacing: 0.4em;
      text-align: center;
      text-indent: 2px;
      text-transform: uppercase;
      transition: color 0.1s linear 0.05s;
      font-size: .8rem;
      &::before {
        content: "";
        display: block;
        position: absolute;
        top: 50%;
        left: 0;
        width: 100%;
        height: 1px;
        background: #f7890b;
        z-index: 1;
        opacity: 0;
        transition: height 0.2s ease, top 0.2s ease, opacity 0s linear 0.2s;
      }
      &::after {
        transition: border 0.1s linear 0.05s;
      }
      .btn-inner {
        position: relative;
        z-index: 2;
      }
      &:hover {
        color: #fff;
        transition: color 0.1s linear 0s;
        &::before {
          top: 0;
          height: 100%;
          opacity: 1;
          transition: height 0.2s ease, top 0.2s ease, opacity 0s linear 0s;
        }
        &::after {
          border-color: #373737;
          transition: border 0.1s linear 0s;
        }
      }
    }
    .btn:hover {
      cursor: pointer;
      transition: 0.2s;
      background: rgba(255, 255, 255, 0.5);
      box-shadow: rgba(255, 255, 255, 0.3) 2px 2px 20px 0px;
    }
    h2 {
      font-size: 3.8rem !important;
    }
    p {
      font-size: 1rem;
      font-weight: 300;
    }
    .btn {
      padding: .5rem 1rem;
      margin-top: 1.5rem;
    }
    .carousel-caption {
      bottom: 9rem;
      margin-bottom: 0;
    }
    @media (max-width: 1070px) {
      h2 {
        font-size: 3.5rem;
      }
      p {
        font-size: .6rem;
      }
      .carousel-caption {
        bottom: 1rem;
      }
    }
  }

  .itemMobile {
    display: none;
    padding: 2rem 2rem 0;
    @media (max-width: 767px) {
      display: block;
    }
    .btn-inner:hover {
      color: white;
    }
  }

</style>
