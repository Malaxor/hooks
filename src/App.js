import React, { useState } from 'react';
import { Route } from './components/nav/Route';
import Header from './components/Header';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';

const items = [
   {
      title: 'What is React?',
      content: 'React is a front-end JS framework'
   },
   {
      title: 'Why use React?',
      content: 'React is a favorite among engineers'
   },
   {
      title: 'How do you use React?',
      content: 'React apps are an accumulation of reusable components'
   },
];

const options = [
   {
      label: 'The Color Red',
      value: 'red'
   },
   {
      label: 'The Color Green',
      value: 'green'
   },
   {
      label: 'A Shade of Blue',
      value: 'blue'
   }
];

export default () => {
   const [ selected, setSelected ] = useState(options[0]);

   return (
      <div>
         <Header />
         <Route path="/">
            <Accordion items={items} />
         </Route>
         <Route path="/list">
            <Search />
         </Route>
         <Route path="/dropdown">
            <Dropdown 
               label='Select a Color'
               options={options}
               selected={selected}
               onSelectedChange={setSelected}
            />
         </Route>
         <Route path="/translate">
            <Translate />
         </Route>
      </div>
   )
}