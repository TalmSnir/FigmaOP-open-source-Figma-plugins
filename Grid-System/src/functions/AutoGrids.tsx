import * as React from 'react';
import { useContext } from 'react';
import { Button, Text, Tip } from 'react-figma-plugin-ds';
import { FlexContainer } from '../components';
import { PluginContext } from '../ContextProvider';
import useMessage from '../hooks/useMessage';
export default function AutoGrids() {
  const { postMessageToPlugin } = useMessage();
  const { disableSubmit } = useContext(PluginContext);
  const handleAddAutoGrids = () => {
    postMessageToPlugin('createAutoGrids', null);
  };
  const hideAllGrids = () => {
    postMessageToPlugin('hideAllGrids', null);
  };
  const showAllGrids = () => {
    postMessageToPlugin('showAllGrids', null);
  };
  return (
    <section>
      <Text size='xlarge' weight='bold' className='auto__title'>
        Auto
      </Text>
      <FlexContainer direction='column' gap='sm'>
        <Button
          isPrimary
          onClick={handleAddAutoGrids}
          isDisabled={disableSubmit}>
          Apply auto grids
        </Button>
        <Button isPrimary onClick={hideAllGrids} isDisabled={disableSubmit}>
          Hide all grids
        </Button>
        <Button isPrimary onClick={showAllGrids} isDisabled={disableSubmit}>
          Show all grids
        </Button>
        {disableSubmit ? (
          <Tip iconColor='red' iconName='alert'>
            to enable: select one or more frames and only frames
          </Tip>
        ) : null}
      </FlexContainer>
    </section>
  );
}
