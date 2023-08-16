<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <!-- Nav bar -->
  <header class="sticky-top">
    <nav class="navbar navbar-expand-lg bg-body-secondary">
      <div class="container-fluid">

        <!-- Logo -->
        <a class="navbar-brand" href="#">
          <img src="/logo.svg" alt="EC Site logo" width="30" height="24">
        </a>

        <!-- Nav items -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbar">
          <!-- Left align -->
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <RouterLink :to="{ name: 'home', params: { locale: $route.params.locale }}" class="nav-link active">{{ $t("message.nav_home") }}</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink :to="{ name: 'all_products', params: { locale: $route.params.locale }}" class="nav-link">{{ $t("message.nav_products") }}</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink :to="{ name: 'order_history', params: { locale: $route.params.locale }}" class="nav-link">{{ $t("message.nav_orders") }}</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink :to="{ name: 'about', params: { locale: $route.params.locale }}" class="nav-link">{{ $t("message.nav_about") }}</RouterLink>
            </li>
          </ul>
          <!-- Right align -->
          <ul class="navbar-nav">
            <li class="nav-item">
              <div id="lang" class="dropdown">
                <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  lang
                </button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item active" href="#">en</a></li>
                  <li><a class="dropdown-item" href="#">ja</a></li>
                </ul>
              </div>
            </li>
            <li class="nav-item">
              <div class="dropdown">
                <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i class="bi bi-cart4 mx-1"></i>
                  {{ $t("message.nav_cart") }}<sup>(0)</sup>
                </button>
                <ul id="cart-dropdown" class="dropdown-menu">
                  <li>
                    <h4>Items in Cart</h4>
                  </li>
                  <li>
                    <div class="d-flex">
                      <div class="cart-img-container">
                        <img src="/public/products/p0001.jpg" class="" alt="p0001.jpg">
                      </div>
                      <div class="d-flex flex-grow-1">
                        <div class="details d-flex align-items-stretch flex-column" href="#">
                          <p>Price: $123.23</p>
                          <p>Qty: 1</p>
                        </div>
                      </div>
                      <button class="btn btn-secondary align-self-start">&times;</button>
                    </div>
                  </li>
                  <li>
                    <div class="d-flex">
                      <div class="cart-img-container">
                        <img src="/public/products/p0002.jpg" class="" alt="p0001.jpg">
                      </div>
                      <div class="d-flex flex-grow-1">
                        <div class="details d-flex align-items-stretch flex-column" href="#">
                          <p>Price: $234.43</p>
                          <p>Qty: 3</p>
                        </div>
                      </div>
                      <button class="btn btn-secondary align-self-start">&times;</button>
                    </div>
                  </li>

                  <li><div class="d-flex justify-content-end"><a href="#" class="btn btn-primary">Checkout</a></div></li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        
      </div>
    </nav>
  </header>

  <RouterView />

  <footer class="d-block m-0 p-0">
    <nav class="navbar bg-body-secondary">
      <div class="container-fluid">
        <span class="m-0">Powered by VueJS</span>
      </div>
    </nav>
  </footer>

</template>

<style scoped>
#cart-dropdown {
  width: var(--cartDropdownWidth);
  min-width: 15rem;
  left: calc(7rem - var(--cartDropdownWidth));
}

#cart-dropdown > li {
  padding: 1rem;
}

#cart-dropdown img {
  max-width: 10rem;
}

#cart-dropdown .details {
  margin: 1rem;
}

footer {
  font-size: 0.8rem;
}
</style>