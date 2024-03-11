/** @format */

import { useSession, signIn, signOut } from "next-auth/react";

const Login = () => {
  const { data: session } = useSession();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {session ? (
        <div className="text-center">
          <p className="mb-4">Welcome, {session.user.name}!</p>
          <img
            src={session.user.image}
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <button
            onClick={() => signOut()}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Sign out
          </button>
        </div>
      ) : (
        <div className="text-center">
          <p className="mb-4">You need to sign in to access this page</p>
          <button
            onClick={() => signIn("github")}
            className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Sign in with GitHub
          </button>
        </div>
      )}
    </div>
  );
};

export default Login;



