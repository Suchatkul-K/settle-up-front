import React, { useState } from "react";
import LoginForm from "../features/auth/components/LoginForm";
import RegisterForm from "../features/auth/components/RegisterForm";

function LoginPage() {
  return (
    <div className="w-full min-h-[calc(100vh-64px)]">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Join now!</h1>
            <p className="py-6">
              Welcome to Settle up! Simplify bill management and expense sharing
              effortlessly. Create your own circle or join any. Track bills,
              split expenses, settle debts with ease. Say goodbye to financial
              complexities. Sign in now for stress-free finances!
            </p>
          </div>
          <LoginForm />
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
