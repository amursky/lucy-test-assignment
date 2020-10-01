import { Fragment, useCallback, useEffect } from "react";
import { GetServerSideProps, NextPage } from "next";
import { IProduct } from "@lucy/interfaces";
import { Typography } from "antd";
import { useRouter } from "next/router";

import { Header, ProductList } from "../../components";
import { ProductService } from "../../services";

type ProductListPageQuery = {
  page: string;
};

type ProductListPageProps = {
  page: number;
  pageCount: number;
  products: IProduct[];
};

const ProductListPage: NextPage<ProductListPageProps> = ({ page, pageCount, products }) => {
  const router = useRouter();

  const handleChangePage = useCallback(
    (pageNumber: number) => {
      router.push(`/products?page=${pageNumber}`);
    },
    [router],
  );

  useEffect(() => {
    setTimeout(() => scrollTo({ top: 0, behavior: "smooth" }), 0);
  }, [page]);

  return (
    <Fragment>
      <Header>
        <Typography.Title level={1}>Dresses by «Lucy in the Sky»</Typography.Title>
      </Header>
      <ProductList
        page={page}
        pageCount={pageCount}
        products={products}
        onChangePage={handleChangePage}
      />
    </Fragment>
  );
};

export const getServerSideProps: GetServerSideProps<
  ProductListPageProps,
  ProductListPageQuery
> = async ({ query, res }) => {
  // Parse page number
  const parsedPage = parseInt(`${query.page}`, 10);

  // Page is not a number, redirect
  if (isNaN(parsedPage)) {
    res.writeHead(301, "Invalid page number", { Location: "/products?page=1" }).end();
    return { props: { page: 1, pageCount: 1, products: [] } };
  }

  // Fetch products
  const productService = new ProductService();
  const { data: products, page, pageCount } = await productService.getProducts(parsedPage);

  // Page is greather than page count, redirect to the last page
  if (parsedPage > pageCount) {
    res.writeHead(301, "Invalid page number", { Location: `/products?page=${pageCount}` });
    res.end();
    return { props: { page: 1, pageCount: 1, products: [] } };
  }

  return { props: { page, pageCount, products } };
};

export default ProductListPage;
