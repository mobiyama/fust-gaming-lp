import styled from 'styled-components';
import { ApexProps } from '../../../pages/apex/index';

type Props = ApexProps;

export const ApexTemplate = (props: Props) => {
  return <div>{props.profiles.contents[0].name}</div>;
};

const Div = styled.div`
  margin: 0;
`;
