import React from 'react';
import SignupHero from '../../components/SignupPage/SignupHero';
import SignupForm from '../../components/SignupPage/SignupForm';

export default function Signup() {
  return (
    <div className="min-h-screen flex">
      <SignupHero />
      <SignupForm />
    </div>
  );
}