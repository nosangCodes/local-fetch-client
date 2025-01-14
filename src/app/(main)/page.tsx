import TodaysDeals from "@/components/todays-deals";
import Trending from "@/components/trending";

export default function Home() {
  return (
    <section className="flex flex-col gap-y-4">
      <div className="px-2 relative overflow-clip">
        <h1 className="font-semibold text-lg text-primary md:text-xl mb-2">Trending</h1>
        <Trending className="pb-3 " />
      </div>
      <div className="px-2 relative overflow-clip">
        <h1 className="font-semibold text-primary text-lg md:text-xl mb-2">Deals of the day</h1>
        <TodaysDeals className="pb-3 " />
      </div>
    </section>
  );
}
