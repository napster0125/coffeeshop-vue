<template>
  <div class="footer">
    <div class="footer-profile">
      <div class="profile-logo">
        <img src="@/assets/coffee1.png" />
        Coffee Shop
      </div>
      <div class="profile-desc">
        Coffee Shop is a store that sells some good meals, and especially
        coffee. We provide high quality beans
      </div>
      <div class="profile-social">
        <div>
          <a href="url"
            ><img src="@/assets/sos1.png" alt="" style="border-radius: 50%;"
          /></a>
        </div>
        <div>
          <a href="url"
            ><img src="@/assets/sos2.png" alt="" style="border-radius: 50%;"
          /></a>
        </div>
        <div>
          <a href="url"
            ><img src="@/assets/sos3.png" alt="" style="border-radius: 50%;"
          /></a>
        </div>
      </div>
      <div class="profile-copy">©2020CoffeeStore</div>
    </div>
    <div class="footer-product">
      Product
      <div class="download">Download</div>
      <div class="pricing">Pricing</div>
      <div class="location">Location</div>
      <div class="countries">Countries</div>
      <div class="Blog">Blog</div>
    </div>
    <div class="footer-product">
      Engage
      <div class="cofe">Coffee shop</div>
      <div class="faq">FAQ</div>
      <div class="abt">About Us</div>
      <div class="priv">Privacy Policy</div>
      <div class="term">Term of Service</div>
    </div>
  </div>
</template>
<style scoped>
.footer {
  display: flex;
  align-items: flex-start;
  padding: 60px;
  font-family: 'Rubik', sans-serif;
  background-color: #f8f8f8;
}
.footer .footer-profile {
  font-family: 'Rubik', sans-serif;
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.footer-profile .profile-logo {
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 10px;
}
.footer-profile .profile-desc {
  width: 200px;
  font-weight: 500;
  font-size: 16px;
  line-height: 30px;
  margin-bottom: 10px;
}
.footer-profile .profile-social {
  display: flex;
  flex-direction: row;
  justify-content: start;
  margin-bottom: 40px;
}
.profile-social a {
  margin-right: 15px;
}
.footer-profile .profile-copy {
  color: #afb5c0;
}
.footer .footer-product {
  flex: 1;
  width: 20%;
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 30px;
  color: #0b132a;
  height: 300px;
  margin-right: 10px;
}
.footer-product div {
  color: #4f5665;
  font-weight: normal;
  font-size: 16px;
  line-height: 30px;
  margin-bottom: 7px;
  text-decoration: none;
}

@media (max-width: 500px) {
  .footer-profile {
    margin-left: -30px;
    height: 200px;
  }
  .footer-profile .profile-logo {
    font-size: 15px;
  }
  .footer-profile .profile-desc {
    font-size: 13px;
    line-height: 15px;
    width: 100px;
  }
  .footer .footer-product {
    position: relative;
    font-size: 18px;
    line-height: 20px;
    margin-left: 10px;
    left: 50px;
  }
  .profile-copy {
    font-size: 12px;
  }
  .footer-product div {
    font-size: 12px;
    line-height: 20px;
  }
  .footer-profile .profile-social img {
    width: 20px;
  }
}
</style>
