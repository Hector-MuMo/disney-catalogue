import { Loader } from 'lucide-react';
import type { JSX } from 'react';

const Loading = (): JSX.Element => {
  return (
    <div className="h-screen flex justify-center items-center text-amber-50">
      <Loader size={35} />
      <p>Loading...</p>
    </div>
  );
};

export default Loading;
