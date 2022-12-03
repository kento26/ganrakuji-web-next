import type { NextPage, InferGetStaticPropsType } from 'next';

import { sdk } from 'graphql/config';
import {
  Mainvisual,
  Introduction,
  History,
  Equipment,
  Yoga,
  Cleaning,
} from 'components/organisms';
import { BasicLayout } from 'components/templates';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Home: NextPage<Props> = ({
  mainvisual,
  introduction,
  history,
  equipment,
  yoga,
  tomb,
}) => {
  return (
    <BasicLayout>
      <Mainvisual {...mainvisual} />
      <Introduction {...introduction} />
      <History {...history} />
      <Equipment {...equipment} />
      <Yoga {...yoga} />
      <Cleaning {...tomb} />
    </BasicLayout>
  );
};

export default Home;

export const getStaticProps = async () => {
  const data = await sdk.fetchHomePageQuery();
  const {
    facilitiesAndEquipment,
    historyText,
    historyImage01: { sourceUrl: historyImage01Url },
    historyImage02: { sourceUrl: historyImage02Url },
    introductionName,
    introductionText,
    mainvisualSliderImage,
    tombText,
    yogaImage: { sourceUrl: yogaImageUrl },
    yogaText,
  } = data.pages.edges[0].node.commonACF;

  const mainvisualImageUrlList = mainvisualSliderImage.map(
    ({ sliderImage: { sourceUrl: imageUrl } }) => imageUrl,
  );

  const facilitiesAndEquipmentList = facilitiesAndEquipment.map(
    ({
      facilitiesAndEquipmentText,
      facilitiesAndEquipmentTitle,
      facilitiesAndEquipmentImage: {
        sourceUrl: facilitiesAndEquipmentImageUrl,
      },
    }) => ({
      facilitiesAndEquipmentTitle,
      facilitiesAndEquipmentText,
      facilitiesAndEquipmentImageUrl,
    }),
  );

  return {
    props: {
      mainvisual: { mainvisualImageUrlList },
      introduction: { introductionName, introductionText },
      history: { historyText, historyImage01Url, historyImage02Url },
      equipment: { facilitiesAndEquipmentList },
      yoga: { yogaImageUrl, yogaText },
      tomb: { tombText },
    },
  };
};
