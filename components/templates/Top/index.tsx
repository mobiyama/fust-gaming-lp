import styled from 'styled-components';
import { TopProps } from '../../../pages';
import { Title } from '../../atoms';
import { Layout } from '../Layout';
import Image from 'next/image';
import Link from 'next/Link';

type Props = TopProps;

export const Top = (props: Props) => {
  const { info } = props;
  console.log(info.categories);

  return (
    <Layout>
      <Main>
        {/* タイトル */}
        {!!info.logo.url && (
          <img alt="ロゴ" src={info.logo.url || ''} height={50} width={50} />
        )}
        <Title text={info.name} />

        {/* チーム説明 */}
        <div>{info.description}</div>

        {/* ゲームカテゴリ */}
        <div>
          {info.categories.map((category) => (
            <div key={category.name}>
              <Link href={category.path}>
                <div>
                  <img
                    alt="ロゴ"
                    src={category.titleImg.url}
                    height={50}
                    width={50}
                  />
                </div>
              </Link>
              <p>{category.name}</p>
            </div>
          ))}
        </div>
      </Main>
    </Layout>
  );
};

const Main = styled.div`
  text-align: center;
  margin: 0;
`;
