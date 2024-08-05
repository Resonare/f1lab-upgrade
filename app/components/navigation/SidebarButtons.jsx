import PropTypes from 'prop-types';
import { Link } from '@remix-run/react';

const SidebarWhyButton = ({ background }) => {
  const sideButtons = [
    { text: 'Зачем?', to: '#why' },
    { text: 'Как?', to: '#how' },
    { text: 'Примеры', to: '#examples' },
    { text: 'Сколько?', to: '#how-much' },
  ];

  return (
    <div className='fixed top-90 max-md:right-0 grid md:justify-items-start justify-items-end'>
      {sideButtons.map((button) => (
        <div
          key={button.text}
          className='grid md:justify-items-start justify-items-end text-center'
        >
          <Link
            to={button.to}
            style={{ writingMode: 'vertical-rl' }}
            className={`left-0 top-90 p-10 md:rotate-0 rotate-180 border-r md:border-b max-md:border-t  border-dashed ${background} font-subtitle text-gray-400 transition ease-in-out hover:bg-gray-400 hover:text-gray-100 duration-600`}
          >
            {button.text}
          </Link>
        </div>
      ))}
    </div>
  );
};

SidebarWhyButton.propTypes = {
  background: PropTypes.string,
};

export default SidebarWhyButton;
