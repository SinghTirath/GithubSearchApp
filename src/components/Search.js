import React from 'react';
import './Search.css';

const Search = (props) => {

    const handleChange = (e) => {
        props.onChange(e.target.value);
    }


    return (
        <div className="d-flex justify-content-center pt-5">
            <div class="col-xs-3">
                <input 
                    className="form-control input-lg" 
                    type="text" 
                    placeholder="Search" 
                    onChange={handleChange }
                />
            </div>
        </div>
    );
};

export default Search;