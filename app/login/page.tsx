"use client"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import { useCookies } from 'react-cookie'
import RootLayout from "../layout";
import { ReactNode } from 'react';

interface User {
  email: string;
  password: string;
}

export default function LoginPage() {
  const [user, setUser] = useState<User>({
    email: "",
    password: ""
  })
  const [loading, setLoading] = useState(false)
  const [buttonDisabled, setButtonDisabled] = useState(false)
  const router = useRouter()
  const [cookie, setCookie] = useCookies()

  const onLogin = async (e: any) => {
    e.preventDefault()
    try {
      setLoading(true)
      const response = await axios.post("http://localhost:5000/users/login", user)
      
      setCookie("jwt", response.data.data.token)
      router.push('/')
    } catch (err: any) {
      console.log("Login failed", err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false)
    } else {
      setButtonDisabled(true)
    }
  }, [user])


  return (
    <>
    <section className="bg-gray-50 dark:bg-gray-900">
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Sign in to your account
                </h1>
                <form className="space-y-4 md:space-y-6" action="#">
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input 
                          type="email" 
                          name="email" 
                          id="email" 
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                          placeholder="name@company.com" 
                          onChange={((e) => setUser({ ...user, email: e.target.value}))}
                          />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input 
                          type="password" 
                          name="password" 
                          id="password" 
                          placeholder="••••••••" 
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                          onChange={((e) => setUser({ ...user, password: e.target.value}))}
                          />
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-start">
                            {/* <div className="flex items-center h-5">
                              <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
                            </div> */}
                            {/* <div className="ml-3 text-sm">
                              <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                            </div> */}
                        </div>
                        
                    </div>
                    <button 
                      type="submit" 
                      className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                      onClick={onLogin}
                      // disabled={buttonDisabled}
                      >
                        Sign in
                    </button>
                    
                </form>
            </div>
        </div>
    </div>
  </section>
  </>
  );
}



(LoginPage as any).getLayout = (page: ReactNode) => {
  return (
    <html lang="en">
      <body>
        
          {/* <div className="contentContainer">{page}</div> */}
          <RootLayout showSideNav={true}>{page}</RootLayout>
        
      </body>
    </html>
  );
};
