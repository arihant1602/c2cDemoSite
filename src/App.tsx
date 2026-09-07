import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SocialProofMarquee } from './components/SocialProofMarquee';
import { QuickBookingAndFleet } from './components/QuickBookingAndFleet';
import { ProblemVsSolution } from './components/ProblemVsSolution';
import { FeatureGrid } from './components/FeatureGrid';
import { HowItWorks } from './components/HowItWorks';
import { UseCasePersonas } from './components/UseCasePersonas';
import { Testimonials } from './components/Testimonials';
import { FinalCTAAndFooter } from './components/FinalCTAAndFooter';
import { ExternalAgeVerificationModal } from './components/ExternalAgeVerificationModal';
import { BookingSuccessModal } from './components/BookingSuccessModal';
import { CARS } from './data/cars';
import { Car, VerificationResult } from './types';

export function App() {
  const [selectedCar, setSelectedCar] = useState<Car>(CARS[0]);
  const [isVerificationModalOpen, setIsVerificationModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [verificationResult, setVerificationResult] = useState<VerificationResult | null>(null);
  const [bookingData, setBookingData] = useState<any>(null);

  const handleOpenBooking = () => {
    const el = document.getElementById('fleet');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleVerificationSuccess = (result: VerificationResult) => {
    setVerificationResult(result);
  };

  const handleConfirmBooking = (details: any) => {
    setBookingData(details);
    setIsSuccessModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#171e19] text-black font-body selection:bg-[#171e19] selection:text-[#ffe17c]">
      {/* 1. Navigation */}
      <Navbar
        onOpenBooking={handleOpenBooking}
        isAgeVerified={!!verificationResult?.verified}
        onOpenVerification={() => setIsVerificationModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        {/* 2. Hero Section */}
        <Hero
          onOpenBooking={handleOpenBooking}
          onOpenVerification={() => setIsVerificationModalOpen(true)}
          isAgeVerified={!!verificationResult?.verified}
        />

        {/* 3. Social Proof Marquee */}
        <SocialProofMarquee />

        {/* 4. Ultra Short Booking Form & Fleet Selection */}
        <QuickBookingAndFleet
          selectedCar={selectedCar}
          onSelectCar={(car) => setSelectedCar(car)}
          verificationResult={verificationResult}
          onOpenVerification={() => setIsVerificationModalOpen(true)}
          onConfirmBooking={handleConfirmBooking}
        />

        {/* 5. Problem vs Solution */}
        <ProblemVsSolution />

        {/* 6. Feature Grid */}
        <FeatureGrid />

        {/* 7. How It Works */}
        <HowItWorks
          onOpenBooking={handleOpenBooking}
          onOpenVerification={() => setIsVerificationModalOpen(true)}
        />

        {/* 8. Use Case Personas */}
        <UseCasePersonas onOpenBooking={handleOpenBooking} />

        {/* 9. Testimonials */}
        <Testimonials />

        {/* 10. Final CTA & Footer */}
        <FinalCTAAndFooter
          onOpenBooking={handleOpenBooking}
          onOpenVerification={() => setIsVerificationModalOpen(true)}
        />
      </main>

      {/* 18+ verification through Zeroara (zero-knowledge proof; no DOB or ID number received) */}
      <ExternalAgeVerificationModal
        isOpen={isVerificationModalOpen}
        onClose={() => setIsVerificationModalOpen(false)}
        onVerificationSuccess={handleVerificationSuccess}
        currentResult={verificationResult}
      />

      {/* Booking Confirmation & NFC Key Pass Modal */}
      <BookingSuccessModal
        isOpen={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
        bookingData={bookingData}
      />
    </div>
  );
}

export default App;
