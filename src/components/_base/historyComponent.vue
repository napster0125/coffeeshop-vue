<template>
  <div>
    <main class="container-fluid">
      <div class="top-main">
        <h1>Let’s see what you have bought!</h1>
        <h3>Select item to delete</h3>
      </div>
      <div class="bot-main">
        <button class="link">Select All</button>
        <div class="box-main">
          <div class="box-main-item">
            <div class="box-main-left">
              <img src="../../assets/veg.png" alt="" />
            </div>
            <div class="box-main-right">
              <div class="name">Veggie Tomato Mix</div>
              <div class="price">IDR 34.000</div>
              <div class="status">
                <div>Delivered</div>
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
main {
  background-image: url('../../assets/bg2.png');
  background-size: cover;
  background-repeat: no-repeat;
}
main .top-main {
  text-align: center;
  padding-top: 100px;
}
.top-main h1,
.top-main h3 {
  font-family: Rubik;
  font-weight: bold;
  font-size: 40px;
  color: white;
  text-shadow: 2px 2px black;
}
.top-main h3 {
  font-size: 20px;
  padding-top: 20px;
}
main .bot-main {
  width: 95%;
  margin-left: 2.5%;
  margin-top: 20px;
  padding-bottom: 80px;
}
.bot-main button {
  background: none;
  border: none;
  color: white;
  text-align: right;
  text-decoration: underline;
  margin-left: 25px;
}
.bot-main .box-main {
  margin-top: 25px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-gap: 20px;
  justify-items: center;
  justify-content: space-between;
}
.box-main-item {
  background-color: white;
  margin-top: 10px;
  width: 400px;
  border-radius: 15px;
  height: 100px;
  display: flex;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.59);
}
.box-main-left {
  flex: 1;
}
.box-main-left img {
  width: 85px;
  height: 85px;
  border-radius: 100%;
  margin-left: 5px;
  margin-top: 7px;
}
.box-main-right {
  flex: 3;
  margin-left: 15px;
}
.box-main-right .name {
  font-family: Poppins;
  font-weight: bold;
  font-size: 25px;
  line-height: 37px;
}
.box-main-right .price,
.box-main-right .status {
  font-family: Poppins;
  font-size: 20px;
  line-height: 30px;
  color: #895537;
}
.status {
  display: flex;
}
.status input {
  margin-left: 230px;
  -webkit-transform: scale(2);
  transform: scale(2);
}

@media (max-width: 480px) {
  .bot-main .box-main {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
  .box-main-item {
    width: 300px;
  }
  .box-main-left img {
    width: 65px;
    height: 65px;
    margin-left: 10px;
    margin-top: 12px;
  }
  .box-main-right {
    flex: 3;
    margin-left: 15px;
  }
  .box-main-right .name {
    font-size: 20px;
    line-height: 35px;
  }
  .box-main-right .price,
  .box-main-right .status {
    font-size: 15px;
    line-height: 30px;
  }
  .status input {
    margin-left: 180px;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
</style>
