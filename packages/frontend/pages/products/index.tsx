import { Fragment, useCallback, useEffect } from "react";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";

import { IProduct } from "@lucy/interfaces";
import VisuallyHidden from "@reach/visually-hidden";

import { Container, ProductList } from "../../components";
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

  useEffect(() => {
    setTimeout(() => scrollTo({ top: 0, behavior: "smooth" }), 0);
  }, [page]);

  const handleChangePage = useCallback(
    (pageNumber: number) => {
      router.push(`/products?page=${pageNumber}`);
    },
    [router],
  );

  return (
    <Container>
      <VisuallyHidden>
        <h1>Products</h1>
      </VisuallyHidden>
      <ProductList
        page={page}
        pageCount={pageCount}
        products={products}
        onChangePage={handleChangePage}
      />
    </Container>
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
    res.writeHead(303, { Location: "/products?page=1" });
    res.end();
    return { props: { page: 1, pageCount: 1, products: [] } };
  }

  // Fetch products
  const productService = new ProductService();
  const { data: products, page, pageCount } = await productService.getProducts(parsedPage);

  // Page is greather then page count, redirect to the last page
  if (parsedPage > pageCount) {
    res.writeHead(303, { Location: `/products?page=${pageCount}` });
    res.end();
    return { props: { page: 1, pageCount: 1, products: [] } };
  }

  return { props: { page, pageCount, products } };
};

export default ProductListPage;
