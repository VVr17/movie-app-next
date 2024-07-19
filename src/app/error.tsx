'use client'; // Error components must be Client Components
import { useEffect } from 'react';

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  // Log the error to an error reporting service
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="section">
      <div className="container flex flex-col gap-10 text-center">
        <h1 className="title-primary">Something went wrong</h1>
      </div>
    </section>
  );
}
