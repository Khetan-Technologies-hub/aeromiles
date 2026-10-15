import Link from "next/link";

export default function NotFound() {
  return (
    <main
      id="main"
      className="min-h-dvh bg-white px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-3xl rounded-3xl border border-line bg-bg p-8 text-center shadow-sm sm:p-12">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue">
          404
        </p>
        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
          Page not found
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate">
          The page you are looking for is unavailable. You can return to the
          homepage or continue exploring our platforms.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-navy px-6 text-sm font-bold text-white transition-colors hover:bg-navy-900"
          >
            Back to Home
          </Link>
          <Link
            href="/products"
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-line bg-white px-6 text-sm font-bold text-navy transition-colors hover:border-blue/50 hover:text-blue-600"
          >
            Explore Products
          </Link>
        </div>
      </div>
    </main>
  );
}
