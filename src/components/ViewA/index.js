import { useSelector } from 'react-redux';


function ViewA() {

  const { number } = useSelector((state) => state.number);
  return <div>Number {number}</div>;
}

export default ViewA;
