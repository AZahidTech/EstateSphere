import React from 'react';
import LoginHero from '../../components/LoginPage/LoginHero';
import LoginForm from '../../components/LoginPage/LoginForm';

export default function Login() {
  return (
    <div className="min-h-screen flex">
      <LoginHero />
      <LoginForm />
    </div>
  );
}