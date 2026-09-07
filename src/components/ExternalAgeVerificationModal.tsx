import React, { useState } from 'react';
import { 
  ShieldCheck, 
  X, 
  CheckCircle2, 
  AlertOctagon, 
  Fingerprint, 
  RefreshCw,
  Lock,
  ArrowRight
} from 'lucide-react';
import { VerificationResult } from '../types';

interface ExternalAgeVerificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onVerificationSuccess: (result: VerificationResult) => void;
  currentResult: VerificationResult | null;
}

export const ExternalAgeVerificationModal: React.FC<ExternalAgeVerificationModalProps> = ({
  isOpen,
  onClose,
  onVerificationSuccess,
  currentResult,
}) => {
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [statusMessage, setStatusMessage] = useState<string>('');
  const [errorNotice, setErrorNotice] = useState<string | null>(null);
  const [dobInput, setDobInput] = useState<string>('2000-05-18');

  if (!isOpen) return null;

  const calculateAge = (dobString: string): number => {
    const today = new Date();
    const birth = new Date(dobString);
    let age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  };

  const runVerification = (testDob: string) => {
    setErrorNotice(null);
    setIsProcessing(true);
    setStatusMessage('Connecting to external VerifID KYC API...');

    setTimeout(() => {
      setStatusMessage('Extracting biometric age & regulatory credentials...');

      setTimeout(() => {
        const age = calculateAge(testDob);
        setIsProcessing(false);

        if (age >= 18) {
          const token = 'EXT_KYC_' + Math.random().toString(36).substring(2, 9).toUpperCase();
          const result: VerificationResult = {
            verified: true,
            age,
            dob: testDob,
            verificationId: token,
            provider: 'VerifID Global External Service',
            timestamp: new Date().toLocaleTimeString(),
            message: `Age Verified: ${age} years old (Eligible for rental)`,
          };
          onVerificationSuccess(result);
        } else {
          setErrorNotice(`REJECTED: Extracted age is ${age}. Drivers under 18 cannot rent vehicles under regional transportation regulations.`);
        }
      }, 700);
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80">
      <div className="relative w-full max-w-lg bg-white border-2 border-black rounded-xl shadow-hard-xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        
        {/* Header Bar */}
        <div className="bg-[#171e19] text-white px-5 py-3 border-b-2 border-black flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-[#ffe17c] border border-black flex items-center justify-center">
              <Fingerprint className="w-4 h-4 text-black" />
            </div>
            <div>
              <span className="font-heading font-extrabold text-sm tracking-tight text-white block leading-none">
                VERIFID GLOBAL™
              </span>
              <span className="font-mono text-[10px] text-[#b7c6c2]">
                External 18+ Verification Service
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-7 h-7 bg-white text-black border border-black flex items-center justify-center hover:bg-[#ffe17c] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 space-y-4">
          
          <p className="font-body text-xs text-black/80 font-medium">
            Regulations mandate that drivers must be <strong>at least 18 years old</strong>. Our external KYC service cryptographically validates your age in seconds without retaining paper documents.
          </p>

          {/* Current Status Card */}
          {currentResult?.verified && !isProcessing && (
            <div className="bg-[#b7c6c2] p-3 border-2 border-black flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-black" />
                <div>
                  <div className="font-heading font-black text-xs uppercase text-black">
                    STATUS: AGE {currentResult.age} VERIFIED (PASS)
                  </div>
                  <div className="font-mono text-[10px] text-black/70">
                    Token: {currentResult.verificationId}
                  </div>
                </div>
              </div>
              <button
                onClick={onClose}
                className="px-3 py-1 bg-black text-[#ffe17c] font-heading font-bold text-xs border border-black"
              >
                PROCEED
              </button>
            </div>
          )}

          {/* 1-Click Fast Sandbox Test Presets */}
          <div className="space-y-2">
            <span className="block font-heading font-bold text-xs uppercase text-black/70">
              Select A Test Scenario
            </span>

            <div className="grid grid-cols-2 gap-2">
              {/* Option 1: Adult Pass */}
              <button
                disabled={isProcessing}
                onClick={() => runVerification('1998-04-12')}
                className="p-3 bg-[#ffe17c] border-2 border-black rounded shadow-hard-sm hover:shadow-hard hover:bg-white text-left transition-all disabled:opacity-50"
              >
                <div className="font-heading font-black text-xs uppercase text-black">
                  Adult (Age 27)
                </div>
                <div className="font-mono text-[10px] text-black/70 mt-0.5">
                  &bull; Simulates 18+ Pass
                </div>
              </button>

              {/* Option 2: Minor Fail */}
              <button
                disabled={isProcessing}
                onClick={() => runVerification('2010-09-22')}
                className="p-3 bg-[#f4f4f5] border-2 border-black rounded shadow-hard-sm hover:shadow-hard hover:bg-white text-left transition-all disabled:opacity-50"
              >
                <div className="font-heading font-black text-xs uppercase text-black">
                  Minor (Age 15)
                </div>
                <div className="font-mono text-[10px] text-black/70 mt-0.5">
                  &bull; Simulates Under-18 Block
                </div>
              </button>
            </div>
          </div>

          {/* Custom Date Picker */}
          <div className="pt-2 border-t border-black/10">
            <label className="block font-heading font-bold text-xs uppercase text-black/70 mb-1">
              Or Enter Custom Date of Birth
            </label>
            <div className="flex gap-2">
              <input
                type="date"
                value={dobInput}
                onChange={(e) => setDobInput(e.target.value)}
                className="flex-1 bg-[#f4f4f5] border-2 border-black px-2.5 py-1.5 font-mono text-xs font-bold"
              />
              <button
                disabled={isProcessing}
                onClick={() => runVerification(dobInput)}
                className="px-4 py-1.5 bg-[#171e19] text-white font-heading font-bold text-xs uppercase border-2 border-black hover:bg-black transition-colors disabled:opacity-50"
              >
                Check
              </button>
            </div>
          </div>

          {/* Processing Indicator */}
          {isProcessing && (
            <div className="p-3 bg-[#171e19] text-white border-2 border-black rounded flex items-center gap-3">
              <RefreshCw className="w-4 h-4 text-[#ffe17c] animate-spin shrink-0" />
              <div className="font-mono text-xs text-[#ffe17c] truncate">
                {statusMessage}
              </div>
            </div>
          )}

          {/* Error / Rejection Notice */}
          {errorNotice && !isProcessing && (
            <div className="p-3 bg-[#ff5f57]/20 border-2 border-black rounded text-xs space-y-1">
              <div className="flex items-center gap-1.5 text-black font-heading font-bold uppercase">
                <AlertOctagon className="w-4 h-4 text-[#ff5f57]" />
                <span>Verification Rejected</span>
              </div>
              <p className="font-body text-black/90 font-medium">
                {errorNotice}
              </p>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="bg-[#f4f4f5] px-5 py-2.5 border-t-2 border-black flex items-center justify-between text-[11px] font-mono text-black/60">
          <span className="flex items-center gap-1">
            <Lock className="w-3 h-3" />
            256-Bit Encrypted ID Service
          </span>
          <button onClick={onClose} className="font-bold underline hover:text-black">
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
