import { GetServerSideProps, NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";

import { IProduct } from "@lucy/interfaces";

import { Container, GoBackButton, Header, ProductDetails } from "../../components";
import { ProductService } from "../../services";

type ProductDetailsPageParams = {
  productId: string;
};

type ProductDetailsPageProps = {
  product: IProduct;
};

const ProductDetailsPage: NextPage<ProductDetailsPageProps> = ({ product }) => {
  const router = useRouter();

  const goBack = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <Container>
      <Header>
        <GoBackButton href="/products?page=1" text="Back to all dresses" />
      </Header>
      <ProductDetails product={product} />
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps<
  ProductDetailsPageProps,
  ProductDetailsPageParams
> = async ({ params, res }) => {
  // Parse product id param
  const productId = parseInt(`${params.productId}`, 10);

  // Invalid product id, redirect
  if (isNaN(productId)) {
    res.writeHead(301, "Invalid product id", { Location: "/products" }).end();
    return { props: { product: null } };
  }

  // Fetch product
  const productService = new ProductService();
  const product = await productService.getProduct(productId);

  // Product not found, refirect
  if (product.id === undefined) {
    res.writeHead(301, "Product not found", { Location: "/products" }).end();
    return { props: { product: null } };
  }

  return { props: { product } };
};

export default ProductDetailsPage;
