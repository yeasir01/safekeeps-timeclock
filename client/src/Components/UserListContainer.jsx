import React from 'react';
import Box from '@mui/material/Box';
import UserList from './UserList';
import Spinner from './Spinner';
import Search from './Search';
import sampledata from './sampledata';

export default function UserListContainer() {
    const [users, setUsers] = React.useState([]);
    const [isLoading, SetIsLoading] = React.useState(true);
    const [search, setSearch] = React.useState('');
    const [results, setResults] = React.useState([]);

    React.useEffect(()=>{
        setUsers(sampledata)
        SetIsLoading(false)
    },[]);

    React.useEffect(()=>{
        const filteredResults = users.filter((person) => (
            person.name.toLowerCase().includes(search.toLowerCase())
        ));

        setResults(filteredResults);
    },[search, users]);

    function updateSearch(event) {
        setSearch(event.target.value);
    }
    
    const renderList = (search.length > 0) ? results : users;

    if (isLoading) {return <Spinner />}

    return (
        <div>
            <Box>
                <Search state={search} handleChange={updateSearch}/>
            </Box>
            <UserList list={renderList}/>
        </div>
    )
};