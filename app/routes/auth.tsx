import React, { useEffect } from 'react';
import { usePuterStore } from '~/lib/puter';
import { useLocation, useNavigate } from 'react-router';

export const meta = () => ([
  { title: "Resumai | Auth" },
  { name: "description", content: "Log in to your account" },
])

const Auth = () => {

  const { isLoading, auth } = usePuterStore();
  const location = useLocation();
  const next = location.search.split('next=')[1];
  const navigate = useNavigate();

  useEffect(() => {
    if(auth.isAuthenticated) navigate(next);
  },[auth.isAuthenticated , next])

  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover min-h-screen flex items-center justify-center">
      <div className="gradient-border shadow-lg">
        <section className="flex flex-col gap-8 bg-white rounded-2xl p-10">
          <div className="flex flex-col gap-2 items-center text-center">
            <h1 className="">Welcome Back!</h1>
            <p className="">Log in to your account to continue you job journey</p>
          </div>
          <div>
            {isLoading ? (
              <button className="auth-button animate-pulse">
                <p> Signing you in...</p>
              </button>
            ) : (
              <>
                {
                  auth.isAuthenticated ? (
                    <button className="auth-button" onClick={auth.signOut}>
                      <p>Log Out</p>
                    </button>
                  ) : (
                    <button className="auth-button" onClick={auth.signIn}>
                      <p>Log In</p>
                    </button>
                  )
                }
              </>
            )}
          </div>
        </section>
      </div>
    </main>
  )
}
export default Auth