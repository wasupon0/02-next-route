import { Suspense } from "react";

import Repo from "@/app/components/Repo";
import RepoDirs from "@/app/components/RepoDirs";
import Link from "next/link";

export default function RepoPage({ params: { name } }) {
  return (
    <div className="card">
      <Link href="/code/repos" className="btn btn-back">
        Back to repositories
      </Link>
      <Suspense fallback={<p>Loading repo...</p>}>
        <Repo name={name} />
      </Suspense>
      <Suspense fallback={<p>Loading directories...</p>}>
        <RepoDirs name={name} />
      </Suspense>
    </div>
  );
}
