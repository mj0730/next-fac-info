import React from 'react';

const SearchBox = ({facId, setFacId}) => {
  const handleChange = (e) => {
    setFacId(e.target.value.toUpperCase());
  }

  return (
  <div id="search-box">
    <form>
      <input type="text" id="facId" name="facId" minLength="3" maxLength="3" placeholder="Facility ID" value={facId} onChange={handleChange}/>
    </form>
  </div>
)}

export default SearchBox;