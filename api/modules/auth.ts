import ApiModel from "../ApiModel";

export default class Auth extends ApiModel {
  constructor() {
    super("/api/auth/register");
  }

  register(params: Object) {
    return this.http.post(`${this.resourceUrl}`, params);
  }
}