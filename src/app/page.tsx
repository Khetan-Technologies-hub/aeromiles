export default function Home() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center bg-navy px-6 text-center">
      <div className="max-w-xl">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue">
          Engineered in India · Built for Precision
        </p>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
          AEROMILES
        </h1>
        <p className="mt-5 text-lg text-white/70">
          RC planes, drones and aeromodelling labs — website coming soon.
        </p>
        <div
          className="mx-auto mt-8 h-1 w-40 rounded-full"
          style={{
            background:
              "linear-gradient(90deg, var(--color-saffron), #ffffff, var(--color-green))",
          }}
        />
      </div>
    </main>
  );
}
