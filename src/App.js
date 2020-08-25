import React from 'react';
// import Accordion from './components/Accordion';
// import Search from './components/Search';
import Dropdown from './components/Dropdown';

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
      content: 'red'
   },
   {
      label: 'The Color Green',
      content: 'green'
   },
   {
      label: 'A Shade of Blue',
      content: 'blue'
   }
];

export default () => {
   return (
      <div>
         {/* <Accordion items={items} /> */}
         {/* <Search /> */}
         <Dropdown options={options} />
      </div>
   )
}