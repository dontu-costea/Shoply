import ApiModel from "../ApiModel";

export default class Products extends ApiModel {
  constructor() {
    super("/api/products");
  }

  getProducts(params: any) {
    return this.http.get(`${this.resourceUrl}`, params);
  }

  getProduct(id: any) {
    return this.http.get(`${this.resourceUrl}/${id}`);
  }
}