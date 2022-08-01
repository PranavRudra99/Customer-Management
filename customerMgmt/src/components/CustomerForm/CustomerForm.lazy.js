import React, { lazy, Suspense } from 'react';

const LazyCustomerForm = lazy(() => import('./CustomerForm'));

const CustomerForm = props => (
  <Suspense fallback={null}>
    <LazyCustomerForm {...props} />
  </Suspense>
);

export default CustomerForm;
