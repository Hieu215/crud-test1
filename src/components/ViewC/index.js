import { Button } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { numberStart } from '~/actions';

function ViewC() {
  const dispatch = useDispatch();

  const handleNumber = () => {
    dispatch(numberStart(1));
  };

  return <Button onClick={handleNumber}>Number + 1 </Button>;
}

export default ViewC;
