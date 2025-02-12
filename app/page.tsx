import { CredentialsSignIn } from "@/components/cred-sign-in";
import GoogleSignIn from "@/components/google-sign-in";

export default async function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col items-center justify-center">
        <div className="w-full max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm text-black">
          <GoogleSignIn />
          <div className="w-full flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="text-gray-500 text-sm">or</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>
          <CredentialsSignIn />
        </div>
      </main>
    </div>
  );
}
