'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const adminEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL;
      const adminPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;

      if (email === adminEmail && password === adminPassword) {
        localStorage.setItem(
          'admin',
          JSON.stringify({
            loggedIn: true,
            email,
            time: new Date().toISOString(),
          }),
        );

        router.push('/admin');
      } else {
        setError('Invalid email or password');
      }
    } catch (err) {
      setError('Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg space-y-5"
      >
        <h1 className="text-2xl font-bold text-center text-gray-800">
          Admin Login
        </h1>

        <input
          type="email"
          placeholder="Enter email"
          className="w-full px-4 py-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-400"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter password"
          className="w-full px-4 py-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-400"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-xl transition"
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
}
