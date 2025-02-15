import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { ordered , restocked} from '../icecream/iceCreamSlice';
const IceCreamView = () => {
  const [value, setValue] = useState(1);
  const  numOfIceCreams = useSelector((state)=> state.icecream.numOfIceCreams);
  const dispatch = useDispatch();
  return (
    <div> <div>
    <h2>Number of IceCream - {numOfIceCreams} </h2>
    <input type="number" value={value} onChange={(e)=>setValue(parseInt(e.target.value))} />
    <br/>
    <button onClick={()=>dispatch(ordered(value))}>Order IceCream</button>
    <button onClick={()=>dispatch(restocked(5))}>Restock IceCream</button>
  </div></div>
  )
}

export default IceCreamView