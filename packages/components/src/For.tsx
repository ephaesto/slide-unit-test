import { JSX, Key } from 'react';
import { uuid } from 'functions';

interface IForProps<Value> {
  children: (data: Value, key: Key, index: number) => React.ReactNode;
  inValues?: Value[];
}
const For = <Value,>({ inValues = [], children }: IForProps<Value>): JSX.Element => {
  return <>{inValues.map((data, index) => children(data, uuid(), index))}</>;
};
export default For;
