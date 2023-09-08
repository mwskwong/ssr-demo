import MuiButton from "@/components/mui-button";
import NativeButton from "@/components/native-button";

export default function Home() {
  return (
    <main>
      <NativeButton />
      <MuiButton />
    </main>
  );
}

// make sure this page is not statically generated
export const dynamic = "force-dynamic";
