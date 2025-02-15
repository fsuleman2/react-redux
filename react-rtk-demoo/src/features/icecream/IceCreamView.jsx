import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { ordered , restocked} from '../icecream/iceCreamSlice';
const IceCreamView = () => {
  const  numOfIceCreams = useSelector((state)=> state.icecream.numOfIceCreams);
  const dispatch = useDispatch();
  return (
    <div> <div>
    <h2>Number of IceCream - {numOfIceCreams} </h2>
    <button onClick={()=>dispatch(ordered())}>Order IceCream</button>
    <button onClick={()=>dispatch(restocked(5))}>Restock IceCream</button>
  </div></div>
  )
}

export default IceCreamView