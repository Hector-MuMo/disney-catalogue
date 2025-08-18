import { HeartCrack } from 'lucide-react';
import type { JSX } from 'react';

interface GenericErrorProps {
  errorMsg: Error;
}

const GenericError = ({ errorMsg }: GenericErrorProps): JSX.Element => {
  return (
    <div className="h-screen flex justify-center items-center text-amber-50">
      {errorMsg ? <p>{errorMsg.message}</p> : <p>Cant connect to the server. Try again later.</p>}
      <HeartCrack size={35} />
      <p>Sorry</p>
    </div>
  );
};

export default GenericError;
