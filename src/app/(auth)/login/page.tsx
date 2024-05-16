import Link from "next/link";

export default function Login() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100 p-12">
      <div className="bg-white rounded-xl p-6 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center pb-5">Login</h1>
        <form className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <label className="block text-gray-700">Username</label>
            <input
              type="text"
              className="block w-full px-4 py-2 text-xl border border-gray-300 rounded-md"
              required
            />
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="block w-full px-4 py-2 text-xl border border-gray-300 rounded-md"
              required
            />
          </div>
          <Link href="/register">
            <p className="text-center text-cyan-700 underline mt-4">
              Don't have an account? Register
            </p>
          </Link>

          <Link href="/forgot-password">
            <p className="text-center text-cyan-700 underline mt-4">
              Forgot password? Go to to reset
            </p>
          </Link>

          <button
            type="submit"
            className="w-full px-4 py-2 text-xl font-bold text-white bg-green-600 rounded-md"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );

}
