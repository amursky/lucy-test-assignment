import { IListResponse, IProduct } from "@lucy/interfaces";
import { ServiceBase } from "./ServiceBase";

export class ProductService extends ServiceBase {
  protected BASE_URL: string = "http://localhost:4000/product";

  public async getProducts(page: number = 1) {
    return this.get<IListResponse<IProduct[]>>(`?page=${page}`);
  }

  public async getProduct(id: number) {
    return this.get<IProduct>(`/${id}`);
  }
}
