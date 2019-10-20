import React from 'react'

// function NumberList(props) {
//   const numbers = props.numbers;
//   const listItems = numbers.map((number) =>
//     <li key={number.toString()}>{number}</li>
//   );
//   return (
//     <ul>{listItems}</ul>
//   );
// }

function ListItem(props) {
  // Correct! There is no need to specify the key here:
  return <li>{props.value}</li>;
}

function NumberList(props) {
  const numbers = props.numbers;
  // const listItems = numbers.map((number) =>
  //   // Correct! Key should be specified inside the array.
  //   <ListItem key={number.toString()}
  //             value={number} />

  // );
  return (
    //
    <ul>
      {/* {listItems} */}
      {/* Embedding map() in JSX */}
      {numbers.map((number) =>
        <ListItem 
          key={number.toString()}
          value={number} 
        />)
      }
    </ul>
  );
}




export default NumberList;