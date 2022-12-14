import React from 'react';
import MyInput from './UI/input/MyInput';
import MySelect from './UI/select/MySelect';


const PostFilter = ({filter, setFilter}) => {
    return (<div>
        <MyInput 
        value={filter.query}
        onChange={e => setFilter({...filter, query: e.target.value})}
        placeholder='Search...'
        />
        <div>
          <MySelect 
            value={filter.sort}
            onChange = {selectedSort => setFilter({...filter, sort: selectedSort})}
            defaultValue='Sort by'
            options = {[
              {value:'title',name:'Sort by title'},
              {value:'body',name:'Sort by description'}
            ]}
          />
        </div>
    </div>);
}
 
export default PostFilter;