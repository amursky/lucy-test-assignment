import { GetServerSideProps, NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import VisuallyHidden from "@reach/visually-hidden";

import { Container, Header, ProductPageHeader } from "../../components";

const ProductDetailsPage: NextPage = () => {
  const router = useRouter();
  const goBack = useCallback(() => router.back(), [router]);

  return (
    <Container>
      <Header>
        <VisuallyHidden>
          <h1>Product name here...</h1>
        </VisuallyHidden>
        <ProductPageHeader text="Back to products" onBack={goBack} />
      </Header>
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  return { props: {} };
};

export default ProductDetailsPage;
