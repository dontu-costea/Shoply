<script>
export default {
  name: 'Header',
  data: () => ({}),
}
</script>

<template>
  <v-app-bar fixed app elevation="0" height="90" color="#F8F8F8">
    <v-container class="header">
      <NuxtLink to="/" class="logo"><span>Shoply.</span></NuxtLink>
      <div class="menu">
        <NuxtLink to="/" class="menu__item active">Home</NuxtLink>
        <span>/</span>
        <NuxtLink to="/products" class="menu__item">Products</NuxtLink>
        <span>/</span>
        <NuxtLink to="/about" class="menu__item">About</NuxtLink>
      </div>
      <div class="cart_menu">
        <NuxtLink to="/cart" class="link"
          ><v-icon size="27">mdi-cart-outline</v-icon></NuxtLink
        >
        <NuxtLink to="/login" class="link"
          ><v-btn
            tile
            color="#211F1C"
            class="text-capitalize login__btn"
            width="85"
            height="32"
            >Login</v-btn
          ></NuxtLink
        >
      </div>
    </v-container>
  </v-app-bar>
</template>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Roboto';
  .logo {
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    color: #393d45;
    text-decoration: none;
  }
  .menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 30%;
    &__item {
      font-size: 16px;
      line-height: 19px;
      color: #5e5e5e;
      text-decoration: none;
      transition: 0.3s all ease;
    }
    &__item:hover {
      color: #000;
    }
  }
  .login__btn {
    color: white;
    margin-left: 35px;
  }
  .link {
    text-decoration: none;
  }
}
.active {
  font-weight: 700;
  border-bottom: 1px solid #393d45;
}
</style>
