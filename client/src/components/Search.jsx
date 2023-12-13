
// import Form from 'react-bootstrap/Form';

function Search() {
    return (
        <form className="search-form">
        <h2>
         
          {/* <span>Users</span> */}
        </h2>
        <div className="search-input-container">
          <input type="text" placeholder="Please, select the search criteria" name="search" />
          {/* Show the clear button only if input field length !== 0 --> */}
          <button className="btn close-btn">
            <i className="fa-solid fa-xmark"></i>
          </button>

          <button className="btn" title="Please, select the search criteria">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>

        <div className="filter">
          <span>Search Criteria:</span>
          <select name="criteria" className="criteria">
            <option value="">Not selected</option>
            <option value="">First Name</option>
            <option value="">Last Name</option>
            <option value="">EGN / Number</option>
          </select>
        </div>
      </form>
    ) 
}

export default Search;