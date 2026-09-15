import { getMiniApp } from "@/lib/api";

export default async function Home() {
  const miniApp = await getMiniApp();

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      App Name: {miniApp.name}
    </div>
  );
}
