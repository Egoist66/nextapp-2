export default function ForgotPassword() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100 p-12">
      <div className="bg-white rounded-xl p-6 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center pb-5">Forgot Password</h1>
        <form className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="block w-full px-4 py-2 text-xl border border-gray-300 rounded-md"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-xl font-bold text-white bg-green-600 rounded-md"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );

}
