import * as React from 'react';

import 'react-figma-plugin-ds/figma-plugin-ds.css';
import PluginContextProvider from './ContextProvider';
import {
  PagesIndex,
  PagesTemplateList,
  AddPages,
  DeletePages,
} from './functions';
import { FlexContainer, PagesTemplate } from './components';

export default function App() {
  return (
    <PluginContextProvider>
      <FlexContainer
        direction='column'
        gap='md'
        ai='flex-start'
        jc='center'
        width='100%'>
        <PagesIndex />
        <PagesTemplate />
        <PagesTemplateList />
        <AddPages />
        <DeletePages />
      </FlexContainer>
    </PluginContextProvider>
  );
}
