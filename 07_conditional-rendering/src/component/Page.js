import { useState } from 'react';
import WarningBanner from './WarningBanner';

export default function Page() {
  const [showWarning, setShowWarning] = useState(true);

  const handleToggleClick = () => {
    setShowWarning(!showWarning);
  };

  return (
    <>
      <WarningBanner warn={showWarning} />
      <button onClick={handleToggleClick}>
        {showWarning ? 'Hide' : 'Show'}
      </button>
    </>
  );
}
