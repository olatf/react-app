

import { useState } from "react";

const NewList = () => {
  const [foodlist, setFoodlist] = useState(["Apple", "Orange", "Banana"]);

  const HandleAddFood =() => {

    const inputElement = document.getElementById('newfood') as HTMLInputElement | null
    const newfood = inputElement?.value || ''
    // inputElement .value = ''

    setFoodlist(f => [...f, newfood])
  }

  const HandleRemove = (index: number) => {
    setFoodlist(foodlist.filter((_,i) => i !== index))


  }

  return (
    <div>
      <h2>Food List</h2>
      <ul>
        {foodlist.map((food, index) => (
          <li key={index} onClick={()=> HandleRemove(index)}>{food}</li>
        ))}
      </ul>
      <input type="text" id="newfood" placeholder="Enter New food" />
      <button onClick={HandleAddFood}>Add Food</button>
    </div>
  );
};

export default NewList;
