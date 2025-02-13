"use client"
import { useState, ChangeEvent } from 'react';
import { signIn } from 'next-auth/react';

export default function ClientCredentialsSignIn() {
    const [error, setError] = useState<string | null>(null);
    const [data, setData] = useState({ email: 'aurore@domain.com', password: '12345678' });
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const result = await signIn("credentials", {
                email: data.email,
                password: data.password,
                redirectTo: "/dashboard"
            });
            if (result?.error) {
                setError(result.error); // Display error message if authentication fails
            } else {
                setError(null); // Clear any previous errors on successful login
                //router.push('/dashboard'); // Redirect to dashboard after successful login
            }
        } catch (error) {
            console.error("An unexpected error occurred:", error);
            setError('An unexpected error occurred');
        }
    };

    return (
        <div className="mx-auto">
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={data.email}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        value={data.password}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full flex justify-center items-center gap-2 rounded-lg bg-white px-6 py-2 text-sm font-medium text-gray-800 shadow-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300 border border-gray-300"
                >
                    Sign in with Email
                </button>
            </form>
        </div>
    );
}