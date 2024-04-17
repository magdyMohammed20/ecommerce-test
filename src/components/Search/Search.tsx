import algoliasearch from "algoliasearch/lite";
import "./styles.css";
import { useState } from "react";
import {
  InstantSearch,
  SearchBox,
  Hits,
  Highlight,
  RefinementList,
} from "react-instantsearch-dom";

const searchClient = algoliasearch(
  "7Z9K9OGCK1",
  "ce115f93911e3eee1cd3990f7fc6da62"
);

function Hit({ hit }) {
  return (
    <article className="product">
      <img src={hit.thumbnail} alt={hit.thumbnail} />
      <div>
        <h1>
          <Highlight attribute="title" hit={hit} />
        </h1>
        <p>${hit.price}</p>
      </div>
    </article>
  );
}

export default function Search() {
  const [query, setQuery] = useState("");
  const [showResults, setShowResults] = useState(false);

  const handleSearchChange = (event) => {
    const value = event.currentTarget.value;
    setQuery(value);

    if (value.trim().length > 0) {
      setShowResults(true);
    } else {
      setShowResults(false);
    }
  };

  return (
    <div className="container">
      <InstantSearch searchClient={searchClient} indexName="ecommerce" insights>
        <SearchBox
          onChange={handleSearchChange}
          value={query}
          className="search-box"
          placeholder="Search for products..."
        />

        {showResults && (
          <div className="results-container">
            <Hits hitComponent={Hit} />
            <div className="refinement-list-container">
              <RefinementList attribute="category" />
            </div>
          </div>
        )}
      </InstantSearch>
    </div>
  );
}
