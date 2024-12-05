import SearchForm from "../components/SearchForm";
import Card from "../components/Card";

export default async function Home({searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  console.log(query)
  return (
    <>
    <section className="pink_container">
      <h1 className="heading">Pitch Your Startup, <br />
      Connect with Entrepreneurs</h1>
  
      <p className="sub-heading max-w-3xl">Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions</p>
      <SearchForm query={query}/>
    </section>

    <section className="mx-12 sm:mx-16 md:24">
      <Card query={query}/>
    </section>
    </>
  );
}
