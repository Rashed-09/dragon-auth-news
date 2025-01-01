import moment from 'moment';
import logo from '../assets/logo.png'
const Header = () => {
    return (
      <div className='flex justify-center py-4'>
        <div className="space-y-3 text-center">
          <img src={logo} alt="News paper logo" />
          <p>Journalism Without Fear or Favour</p>
          <p className="text-2xl font-bold">
            {moment().format("dddd, MMMM, D, YYYY")}
          </p>
        </div>
      </div>
    );
};

export default Header;