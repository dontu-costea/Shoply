import Categories from "./modules/categories"
import Products  from "./modules/products";
import Cart from "./modules/cart"
import Auth from "./modules/auth"

export default {
  categories : () => new Categories(),
  products: () => new Products(),
  cart: () => new Cart(),
  auth: () => new Auth()
};