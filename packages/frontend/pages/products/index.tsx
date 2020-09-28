import { NextPage } from "next";
import { useMemo } from "react";

import { IProduct, IListResponse } from "@lucy/interfaces";
import { ProductService } from "../../services";

export type ProductListPageProps = {
  response: IListResponse<IProduct[]>;
};

const ProductListPage: NextPage<ProductListPageProps> = ({ response: { data: products } }) => (
  <main>
    <h1>Products</h1>
    <ul>
      {products.map(product => (
        <li key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.price}</p>
        </li>
      ))}
    </ul>
  </main>
);

ProductListPage.getInitialProps = async () => {
  const productService = new ProductService();
  const response = await productService.getProducts();

  return { response };
};

export default ProductListPage;
