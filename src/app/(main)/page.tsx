import Trending from "@/components/trending";

export default function Home() {
  return (
    <section>
      <div className="px-2 relative overflow-clip">
        <h1 className="font-semibold text-lg md:text-xl mb-2">Trending</h1>
        <Trending className="pb-3 " />
      </div>
    </section>
  );
}
