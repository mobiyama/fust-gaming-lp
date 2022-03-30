import { MicroCMSListResponse } from 'microcms-js-sdk';
import { ApexTemplate } from '../../components/templates/Apex';
import { cmsApex } from '../../libs/cms';
import { ApexProfile } from '../api/models/Apex';

export type ApexProps = {
  profiles: MicroCMSListResponse<ApexProfile>;
};

const Apex = (props: ApexProps) => {
  return <ApexTemplate {...props} />;
};

export const getServerSideProps = async () => {
  const [profiles] = await Promise.all([
    cmsApex.getList<ApexProfile>({ endpoint: 'profile' }),
  ]);
  return {
    props: {
      profiles,
    },
  };
};

export default Apex;
