import { Link } from "react-router-dom";


function CardComponent(props) {
  return (
    <Link to={`recipe/${props.id}`} className="recipe-card">
      <img src={props.image} alt="Recipe" />
      <p className="recipe-name">{props.name}</p>
      <p className="recipe-rating">Rating : {props.rating}</p>
      <p className="recipe-review-count">ReviewCount: {props.reviewCount}</p>
   
    </Link>
  );
}

export function CardComponent1(props) {
  return (
    <Link to={`recipe/${props.id}`} className="recipe-card1">
      <img src={props.image} alt="Recipe" />
      <p className="recipe-name1">{props.name}</p>
      
   
    </Link>
  );
}

export function CardComponent2(props) {
  return (
    <Link to={`recipe/${props.id}`} className="recipe-card2">
      <img src={props.image} alt="Recipe" />
      <p className="recipe-name2">{props.name}</p>
     
    </Link>
  );
}


export default CardComponent;