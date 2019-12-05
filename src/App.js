import React from 'react';

function Food(props) {
  return (
  <h1>I love { props.fav }</h1>
  );
}

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Food fav="kimchi"/>
      <Food fav="라면"/>
      <Food fav="삼겹살"/>
      <Food fav="쭈꾸미"/>
    </div>
  );
}

export default App;
