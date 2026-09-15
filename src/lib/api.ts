export type MiniApp = {
  id: string;
  template: string;
  name: string;
  slug: string;
  themeColor: string;
  logoUrl: string | null;
};

const API_URL = process.env.NEXT_PUBLIC_API_URL!;
const MiniAppId = process.env.MINI_APP_ID!;

export async function getMiniApp(): Promise<MiniApp> {
  const res = await fetch(`${API_URL}/api/mini-app/${MiniAppId}`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) throw new Error("Failed to load mini app");
  return res.json();
}
