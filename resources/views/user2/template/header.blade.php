<!DOCTYPE html>
<html lang="en">

<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="nfty" />
  <meta name="keywords" content="nfty" />
  <meta name="author" content="nfty" />
  <link rel="manifest" href="./manifest.json" />
  <link rel="icon" href="{{ asset('usercss/images/logo/logo.png')}}" type="image/x-icon" />
  <title>Dashboard {{ config('app.name')}}</title>
  <link rel="icon" href="{{ asset('usercss/images/logo/logo.png')}}" type="image/x-icon" />
  <link rel="apple-touch-icon" href="{{ asset('usercss/images/logo/logo.png')}}" />
  <meta name="theme-color" content="#205dee" />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-status-bar-style" content="black" />
  <meta name="apple-mobile-web-app-title" content="nfty" />
  <meta name="msapplication-TileImage" content="{{ asset('usercss/assets/images/logo/logo.png')}}" />
  <meta name="msapplication-TileColor" content="#FFFFFF" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />

  <!--Google font-->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap"
    rel="stylesheet" />

  <link
    href="https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
    rel="stylesheet" />

  <!-- bootstrap css -->
  <link rel="stylesheet" id="rtl-link" type="text/css" href="{{ asset('usercss/css/vendors/bootstrap.css')}}" />
  <!-- remixicon css -->
  <link rel="stylesheet" type="text/css" href="{{ asset('usercss/css/vendors/remixicon.css')}}" />

  <!-- Theme css -->
  <link rel="stylesheet" id="change-link" type="text/css" href="{{ asset('usercss/assets/css/style.css')}}" />
  <!-- Fontawesome -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.2.1/css/fontawesome.min.css" integrity="sha384-QYIZto+st3yW+o8+5OHfT6S482Zsvz2WfOzpFSXMF9zqeLcFV0/wlZpMtyFcZALm" crossorigin="anonymous">
</head>

<body>

  <!-- loader start-->
  <!-- <div class="loader-wrapper" id="loader">
    <div class="loader text-light">
      <span>P</span>
      <span>R</span>
      <span>I</span>
      <span>M</span>
      <span>E</span>
    </div>
  </div> -->
  <!-- loader end -->

  <!-- header start -->
  <header class="section-t-space">
    <div class="custom-container">
      <div class="header-panel">
        <a href="">
          <i class="ri-notification-2-line"></i>
        </a>
        <a href="">
          <i class="ri-equalizer-line"></i>
        </a>
      </div>
    </div>
  </header>
  <!-- header end -->

  <!-- setting section start -->
  <span id="copyResult"></span>
  <section class="section-lg-t-space">
    <div class="custom-container">
      <div class="wallet-profile">
        <h2 style="font-size: 40px;">$104,801.63</h2>
        <h5 class="mt-3" style="font-size: 15px; color: #adb5bd;">Wallet Balance</h5>
      </div>
    </div>
  </section>

  <!-- options starts -->
  <section class="section-t-space">
    <div class="custom-container">
      <div class="wallet-options d-flex align-items-center justify-content-center">
        <ul class="category-slide">
          <li>
            <a style="background-color: transparent;" data-bs-toggle="offcanvas" data-bs-target="#choosecoin" class="category-boxes">
              <img style="background-color: #0b65c6;" class="img-fluid cat-img" src="{{ asset('usercss/images/svg/send.svg')}}" alt="send" />
              <h5>Send</h5>
            </a>
          </li>
          <li>
            <a style="background-color: transparent;" data-bs-toggle="offcanvas" data-bs-target="#choosecoin" class="category-boxes">
              <img style="background-color: #0b65c6;" class="img-fluid cat-img" src="{{ asset('usercss/images/svg/receivewallet.svg')}}" alt="receive" />
              <h5>Receive</h5>
            </a>
          </li>
          <li>
            <a style="background-color: transparent;" href="https://paybis.com/" class="category-boxes">
              <img style="background-color: #0b65c6;" class="img-fluid cat-img" src="{{ asset('usercss/images/svg/shopping-cart.svg')}}" alt="buy" />
              <h5>Buy</h5>
            </a>
          </li>
          <li>
            <a style="background-color: transparent;" data-bs-toggle="modal" data-bs-target="#swap" class="category-boxes">
              <img style="background-color: #0b65c6;" class="img-fluid cat-img" src="{{ asset('usercss/images/svg/arrow-swap.svg')}}" alt="swap" />
              <h5>Swap</h5>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
  <!-- options end -->