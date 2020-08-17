import React from 'react';
import Accordion from './components/Accordion';

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

export default () => {
   return (
      <div>
         <Accordion items={items} />
      </div>
   )
}