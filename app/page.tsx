import NativeButton from "@/components/native-button";

export default function Home() {
  return (
    <main>
      <NativeButton />
    </main>
  );
}

// make sure this page is not statically generated
export const dynamic = "force-dynamic";
