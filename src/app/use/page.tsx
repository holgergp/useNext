"use client";

import { Suspense } from "react";
import { ComponentWithUse } from "@/app/use/componentWithUse";

export default function Page() {
  return (
    <Suspense fallback={<p>Loading data...</p>}>
      <ComponentWithUse key={1} />
    </Suspense>
  );
}
