import * as React from 'react';
import { useContext, useState } from 'react';
import { Button, Text, Input, Label, Tip } from 'react-figma-plugin-ds';
import { FlexContainer, Modal, SwitchesModal } from '../components';
import { PluginContext } from '../ContextProvider';
import useMessage from '../hooks/useMessage';

export default function GenerateComponentProperties() {
  const [properties, setProperties] = useState(null);
  const [isGenerating, setIsGenerating] = useState(null);
  const { postMessageToPlugin } = useMessage();
  const { disableSubmit } = useContext(PluginContext);
  const handleSubmit = e => {
    e.preventDefault();
    postMessageToPlugin('setComponentSetChildren', null);
    setIsGenerating(true);
  };
  const handleChange = value => {
    setProperties(value.split(','));
  };

  return (
    <section>
      <Text size='xlarge' weight='bold' className='auto__title'>
        No template
      </Text>

      <FlexContainer direction='column' gap='sm'>
        <form onSubmit={handleSubmit}>
          <div className='flex-col'>
            <Label size='small' weight='medium'>
              Properties
            </Label>
            <Input
              className='properties'
              type='text'
              onChange={handleChange}
              placeholder='primary,secondary,focus,hover ...'
            />
          </div>
          <Button
            isPrimary
            isDisabled={
              disableSubmit || !properties || properties.length === 0
            }>
            Generate Component’s properties
          </Button>
        </form>
        {disableSubmit || !properties || properties.length === 0 ? (
          <Tip iconColor='red' iconName='alert'>
            to enable: select one component set and write at least one property
            in the input field above
          </Tip>
        ) : null}
        {isGenerating ? (
          <Modal onClose={null} isGenerating={isGenerating}>
            <SwitchesModal
              properties={properties}
              setIsGenerating={setIsGenerating}
            />
          </Modal>
        ) : null}
      </FlexContainer>
    </section>
  );
}
