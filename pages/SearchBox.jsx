import React from 'react';

const SearchBox = props => {
  const handleChange = (e) => {
    props.setFacId(e.target.value);
  }

  return (
  <div id="search-box">
    <form>
      <input type="text" id="facId" name="facId" minLength="3" maxLength="3" placeholder="Facility ID" value={props.facId} onChange={handleChange}/>
    </form>
  </div>
)}

export default SearchBox;