// React Import
import React, { useState } from 'react';
// Components Import
import SearchSession from '../../SearchSession';
import BuildSessionList from '../BuildSessionList';

// Home Rider Default Function
export default function HomeRider() {
  // Session Search value
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <>
      <SearchSession searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <BuildSessionList searchTerm={searchTerm} />
    </>
  )
}
