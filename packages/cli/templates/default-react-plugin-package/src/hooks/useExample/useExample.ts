import { useEffect } from 'react';
import { useApi, alertApiRef } from '@devtools/core-plugin-api';

/**
 * Shows an example alert.
 *
 * @public
 */
export function useExample() {
  const alertApi = useApi(alertApiRef);

  useEffect(() => {
    alertApi.post({ message: 'Hello World!' });
  }, [alertApi]);
}
