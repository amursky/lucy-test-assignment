import { FC, memo } from "react";

import { ArrowLeftOutlined } from "@ant-design/icons";
import { Typography } from "antd";

import * as styles from "./ProductPageHeader.styles";

export type ProductPageHeaderProps = {
  text: string;
  onBack?: () => unknown;
};

export const ProductPageHeader: FC<ProductPageHeaderProps> = memo(({ text, onBack }) => (
  <div className={styles.root} onClick={onBack}>
    <ArrowLeftOutlined className={styles.icon} />
    <Typography.Text className={styles.text} strong>
      {text}
    </Typography.Text>
  </div>
));
