import React from 'react';

import { MyOrganizations } from 'components/MyOrganizations';
import { EventsAsOrganizer } from 'components/EventsAsOrganizer';

export const MainDashboard = () => {
  return (
    <section>
      <MyOrganizations />
      <EventsAsOrganizer />
    </section>
  );
};
