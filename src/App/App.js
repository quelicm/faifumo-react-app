import React, { Fragment } from 'react';
import Button from '../Button';
import './App.css';
import Logo from './logo.svg';

const App = () => (
  <Fragment>
    <header>
      <h1><img src={ Logo } alt="React logo" /></h1>
    </header>
    <article>
      <h2>{ `Hello world ${process.env.HOST}!`}</h2>
      <p>
        {`lorem ipsum dolor sit amet, vestibulum risus, magna dictumst tellus condimentum,
        vitae inceptos duis,
        sit tellus mi quis. Voluptate vehicula enim eget, vehicula luctus. Quis libero, vivamus sed donec eget in,
        eleifend posuere. Duis tincidunt esse faucibus vivamus, vehicula turpis nullam eget. Magna in dis urna ante
        risus, nec fringilla non cursus, itaque posuere, lorem consequat ullamcorper sit fermentum magnis.
        Et nunc quis, tortor aliquam commodo elementum. Purus id erat odio sagittis.
        `}
      </p>
      <Button type="button">Button</Button>
    </article>
  </Fragment>
);
export default App;
