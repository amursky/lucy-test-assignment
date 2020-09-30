import { FC, useCallback } from "react";

import { ProductSize } from "@lucy/interfaces";
import { Radio } from "antd";
import { RadioChangeEvent } from "antd/lib/radio";

export type SizePickerProps = {
  size: ProductSize;
  onChange?: (size: ProductSize) => unknown;
};

export const SizePicker: FC<SizePickerProps> = ({ size, onChange }) => {
  const handleChange = useCallback(
    (event: RadioChangeEvent) => {
      onChange(event.target.value);
    },
    [onChange],
  );

  return (
    <Radio.Group value={size} onChange={handleChange}>
      <Radio.Button value="Small">Small</Radio.Button>
      <Radio.Button value="Medium">Medium</Radio.Button>
      <Radio.Button value="Large">Large</Radio.Button>
    </Radio.Group>
  );
};
