// @verdors
import { Button } from 'react-bootstrap';
import { VscCalendar } from 'react-icons/vsc';

// @styles
import './_floatButton.scss';

export const FloatButton = ({ position = 'right' }) => {
  return (
    <div className={`fb__container ${position}`}>
      <Button className="rounded-circle">
        <VscCalendar />
      </Button>
    </div>
  );
};
