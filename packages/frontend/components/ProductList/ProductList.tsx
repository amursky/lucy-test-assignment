import { FC, Fragment, memo, useRef } from "react";

import { Row, Col, Pagination } from "antd";
import { IProduct } from "@lucy/interfaces";
import { motion, Variants } from "framer-motion";

import { ProductListItem } from "../ProductListItem";
import * as styles from "./ProductList.styles";
import Link from "next/link";

export type ProductListProps = {
  page: number;
  pageCount: number;
  products: IProduct[];
  onChangePage: (page: number) => unknown;
};

export const ProductList: FC<ProductListProps> = memo(
  ({ page, products, pageCount, onChangePage }) => (
    <Fragment>
      <AnimationProvider>
        <Row gutter={[16, 16]}>
          {products.map((product: IProduct) => (
            <Col span={8} key={product.id}>
              <Link href={`/products/${product.id}`}>
                <a>
                  <AnimationVariantsProvider>
                    <ProductListItem product={product} />
                  </AnimationVariantsProvider>
                </a>
              </Link>
            </Col>
          ))}
        </Row>
      </AnimationProvider>
      <Pagination
        className={styles.pagination}
        current={page}
        defaultPageSize={1}
        total={pageCount}
        onChange={onChangePage}
      />
    </Fragment>
  ),
);

const AnimationProvider: FC = ({ children }) => (
  <motion.div initial="exit" animate="enter" exit="exit">
    {children}
  </motion.div>
);

const AnimationVariantsProvider: FC = ({ children }) => {
  const { current: easing } = useRef<number[]>([0.175, 0.85, 0.42, 0.96]);

  const { current: variants } = useRef<Variants>({
    enter: { opacity: 1, transition: { duration: 1, ease: easing } },
    exit: { opacity: 0, transition: { duration: 1, ease: easing } },
  });

  return <motion.div variants={variants}>{children}</motion.div>;
};
