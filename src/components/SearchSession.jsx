// React import
import { useState } from 'react';

// React Router Dom Import
import { Form } from 'react-router-dom';

// Icons Import
import { SearchIcon } from '../imports/icons';

// Library Import
import { PropTypes } from '../imports/library';

// Default Function
export default function SearchSession({ searchTerm='', setSearchTerm }) {
    const [pending, setPending] = useState(false);

    const handleSearch = async (e) => {
        setPending(true);
        const search = e.target.value;

        setSearchTerm(search);

        const data = { search };

        console.log(data);

        // You can perform the search here, e.g., calling an API with the search term

        setPending(false); // Reset pending after search
    };

    return (
        <Form method='POST' className='w-full flex items-center justify-evenly px-2 bg-primary rounded-box'>
            <SearchIcon />
            <input 
                type="search" 
                name="search" 
                id="search" 
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Search sessions ......."
                className='w-11/12 p-4 bg-transparent outline-none'
            />
        </Form>
    );
}

// Type Checking
SearchSession.propTypes = {
    searchTerm: PropTypes.string,
}