import LeftSection from "./Components/LeftSection";
import RightSection from "./Components/RightSection";

function App() {
  return (
    <main className=" w-full md:grid md:grid-cols-2 h-full xl:min-h-screen">
      <section className="bg-lightBlue md:py-[4cqw] h-full px-[4cqw] py-[12cqw] md:px-[6cqw] overflow-hidden">
        <LeftSection />
      </section>
      <section className="px-[4cqw] pt-[12cqw] pb-[24cqw] md:py-[7cqw] md:pl-[6cqw] md:pr-[9cqw] overflow-hidden">
        <RightSection />
      </section>
    </main>
  );
}

export default App;
