<template>
  <!-- ========== Left Sidebar Start ========== -->
  <!-- side bar start -->
  <div
    class="offcanvas sidebar-offcanvas offcanvas-start"
    tabindex="-1"
    id="offcanvasLeft"
  >
    <div class="offcanvas-header">
      <img
        class="img-fluid img"
        alt="pro11"
      />
      <h3>Elon Musk</h3>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <div class="sidebar-content">
        <ul class="link-section">
          <li class="menu-title">Menu</li>
          <SidebarItem
            name="Dashboard"
            :url="route(`${is_admin ? 'admin' : 'user'}.index`)"
            icon="layers"
          />
          <SidebarItem
            name="Wallet"
            :url="route('user.wallet')"
            icon="shopping-bag"
            v-if="!is_admin"
          />
          <SidebarItem
            name="Users"
            :url="route('admin.users.index')"
            icon="users"
            v-if="is_admin"
          />
          <SidebarItem
            name="KYC verification"
            :url="route('admin.kyc.index')"
            icon="user-x"
            v-if="is_admin"
          />
          
          <li class="menu-title">Transactions</li>
          <SidebarItem
            name="Send"
            :url="route('user.send')"
            icon="send"
            v-if="!is_admin"
          />
          <SidebarItem
            :name="`${is_admin ? 'All Purchases' : 'Buy Coin'}`"
            :url="route(`${is_admin ? 'admin.deposits.index' : 'user.deposits.create'}`)"
            icon="credit-card"
          />
          <SidebarItem
            name="Withdrawals"
            :url="route('admin.withdrawals.index')"
            icon="dollar-sign"
            v-if="is_admin"
          />
          <SidebarItem
            name="Transfers"
            :url="route('admin.transfers.index')"
            icon="dollar-sign"
            v-if="is_admin"
          />
          <SidebarItem
            name="Withdrawals"
            :url="route('user.withdrawals.index')"
            icon="dollar-sign"
            v-if="!is_admin"
          />
          <SidebarItem
            name="Transactions"
            :url="route('user.send.index')"
            icon="dollar-sign"
            v-if="!is_admin"
          />
          <SidebarItem
            name="Request Withdrawal"
            :url="route('user.withdrawals.create')"
            icon="shopping-bag"
            v-if="!is_admin"
          />

          <li class="menu-title" v-if="is_admin">Communication</li>
          <SidebarItem
            name="Send Email"
            :url="route('admin.mail.index')"
            icon="mail"
            v-if="is_admin"
          />
          <SidebarItem
            name="Notifications"
            :url="route('admin.notification.index')"
            icon="bell"
            v-if="is_admin"
          />
          <li class="menu-title">Settings</li>

          <SidebarItem
            name="My Profile"
            :url="route('user.profile.view')"
            icon="user"
            v-if="!is_admin"
          />
          <SidebarItem
            name="Password reset"
            :url="route('password.change')"
            icon="lock"
          />
          
          <SidebarItem
            name="Add Coins"
            :url="route('admin.payment-method.index')"
            icon="plus-square"
            v-if="is_admin"
          />
         
          <hr />
          <SidebarItem
            name="Logout"
            method="post"
            :url="route('logout')"
            icon="power"
          />
          <SidebarItem
            name="Home"
            :url="route('front.index')"
            icon="home"
            :raw="true"
          />
        </ul>
      </div>
    </div>
  </div>
  <!-- side bar end -->
  <!-- Left Sidebar End -->
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
</template>

<script setup>
import { computed, onMounted } from "vue";
import feather from "feather-icons";
// import MetisMenu from "metismenujs";
import SidebarItem from "./sidebarItem.vue";
import { usePage } from "@inertiajs/vue3";

const is_admin = computed(() => usePage().props.auth.user.is_admin == 1);

const botsMenu = computed(() =>
  is_admin == true ? "Trade Bots" : "Trade Bot"
);
const stakes = computed(() => (is_admin == true ? "All Stakes" : "My Stakes"));

onMounted((_) => {
  // new MetisMenu("#side-menu");
  feather.replace();
});
</script>

<style>
</style>
