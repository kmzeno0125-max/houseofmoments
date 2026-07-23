import Hero from '../components/Hero';
import Amenities from '../components/Amenities';
import Welcome from '../components/Welcome';
import Features from '../components/Features';
import Garden from '../components/Garden';
import SelfieCorner from '../components/SelfieCorner';
import CtaBand from '../components/CtaBand';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Amenities />
      <Welcome />
      <Features />
      <Garden />
      <SelfieCorner />
      <CtaBand />
    </>
  );
}
