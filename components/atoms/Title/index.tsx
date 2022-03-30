import styled from 'styled-components';

type ContainerProps = {
  text: string;
};

type Props = {
  className?: string;
} & ContainerProps;

const Component = ({ className, text }: Props) => (
  <h1 className={className}>{text}</h1>
);

const StyledComponent = styled(Component)`
  text-align: center;
`;

export const Title = (props: ContainerProps) => {
  return <StyledComponent {...props} />;
};
