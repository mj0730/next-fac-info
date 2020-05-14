import React, {useContext} from 'react';
import SearchIcon from '@material-ui/icons/Search';
import {FacIdContext} from './FacIdContext';

const SearchBox = () => {
  const [FacId, storeFacId] = useContext(FacIdContext)

  const handleChange = (e) => {
    e.preventDefault();
    storeFacId(e.target.value.toUpperCase());
  }

  return (
  <div id="search-box">
    <form className="search-container">
    <SearchIcon style={{ flexShrink: '1', fontSize: 'inherit' }}/>
      <input type="text" id="facId" name="facId" minLength="3" maxLength="3" placeholder="Search Facility ID" value={FacId} onChange={handleChange}/>
    </form>
  </div>
)}

export default SearchBox;