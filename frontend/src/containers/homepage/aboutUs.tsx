import styled from 'styled-components';
import tw from 'twin.macro';

import { SCREENS } from '../../helpers/responsive';

const AboutUsContainer = styled.div`
  ${tw`
    w-full
    flex
    flex-wrap
    items-center
    justify-center
    py-4
    px-7
    md:px-0
    bg-white
  `};
`;

const CarContainer = styled.div`
  width: auto;
  height: 15em;
  margin-left: -50px;

  img {
    width: auto;
    height: 100%;
  }

  @media (min-width: ${SCREENS.md}) {
    height: 28em;
  }

  @media (min-width: ${SCREENS.lg}) {
    height: 30em;
  }

  @media (min-width: ${SCREENS['2xl']}) {
    height: 35em;
    margin-left: 0;
  }
`;

const InfoContainer = styled.div`
  ${tw`
    lg:w-1/2
    flex
    flex-col
    md:ml-6
    2xl:ml-16
  `};
`;

const Title = styled.h1`
  ${tw`
    text-black
    text-2xl
    md:text-5xl
    font-extrabold
    md:font-black
    md:leading-normal
  `};
`;

const InfoText = styled.p`
  max-width: 1118px;
  ${tw`
    text-sm
    md:text-base
    text-gray-500
    font-normal
    mt-4
    text-justify
  `};
`;

export function AboutUs() {
  return (
    <AboutUsContainer>
      <CarContainer>
        <img src='assets/images/jeep.png' alt='jeep' />
      </CarContainer>
      <InfoContainer>
        <Title>Feel The Best Experience With Our Rental Deals</Title>
        <InfoText>
          Traveling with family or relatives is more fun if you choose the right
          transportation. Car rental can be the best choice to facilitate your
          mobility. To further support your flexibility while traveling, Yourcar
          now offers Without Driver Car Rental service. You can enjoy this
          convenience by booking it directly through Yourcar Lifestyle SuperApp.
          Find a wide selection of the best cars, complete with the price list.
          With the vast majority of Yourcar, you can cancel for free up to 48
          hours before you pick up the car. So if you’re thinking about renting
          a car, you can always book it now, and change or cancel your rental
          later on.Ease of mobility is very important when you are on a trip. If
          you wish for a hassle-free trip while exploring tourist destinations,
          renting a car with driver service will be the right choice. As digital
          technology advances, you can enjoy car rental services with driver
          only on Yourcar Lifestyle SuperApp. You can easily compare the prices
          from our trusted partners and find one that suits your needs.
        </InfoText>
      </InfoContainer>
    </AboutUsContainer>
  );
}
