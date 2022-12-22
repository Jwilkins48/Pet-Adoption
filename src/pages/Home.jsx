import React from "react";
import AnimalSearch from "../components/animals/AnimalSearch";
import SearchResults from "../components/animals/SearchResults";
import Input from "../components/layout/Input";

function Home() {
  return (
    <div>
      {/* <h1>MEET YOUR NEW BEST FRIEND</h1>
      <p>Schedule your meeting today!</p> */}
      <Input />
      <SearchResults />
    </div>
  );
}

export default Home;
