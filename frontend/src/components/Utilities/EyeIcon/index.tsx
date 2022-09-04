import { useState } from 'react';
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
    </div>
  );
};

export default EyeIcon;