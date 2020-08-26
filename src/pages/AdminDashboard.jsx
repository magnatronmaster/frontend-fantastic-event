import React from 'react';

import { MyEvents } from 'components/MyEvents';
import { CreateMyEvents } from 'components/CreateMyEvents';

export const AdminDashboard = () => {
  return (
    <div>
      <MyEvents />
      <CreateMyEvents />
    </div>
  );
};
