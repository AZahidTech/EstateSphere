import React from 'react';
import LoginHero from '../../components/loginPage/LoginHero';
import ForgotPasswordForm from '../../components/forgotPassword/ForgotPasswordForm';

const ForgotPassword = () => {
  return (
    <div className="min-h-screen flex selection:bg-indigo-100 selection:text-indigo-900">
      <LoginHero />
      <ForgotPasswordForm />
    </div>
  );
};

export default ForgotPassword;