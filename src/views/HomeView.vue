<script setup lang="ts">
// import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <div class="splash-container">
    <div class="splash">
      <h1>Electronics</h1>
    </div>
  </div>
  <main class="wrapper">
    <h1>Recommended</h1>

    <div class="product-list">
      <div class="card product d-inline-block" style="width: 18rem;">
        <div class="product-img-container">
          <img src="/public/products/p0001.jpg" class="card-img-top" alt="p0001.jpg">
        </div>
        <div class="card-body">
          <h5 class="card-title">Product 1</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Type: Camera</li>
            <li class="list-group-item">Price: $889.95</li>
            <li class="list-group-item">
              <div class="d-flex flex-row">
                <label>
                  Quantity: <input type="number" class="prod-qty" value="0"/>
                </label>
              </div>
            </li>
          </ul>
          <div class="card-body text-center">
            <a href="#" class="btn btn-primary">Add to Cart</a>
          </div>
        </div>
      </div>

      <div class="card product d-inline-block" style="width: 18rem;">
        <div class="product-img-container">
          <img src="/public/products/p0002.jpg" class="card-img-top" alt="p0002.jpg">
        </div>
        <div class="card-body">
          <h5 class="card-title">Product 2</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Type: Device</li>
            <li class="list-group-item">Price: $1000.00</li>
            <li class="list-group-item">
              <div class="d-flex flex-row">
                <label>
                  Quantity: <input type="number" class="prod-qty" value="0"/>
                </label>
              </div>
            </li>
          </ul>
          <div class="card-body text-center">
            <a href="#" class="btn btn-primary">Add to Cart</a>
          </div>
        </div>
      </div>

      <div class="card product d-inline-block" style="width: 18rem;">
        <div class="product-img-container">
          <img src="/public/products/p0003.jpg" class="card-img-top" alt="p0003.jpg">
        </div>
        <div class="card-body">
          <h5 class="card-title">Product 3</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Type: Device</li>
            <li class="list-group-item">Price: $1299.99</li>
            <li class="list-group-item">
              <div class="d-flex flex-row">
                <label>
                  Quantity: <input type="number" class="prod-qty" value="0"/>
                </label>
              </div>
            </li>
          </ul>
          <div class="card-body text-center">
            <a href="#" class="btn btn-primary">Add to Cart</a>
          </div>
        </div>
      </div>

      <div class="card product d-inline-block" style="width: 18rem;">
        <div class="product-img-container">
          <img src="/public/products/p0004.jpg" class="card-img-top" alt="p0004.jpg">
        </div>
        <div class="card-body">
          <h5 class="card-title">Product 4</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Type: Peripherals</li>
            <li class="list-group-item">Price: $399.90</li>
            <li class="list-group-item">
              <div class="d-flex flex-row">
                <label>
                  Quantity: <input type="number" class="prod-qty" value="0"/>
                </label>
              </div>
            </li>
          </ul>
          <div class="card-body text-center">
            <a href="#" class="btn btn-primary">Add to Cart</a>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style>
main {
  min-height: 1000px;
}
.splash-container {
    width: 100%;
    max-height: 300px;
    background-color: var(--bs-gray-800);
    background-image: url("/public/splash.jpg");
    background-position: center center;
    background-size: cover
}

.splash {
    display: flex;
    justify-content: center;
    height: 100%;
}

.splash h1 {
    align-self: center;
    color: var(--splashTextColor);
    font-family: Modak, tahoma, sans-serif;
    font-size: 10vw;
    text-align: center;
    text-shadow: 0px 0px 20px var(--splashTextShadow);
    opacity: 0.9
}

.prod-qty {
  width: 4rem;
}
</style>
