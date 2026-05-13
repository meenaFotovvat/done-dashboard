import DashboardContainer from "@/components/dashboard/DashboardContainer";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 px-8 pb-20 font-sans">
      <main className="row-start-2 flex flex-col items-center gap-8 sm:items-start">
        <Suspense fallback={<div>در حال بارگذاری داشبورد...</div>}>
          <DashboardContainer />
        </Suspense>
      </main>
    </div>
  );
}
