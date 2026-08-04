import React from 'react';
import Hero from '../components/Hero';
import ImpactCounters from '../components/ImpactCounters';
import Causes from '../components/Causes';

export default function HomePage({ onOpenDonate }) {
  return (
    <main>
      <Hero onOpenDonate={onOpenDonate} />
      <ImpactCounters />
      <Causes onOpenDonate={onOpenDonate} />
    </main>
  );
}
