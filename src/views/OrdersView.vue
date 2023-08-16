<template>
  <main class="wrapper">
    <h1>Order History</h1>

    <table class="table order-hist">
      <thead>
        <tr>
          <th scope="col">Product Image</th>
          <th scope="col">Product</th>
          <th scope="col">Price</th>
          <th scope="col">Quantity</th>
          <th scope="col">Total</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><img src="/public/products/p0001.jpg" class="card-img-top" alt="p0003.jpg"></td>
          <td>Product1</td>
          <td>$1.23</td>
          <td>1</td>
          <td>$1.23</td>
          <td><button class="btn btn-primary">View</button></td>
        </tr>
        <tr>
          <td><img src="/public/products/p0002.jpg" class="card-img-top" alt="p0003.jpg"></td>
          <td>Product2</td>
          <td>$2.13</td>
          <td>2</td>
          <td>$4.56</td>
          <td><button class="btn btn-primary">View</button></td>
        </tr>
        <tr>
          <td><img src="/public/products/p0003.jpg" class="card-img-top" alt="p0003.jpg"></td>
          <td>Product3</td>
          <td>$3.54</td>
          <td>3</td>
          <td>$7.89</td>
          <td><button class="btn btn-primary">View</button></td>
        </tr>
        <tr>
          <td><img src="/public/products/p0004.jpg" class="card-img-top" alt="p0003.jpg"></td>
          <td>Product4</td>
          <td>$123.21</td>
          <td>4</td>
          <td>$321.34</td>
          <td><button class="btn btn-primary">View</button></td>
        </tr>
      </tbody>
    </table>

  </main>

</template>

<style scoped>
.order-hist td, .order-hist th {
  text-align: center;
}
.card-img-top {
  max-width: 15rem;
  max-height: 10rem;
  width: auto;
  height: auto;
}
</style>
