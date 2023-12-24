import { FixedSizeList } from 'cobalt-ui';
import { CSSProperties, FC } from 'react';

interface RowType {
  data: any[];
  index: number;
  style: CSSProperties;
}

const data = new Array(1000).fill(0).map((_, idx) => `Row ${idx + 1}`);

const Row: FC<RowType> = ({ data, index, style }: RowType) => {
  return (
    <div
      style={{
        ...style,
        background: index % 2 === 1 ? 'rgb(248, 248, 240)' : '',
      }}
    >
      {data[index]}
    </div>
  );
};

const App: FC = () => {
  return (
    <FixedSizeList itemData={data} height={300} itemCount={1000} itemSize={36}>
      {Row}
    </FixedSizeList>
  );
};

export default App;
