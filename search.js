import React, { useState } from 'react';

function SearchInput({ data }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = data.filter(item =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );
console.log(SearchInput)
  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={event => setSearchTerm(event.target.value)}
      />
      <ul>
        {filteredData.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
export default SearchInput