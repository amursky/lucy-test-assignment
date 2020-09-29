import { useCallback, useEffect, useMemo, useState } from "react";
import { Container, createStyles, Grid, makeStyles, Theme } from "@material-ui/core";
import { NextPage } from "next";
import { useRouter } from "next/router";
import VisuallyHidden from "@reach/visually-hidden";

import { IListResponse, IProduct } from "@lucy/interfaces";
import { ProductList } from "../../components";
import { ProductService } from "../../services";

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

  // Redirect from `/products` to `products?page=1`
  useEffect(() => {
    if (router.asPath === "/products") {
      router.push("/products?page=1");
    }
  }, [router]);

  // Parse `page` property of the query
  useEffect(() => {
    if (router.query.page === undefined) return;

    const pageNumber = parseInt(`${router.query.page}`, 10);
    if (isNaN(pageNumber)) router.push("/products?page=1");
    else setPage(pageNumber);
  }, [router.query.page]);

  // Validate page number
  useEffect(() => {
    if (response === null) return;

    if (page > response.pageCount) {
      router.push(`/products?page=${response.pageCount}`);
    }
  }, [page, response]);

  // Fetch product list on page number change
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

  const handleChangePage = useCallback(
    (pageNumber: number) => {
      router.push(`/products?page=${pageNumber}`);
    },
    [router],
  );

  /**
   * Render
   */

  const products = useMemo<IProduct[]>(() => {
    return response ? response.data : [];
  }, [response?.data]);

  const pageCount = useMemo<number>(() => {
    return response ? response.pageCount : 1;
  }, [response?.pageCount]);

  return (
    <Container>
      <VisuallyHidden>
        <h1>Products</h1>
      </VisuallyHidden>
      <ProductList
        loading={loading}
        page={page}
        pageCount={pageCount}
        products={products}
        onChangePage={handleChangePage}
      />
    </Container>
  );
};

export default ProductListPage;
