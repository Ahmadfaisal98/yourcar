import styled from 'styled-components';
import tw from 'twin.macro';

import { BookCard } from '../components/bookCard';
import { Footer } from '../components/footer';
import { Marginer } from '../components/marginer';
import Navbar from '../components/navbar';
import { AboutUs } from '../containers/homepage/aboutUs';
import { BookingSteps } from '../containers/homepage/bookingSteps';
import { TopCars } from '../containers/homepage/topCars';
import { TopSection } from '../containers/homepage/TopSection';

const PageContainer = styled.div`
  ${tw`
    flex
    flex-col
    w-full
    h-full
    items-center
    overflow-x-hidden
  `}
`;
export default function HomePage() {
  return (
    <PageContainer>
      <Navbar />
      <TopSection />
      <Marginer direction='vertical' margin='4em' />
      <BookCard />
      <Marginer direction='vertical' margin='10em' />
      <BookingSteps />
      <Marginer direction='vertical' margin='8em' />
      <AboutUs />
      <Marginer direction='vertical' margin='8em' />
      <TopCars />
      <Footer />
    </PageContainer>
  );
}
