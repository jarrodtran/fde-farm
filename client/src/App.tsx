import { useEffect, useState } from "react";
import { trpc } from "./trpc";

export default function App() {
  const [hello, setHello] = useState<{ text: string } | null>(null);
  useEffect(() => {
    trpc.hello.query().then((data) => setHello(data));
  }, []);

  return (
    <div className="min-h-screen bg-white px-6">
      <header className="mx-auto max-w-xl text-center">
        <h1 className="displays text-2xl">FDE Farm</h1>
        {hello ? <p className="mt-2 text-gray-600">{hello.text}</p> : null}
      </header>
      <main className="mx-auto max-w-xl">
        <button
          type="button"
          className="primary"
          data-testid="primary-action"
          onClick={() => {}}
        >
          New task
        </button>
      </main>
    </div>
  );
}
