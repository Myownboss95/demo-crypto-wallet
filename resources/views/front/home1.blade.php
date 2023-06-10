{{-- @include("header") --}}
@include('front.template.header')


<!-- loader start-->
  <div class="loader-wrapper" id="loader">
    <div class="loader text-light">
      <span>P</span>
      <span>R</span>
      <span>I</span>
      <span>M</span>
      <span>E</span>
    </div>
  </div>
  <!-- loader end -->

  <!-- page effect start -->
  <div class="polygon-img">
    <img class="img-fluid left-polygon" src="{{ asset('front/images/svg/polygon2.svg')}} " alt="polygon" />
    <img class="img-fluid top-polygon" src="{{asset('front/images/svg/polygon2.svg')}}" alt="polygon" />
  </div>
  <!-- page effect start -->

  <!-- skip link -->
  <a href="{{route('register')}}" class="skip-link">SKIP</a>
  <!-- skip link -->

  <!-- onboarding section start -->
  <section class="section-lg-t-space">
    <div class="custom-container">
      <div class="swiper intro slider-1">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="index-slider">
              <img class="img-fluid main-img" src="{{asset('front/images/onboarding/icon1.webp')}}" alt="index1" />
              <h1>We have the safest <span>Crypto Cold Storage</span> in the world</h1>
            </div>
            <a href="{{route('register')}}" class="theme-btn btn btn-sm mt-5">Getting Started</a>
          </div>
          <div class="swiper-slide">
            <div class="index-slider">
              <img class="img-fluid main-img" src="{{asset('front/images/onboarding/icon2.webp')}}" alt="index2" />
              <h1><span>Buy</span> and <span> Store</span> crypto</h1>
              <h5>Buy from popular cypto platforms and traders around the world</h5>
              <a href="{{route('register')}}" class="theme-btn btn btn-sm mt-3">Getting Started</a>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="index-slider">
              <img class="img-fluid main-img" src="{{asset('front/images/onboarding/icon3.webp')}}" alt="index3" />
              <h1><span>Send</span> And <span>Receive</span> Crypto Now</h1>
              <h5>Make crypto transactions seemlessly. Fast, Save, Secure and No Fees</h5>
              <a href="{{ route('register')}}" class="theme-btn btn btn-sm mt-3">Getting Started</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- onboarding section end -->

  <!-- bottom panel start -->
  <div class="onboarding-bottom">
    <!-- pagination -->
    <div class="swiper-pagination"></div>
    <!-- next prev buttons -->
    <div class="page-navigation">
      <div class="swiper-button-next">Next</div>
      <div class="swiper-button-prev">Prev</div>
    </div>
  </div>
  <!-- bottom panel end -->

  <!-- panel-space start -->
  <section class="panel-space"></section>
  <!-- panel-space end -->


  <!-- pwa install app popup start
  <div class="offcanvas offcanvas-bottom addtohome-popup theme-offcanvas" tabindex="-1" id="offcanvas">
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    <div class="offcanvas-body small">
      <div class="app-info">
        <img src="front/images/logo/logo.png" class="img-fluid" alt="" />
        <div class="content">
          <h3>Prime Vaut</h3>
          <a href="#">www.primevault.com</a>
        </div>
      </div>
      <a href="#!" class="btn theme-btn install-app btn-inline" id="installApp">Add to Home Screen</a>
    </div>
  </div>
  pwa install app popup end -->
        
        @include('front.template.footer')
