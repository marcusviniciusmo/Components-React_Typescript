import { useState } from 'react';
import { Link } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

function EyeIcon() {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <div>
        <input type={showPassword ? 'text' : 'password'} />
        {
          showPassword
          ? <VisibilityOffIcon onClick={toggleShowPassword} />
          : <VisibilityIcon onClick={toggleShowPassword} />
        }
      </div>

      <span>Credits: @fabiocberg</span>

      <div>
        <Link to='/components'>
          <button>Back</button>
        </Link>

        <Link to='/'>
          <button>Home</button>
        </Link>
      </div>
    </div>
  );
};

export default EyeIcon;