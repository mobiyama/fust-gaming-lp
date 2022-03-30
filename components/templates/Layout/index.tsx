import styled from 'styled-components';

type Props = {
  children: JSX.Element;
};

const Component = (props: Props) => {
  return (
    <div className={undefined}>
      {props.children}
    </div>
  );
};

const StyledComponent = styled(Component)``;

export const Layout = (props: Props) => {
  return <StyledComponent {...props} />;
};

const MainContents = styled.div`
  margin: 0;
`;
