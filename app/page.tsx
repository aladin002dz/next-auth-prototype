import SignIn from "@/components/sign-in";

export default async function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex justify-center">
      <SignIn />
      </main>
    </div>
  );
}
