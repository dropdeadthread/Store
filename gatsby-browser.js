import 'typeface-creepster';
import 'typeface-dm-sans';
import './src/components/Layout/Globals.css';


import React from 'react';

import { NotificationProvider } from './src/context/AddItemNotificationProvider';

export const wrapRootElement = ({ element }) => (
  <NotificationProvider>{element}</NotificationProvider>
);
