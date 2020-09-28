import { NextPage } from "next";
import { Pagination } from "@material-ui/lab";
import { ChangeEvent, useCallback, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";

import { IListResponse, IProduct } from "@lucy/interfaces";
import { ProductService } from "../services";

export type ProductListPageQuery = {
  page: string;
};

const ProductListPage: NextPage = () => {
  /**
   * State
   */

  const router = useRouter();

  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  const [response, setResponse] = useState<IListResponse<IProduct[]> | null>(null);

  /**
   * Side Effects
   */

  // Parse `page` property of the query
  useEffect(() => {
    if (router.query.page === undefined) return;
    const pageNumber = parseInt(`${router.query.page}`, 10);
    if (isNaN(pageNumber)) router.push("/products?page=1");
    else setPage(pageNumber);
  }, [router.query.page]);

  // Validate `page` property of the query
  useEffect(() => {
    if (response === null) return;
    if (page > response.pageCount) {
      router.push(`/products?page=${response.pageCount}`);
    }
  }, [page, response]);

  // Fetch product list
  useEffect(() => {
    setLoading(true);
    new ProductService()
      .getProducts(page)
      .then(setResponse)
      .finally(() => setLoading(false));
  }, [page]);

  /**
   * Event Handlers
   */

  const handleChangePage = useCallback((_, value: number) => setPage(value), []);

  /**
   * Render
   */

  const pageCount = useMemo<number>(() => {
    return response ? response.pageCount : 1;
  }, [response?.pageCount]);

  const renderedProducts = useMemo(() => {
    if (loading) return <p>Loading...</p>;
    if (!response?.data) return null;

    return (
      <ul>
        {response.data.map(product => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </li>
        ))}
      </ul>
    );
  }, [loading, response]);

  return (
    <main>
      <h1>Products</h1>
      {renderedProducts}
      <Pagination page={page} count={pageCount} onChange={handleChangePage} />
    </main>
  );
};

export default ProductListPage;
