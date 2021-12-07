import * as React from 'react';

import 'react-figma-plugin-ds/figma-plugin-ds.css';
import PluginContextProvider from './ContextProvider';
import { AnimationsTemplatesList, Filters } from './functions';
import { FlexContainer, AnimationsTemplate } from './components';

export default function App() {
  return (
    <PluginContextProvider>
      <FlexContainer
        direction='column'
        gap='md'
        ai='flex-start'
        jc='center'
        width='100%'>
        <Filters />
        <AnimationsTemplatesList />
        <AnimationsTemplate />
      </FlexContainer>
    </PluginContextProvider>
  );
}
