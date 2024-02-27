import  { nameContext } from './usecontext'
import { useContext } from 'react';
export default function A({value}) {
    let usecont=useContext(nameContext)
    console.log(usecont.name);
    console.log(value);
  return (
    <div>A</div>
  )
}
