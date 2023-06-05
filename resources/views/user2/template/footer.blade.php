<!-- side bar start -->
  <div class="offcanvas sidebar-offcanvas offcanvas-start" tabindex="-1" id="offcanvasLeft">
    <div class="offcanvas-header">
      <img class="img-fluid img" src="{{ asset('usercss/images/icons/pro11.png')}}" alt="pro11" />
      <h3>Elon Musk</h3>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <div class="sidebar-content">
        <ul class="link-section">
          <li>
            <a href="profile.html" class="pages">
              <h3>My Profile</h3>
              <i class="ri-arrow-drop-right-line"></i>
            </a>
          </li>

          <li>
            <a href="deposit.html" class="pages">
              <h3>Deposit</h3>
              <i class="ri-arrow-drop-right-line"></i>
            </a>
          </li>

          <li>
            <a href="withdraw.html" class="pages">
              <h3>Withdraw</h3>
              <i class="ri-arrow-drop-right-line"></i>
            </a>
          </li>

          <li>
            <a href="link.html" class="pages">
              <h3>Link Wallet</h3>
              <i class="ri-arrow-drop-right-line"></i>
            </a>
          </li>

          <li>
            <a href="signin.html" class="pages">
              <h3>Logout</h3>
              <i class="ri-arrow-drop-right-line"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <!-- side bar end -->

  <!-- bottom navbar start -->
  <div class="navbar-menu">
    <ul>
      <li class="active">
        <a href="dashboard.html">
          <div class="icon">
            <i class="ri-shield-fill active"></i>
            <i class="ri-shield-fill unactive"></i>
          </div>
          <span>Wallet</span>
        </a>
      </li>
      <li>
        <a href="discover.html">
          <div class="icon">
            <i class="ri-compass-3-fill active"></i>
            <i class="ri-compass-3-fill unactive"></i>
          </div>
          <span>Discover</span>
        </a>
      </li>
      <li>
        <a class="plus" data-bs-toggle="offcanvas" data-bs-target="#offcanvasLeft">
          <i class="ri-add-line plus-icon"></i>
        </a>
      </li>
      <li>
        <a href="browser.html">
          <div class="icon">
            <i class="ri-layout-grid-fill active"></i>
            <i class="ri-layout-grid-fill unactive"></i>
          </div>
          <span>Browser</span>
        </a>
      </li>
      <li>
        <a href="settings.html">
          <div class="icon">
            <i class="ri-settings-5-fill active"></i>
            <i class="ri-settings-5-fill unactive"></i>
          </div>
          <span>Settings</span>
        </a>
      </li>
    </ul>
  </div>
  <!-- bottom navbar end -->

  <!-- bootstrap js -->
  <script src="{{ asset('usercss/js/bootstrap.bundle.min.js')}}"></script>

  <!-- toast js  -->
  <script src="{{ asset('usercss/js/toast.js')}}"></script>

  <!-- script js -->
  <script src="{{ asset('usercss/js/script.js')}}"></script>
</body>

</html>