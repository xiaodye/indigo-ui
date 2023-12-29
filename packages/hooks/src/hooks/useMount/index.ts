import { useEffect } from 'react';

function useMount(fn: () => void): void {
  useEffect(() => {
    fn();
  }, []);
}

export default useMount;
