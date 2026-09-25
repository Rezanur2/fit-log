import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-base-200 px-6">
      <div className="w-full max-w-2xl text-center">

        {/* Status */}
        <div className="inline-flex items-center gap-2 rounded-full border border-base-300 bg-base-100 px-4 py-2 text-sm text-base-content/70 shadow-sm">
          <span className="h-2 w-2 rounded-full bg-error" />
          Error 404
        </div>

        {/* Heading */}
        <h1 className="mt-7 text-5xl font-bold tracking-tight text-base-content sm:text-6xl">
          Page not found
        </h1>

        {/* Description */}
        <p className="mx-auto mt-5 max-w-md text-base leading-7 text-base-content/60">
          The page you&apos;re looking for doesn&apos;t exist, has been moved,
          or is temporarily unavailable.
        </p>

        {/* Actions */}
        <div className="mt-8 items-center justify-center sm:flex-row">
          <Link
            href="/"
            className="btn btn-primary min-w-36 rounded-lg"
          >
            Go to Homepage
          </Link>
        </div>

        {/* Decorative line */}
        <div className="mx-auto mt-12 h-px w-24 bg-linear-to-r from-transparent via-primary to-transparent" />

        <p className="mt-4 text-xs text-base-content/40">
          Nothing to see here.
        </p>
      </div>
    </main>
  );
}
