import { MicroCMSDate, MicroCMSListResponse } from 'microcms-js-sdk';
import { Top } from '../components/templates/Top';
import { cmsApex } from '../libs/cms';
import { Info } from './api/models/info';

export type TopProps = {
  info: Info & MicroCMSDate;
};

const Home = (props: TopProps) => {
  return <Top {...props} />;
};

export const getServerSideProps = async () => {
  const [info] = await Promise.all([
    cmsApex.getObject<Info>({ endpoint: 'info' }),
  ]);
  return {
    props: {
      info,
    },
  };
};

export default Home;
