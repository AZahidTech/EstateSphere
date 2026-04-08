import React from 'react';
import LoginHero from '../../components/loginPage/LoginHero';
import LoginForm from '../../components/loginPage/LoginForm';

export default function Login() {
  return (
    <div className="min-h-screen flex">
      <LoginHero />
      <LoginForm />
    </div>
  );
}