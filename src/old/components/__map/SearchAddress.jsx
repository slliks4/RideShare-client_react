// React import
import { useState } from 'react';

// React Router Dom Import
import { Form } from 'react-router-dom';

// Icons Import
import { SearchIcon } from '../../imports/icons';

// Library Import
import { PropTypes } from '../../imports/library';

// Default Function
export default function SearchAddress() {

    return (
        <Form method='POST' className='w-full flex items-center justify-evenly px-2 bg-primary rounded-box'>
            <SearchIcon />
            <input 
                type="search" 
                name="search" 
                id="search"
                placeholder="Enter pick up address ......."
                className='w-11/12 p-4 bg-transparent outline-none'
            />
        </Form>
    );
}


// Type Checking
SearchAddress.propTypes = {
    searchTerm: PropTypes.string,
}