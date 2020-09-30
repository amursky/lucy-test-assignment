import { FC, Fragment, useCallback, useRef } from "react";
import { useRouter } from "next/router";

import { Row, Col, Pagination } from "antd";
import { IProduct } from "@lucy/interfaces";
import { motion, Variants } from "framer-motion";

import { ProductListItem } from "../ProductListItem";
import * as styles from "./ProductList.styles";

export type ProductListProps = {
  page: number;
  pageCount: number;
  products: IProduct[];
  onChangePage: (page: number) => unknown;
};

export const ProductList: FC<ProductListProps> = ({ page, products, pageCount, onChangePage }) => {
  const router = useRouter();

  const goToProductDetails = useCallback(
    (product: IProduct) => router.push(`/products/${product.id}`),
    [router],
  );

  const renderItem = useCallback(
    (product: IProduct) => (
      <Col span={6} key={product.id}>
        <AnimationVariantsProvider>
          <ProductListItem product={product} onClick={goToProductDetails} />
        </AnimationVariantsProvider>
      </Col>
    ),
    [products],
  );

  return (
    <Fragment>
      <AnimationProvider>
        <Row gutter={[16, 16]}>{products.map(renderItem)}</Row>
      </AnimationProvider>
      <Pagination
        className={styles.pagination}
        current={page}
        defaultPageSize={1}
        total={pageCount}
        onChange={onChangePage}
      />
    </Fragment>
  );
};

const AnimationProvider: FC = ({ children }) => (
  <motion.div initial="exit" animate="enter" exit="exit">
    {children}
  </motion.div>
);

const AnimationVariantsProvider: FC = ({ children }) => {
  const { current: easing } = useRef<number[]>([0.175, 0.85, 0.42, 0.96]);
  const { current: variants } = useRef<Variants>({
    enter: {
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: easing,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: easing,
      },
    },
  });

  return <motion.div variants={variants}>{children}</motion.div>;
};
