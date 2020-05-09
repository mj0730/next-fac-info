import React from 'react';
import SearchIcon from '@material-ui/icons/Search';

const SearchBox = ({facId, setFacId}) => {
  const handleChange = (e) => {
    setFacId(e.target.value.toUpperCase());
  }

  return (
  <div id="search-box">
    <form className="search-container">
    <SearchIcon style={{ flexShrink: '1', fontSize: 'inherit' }}/>
      <input type="text" id="facId" name="facId" minLength="3" maxLength="3" placeholder="Search Facility ID" value={facId} onChange={handleChange}/>
    </form>
  </div>
)}

export default SearchBox;