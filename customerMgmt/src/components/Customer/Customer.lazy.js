import React, { lazy, Suspense } from 'react';

const LazyCustomer = lazy(() => import('./Customer'));

const Customer = props => (
  <Suspense fallback={null}>
    <LazyCustomer {...props} />
  </Suspense>
);

export default Customer;
