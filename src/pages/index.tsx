import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import config from '@/config.json';
import CanvasPage from '@/pages/canvas';
import ChatPage from '@/pages/chat';
import DocsPage from '@/pages/document';

import CreateIris from '@/pages/home';
import SettingsPage from '@/pages/settings';
import UserPage from '@/pages/user';
import Layout from '@/shared/components/Layout';

export const router = createBrowserRouter(
  createRoutesFromElements([
    <Route element={<Layout />}>
      <Route path="/" element={config.isCreateIris ? <CreateIris /> : <DocsPage />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="/user/:pubKey" element={<UserPage />} />
      
      
      <Route path="/create-iris" element={<CreateIris />} />
    </Route>,
  ]),
);
