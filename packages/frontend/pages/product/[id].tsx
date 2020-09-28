import { NextPage } from "next";
import VisuallyHidden from "@reach/visually-hidden";

const ProductDetailsPage: NextPage = () => {
  return (
    <main>
      <VisuallyHidden>
        <h1>Product name</h1>
      </VisuallyHidden>
    </main>
  );
};

export default ProductDetailsPage;
