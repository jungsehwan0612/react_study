import React from 'react';
import PropTypes from 'prop-types';


const foodILike = [
  {
    key: 1,
    name: "김치",
    image: "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
    rating: 5.0
  },
  
  {
    key: 2,
    name: "삼겹살",
    image: "https://image.chosun.com/sitedata/image/201902/24/2019022401106_0.jpg",
    rating: 4.0
  },
  
  {
    key: 3,
    name: "라면",
    image: "http://file.mk.co.kr/meet/neds/2017/09/image_readtop_2017_587233_15042337473013492.jpg",
    rating: "3.7"
  }
]

// function renderFood(dish) {
  //   // console.log(dish)
  //   return <Food name={ dish.name } image= { dish.image }/>
  // }
  
function Food({ name, image, rating }) {
  return (
    <div>
      <h2>I love { name }</h2>
      <h4>{ rating }/5.0</h4>
      <img src={ image } alt= { name } />
    </div>
  );
} 
Food.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number
}

function App() {
  return (
    <div>
      <h1>Hello</h1>
      {foodILike.map(dish => 
        <Food key={ dish.key } name={ dish.name } image={ dish.image } rating={ dish.rating }/>
      )}
      {/* {foodILike.map(renderFood)} */}
    </div>
  );
}

export default App;
