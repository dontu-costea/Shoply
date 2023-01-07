import http from "../services/http";

export default class ApiModel {
  resourceUrl: any;
  http: any;
  constructor(resourceUrl: any) {
    this.resourceUrl = resourceUrl;
    this.http = http;
  }
}