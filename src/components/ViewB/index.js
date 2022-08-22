import { useSelector } from 'react-redux';

function ViewB() {
  const { number } = useSelector((state) => state.number);
  return <div>Number {number}</div>;
}

export default ViewB;
