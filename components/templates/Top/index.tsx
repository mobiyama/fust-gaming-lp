import styled from 'styled-components';
import { TopProps } from '../../../pages';

type Props = TopProps;

export const Top = (props: Props) => {
  const { info } = props;
  return <div>{info.name}</div>;
};

const Div = styled.div`
  margin: 0;
`;
