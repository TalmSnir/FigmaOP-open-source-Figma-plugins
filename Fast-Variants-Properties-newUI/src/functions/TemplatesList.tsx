import * as React from 'react';

import { useContext, useState } from 'react';
import { TemplateContainer } from '../components';
import { PluginContext } from '../ContextProvider';
import useMessage from '../hooks/useMessage';
import { Label, Text } from 'react-figma-plugin-ds';
import { EditTemplate } from '.';
import { Modal, SwitchesModal } from '../components';

export default function TemplateList() {
  const { finishedLoading, data } = useContext(PluginContext);
  const [isEdit, setIsEdit] = useState(false);
  const [isGenerating, setIsGenerating] = useState(null);
  const [properties, setProperties] = useState(null);
  const [currentTemplateId, setCurrentTemplateId] = useState(null);
  const { postMessageToPlugin } = useMessage();

  const handleClick = data => {
    postMessageToPlugin('setComponentSetChildren', null);
    setIsGenerating(true);
    setProperties(data);
  };
  const handleEdit = (e, templateId) => {
    e.stopPropagation();
    setIsEdit(true);
    setCurrentTemplateId(templateId);
  };
  const handleClose = () => {
    setIsEdit(false);
  };

  return (
    <section>
      <Text size='xlarge' weight='bold'>
        Templates
      </Text>
      {finishedLoading && data && data.length ? (
        <>
          {isEdit ? (
            <Modal onClose={handleClose}>
              <EditTemplate
                templateId={currentTemplateId}
                onClose={handleClose}
              />
            </Modal>
          ) : null}
          {isGenerating ? (
            <Modal onClose={handleClose} isGenerating={isGenerating}>
              <SwitchesModal
                properties={properties}
                setIsGenerating={setIsGenerating}
              />
            </Modal>
          ) : null}
          <Label size='small' weight='medium'>
            Saved templates
          </Label>
          <ul>
            {finishedLoading &&
              data &&
              data.map(template => {
                return (
                  <TemplateContainer
                    key={template.id}
                    onClick={() => handleClick(template.properties.split(','))}
                    template={template}
                    onEditClick={handleEdit}
                  />
                );
              })}
          </ul>
        </>
      ) : null}
    </section>
  );
}
