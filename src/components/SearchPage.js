import React, {useEffect, useState } from 'react';
import './SearchPage.css';

//Components
import User from './User';
import Search from './Search';

const SearchPage = () => {

    const [userList,setUserList] = useState([]);
    const [searchKeyword, setSearchKeyword] = useState("");

    useEffect(() => {
        const fetchData = async () => {
          const res = await fetch(
            'https://api.github.com/users',
          );
          const json = await res.json();
          setUserList(json);
        };
        fetchData();
      });

    const handleChange = (value) => {
        setSearchKeyword(value.toLowerCase());
    }
    
      return (
            <div className='center'>
                <h2>Github Search App</h2>
                <Search
                    onChange={handleChange}
                />

                <ul class="list-group">
                    {
                    userList.filter( (item) => {
                        if (searchKeyword === "" ){
                            return item
                        }
                        else if(item.login.includes(searchKeyword)){
                            return item
                        }
                    
                        }).map( (item,key) => {
                        return(
                            <User user={item} />
                        );
                    })}
                </ul>

            </div>  

          
    )  
}


export default SearchPage;
