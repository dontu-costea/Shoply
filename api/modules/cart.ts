import ApiModel from "../ApiModel";

export default class Cart extends ApiModel {
  constructor() {
    super("/api/cart");
  }

  getCart() {
    return this.http.get(`${this.resourceUrl}`);
  }

  addToCart(params: any) {
    return this.http.post(`${this.resourceUrl}`, params);
  }

  increaseQuantity(id: any) {
    return this.http.post(`${this.resourceUrl}/${id}/increase-quantity`);
  }

  reduceQuantity(id: any) {
    return this.http.post(`${this.resourceUrl}/${id}/reduce-quantity`);
  }

  deleteProduct(id: any) {
    return this.http.delete(`${this.resourceUrl}/${id}`);
  }
}