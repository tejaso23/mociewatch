
import "../styles/search.css";
const Search = ({ setquery, query }) => {


  return (<>
    <div className="search">
      <input
        onChange={(e) => setquery(e.target.value)}
        value={query}
        placeholder="Enter the Movie name"
      ></input>
       
    </div>
    <ul className="underline"></ul>
    </>
  );
};

export default Search;
