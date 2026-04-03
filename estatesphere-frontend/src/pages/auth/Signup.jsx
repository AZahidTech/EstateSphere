import React from 'react';
import SignupHero from '../../components/signupPage/SignupHero';
import SignupForm from '../../components/signupPage/SignupForm';

export default function Signup() {
  return (
    <div className="min-h-screen flex">
      <SignupHero />
      <SignupForm />
    </div>
  );
}