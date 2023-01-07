import ApiModel from "../ApiModel";

export default class Categories extends ApiModel {
  constructor() {
    super("/api/categories");
  }

  getCategories() {
    return this.http.get(`${this.resourceUrl}`);
  }

  getCategory(id: number) {
    return this.http.get(`${this.resourceUrl}/${id}`);
  }
}