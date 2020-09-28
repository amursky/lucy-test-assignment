import { NextPage } from "next";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";

import { IProduct } from "@lucy/interfaces";
import { ProductService } from "../../services";

export type ProductListPageQuery = {
  page: string;
};

const ProductListPage: NextPage = () => {
  /**
   * State
   */

  const router = useRouter();

  const [loading, setLoading] = useState<boolean>(true);
  const [products, setProducts] = useState<IProduct[]>([]);

  /**
   * Side Effects
   */

  useEffect(() => {
    const page = parseInt(router.query.page as string, 10);
    const productService = new ProductService();

    setLoading(true);

    productService
      .getProducts(page)
      .then(({ data }) => setProducts(data))
      .finally(() => setLoading(false));
  }, [router.query]);

  /**
   * Render
   */

  const renderedProducts = useMemo(() => {
    if (loading) return <p>Loading...</p>;

    return (
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </li>
        ))}
      </ul>
    );
  }, [loading, products]);

  return (
    <main>
      <h1>Products</h1>
      {renderedProducts}
    </main>
  );
};

export default ProductListPage;
