import { signIn } from "@/auth"

export function CredentialsSignIn() {

    async function handleSignIn(formData: FormData) {
        "use server"
        await signIn("credentials", {
            email: formData.get("email"),
            password: formData.get("password"),
            redirectTo: "/dashboard"
        })

    }

    return (
        <form
            action={handleSignIn}
            className="w-full space-y-4"
        >
            <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                    Email
                    <input
                        name="email"
                        type="email"
                        className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400"
                        required
                        defaultValue="aurore@domain.com"
                    />
                </label>
            </div>
            <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                    Password
                    <input
                        name="password"
                        type="password"
                        className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400"
                        required
                        defaultValue="12345678"
                    />
                </label>
            </div>
            <button
                type="submit"
                className="w-full rounded-lg bg-gray-800 px-6 py-2 text-sm font-medium text-white shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
                Sign in with Email
            </button>
        </form>
    )
}