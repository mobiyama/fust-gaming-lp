import { MicroCMSDate, MicroCMSListResponse } from 'microcms-js-sdk';
import { Top } from '../components/templates/Top';
import { cmsApex } from '../libs/cms/index';
import { ApexInfo, ApexProfile } from './api/models/Apex';

export type TopProps = {
  info: ApexInfo & MicroCMSDate;
  profiles: MicroCMSListResponse<ApexProfile>;
};

const Home = (props: TopProps) => {
  return <Top {...props} />;
};

export const getServerSideProps = async () => {
  const [ info, profiles ] = await Promise.all([
    cmsApex.getObject<ApexInfo>({ endpoint: 'info' }),
    cmsApex.getList<ApexProfile>({ endpoint: 'profile' }),
  ])
  return {
    props: {
      info,
      profiles,
    },
  };
};

export default Home;
