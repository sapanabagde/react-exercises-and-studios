let stars = ["⭐", "⭐ ⭐", "⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐ ⭐"];

function RateARecipe(props) {
  
  function GiveRating(props) {
    return <h3>{stars[props.rating - 1]}</h3>
  }
  return (props.rating < 1 || props.rating > 5) ? null : GiveRating();
}

export default RateARecipe;

//conditional to render stars based on a number provided in App.js 
