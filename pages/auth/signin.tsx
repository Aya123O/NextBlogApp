import { signIn } from "next-auth/react";

export default function SignInPage() {
  return (
    <div className="min-h-screen mx-auto w-100 flex items-center justify-center bg-gradient-to-br from-[#e0c3fc] via-[#8ec5fc] to-[#f9f9f9]">
      <div className="bg-white shadow-2xl rounded-3xl p-10 sm:p-12 max-w-md w-full text-center animate-fade-in">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">Welcome Back 👋</h1>
        <p className="text-gray-500 mb-8 text-sm">Sign in with your Google account to access your blog dashboard</p>

        <button
          onClick={() => signIn("google")}
          className="w-full flex items-center justify-center gap-3 py-3 px-6 bg-white border border-gray-300 rounded-xl shadow hover:shadow-lg transition-all duration-300 hover:bg-gray-100"
        >
          <svg className="w-6 h-6" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3..." />
            <path fill="#FF3D00" d="M6.3 14.1l6.6 4.8C14.5..." />
            <path fill="#4CAF50" d="M24 47c5.2 0 10-2 13.5..." />
            <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3..." />
          </svg>
          <span className="font-medium text-gray-700">Sign in with Google</span>
        </button>
      </div>
    </div>
  );
}
