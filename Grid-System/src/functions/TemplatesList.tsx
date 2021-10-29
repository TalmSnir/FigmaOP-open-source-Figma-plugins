import * as React from 'react';

import { useContext, useState } from 'react';
import { TemplateContainer } from '../components';
import { PluginContext } from '../ContextProvider';
import { useMessage } from '../hooks';
import { Label, Text } from 'react-figma-plugin-ds';
import { EditTemplate } from '.';
import { Modal } from '../components';

export default function TemplateList() {
  const { postMessageToPlugin } = useMessage();
  const { finishedLoading, data } = useContext(PluginContext);
  const [isEdit, setIsEdit] = useState(false);
  const [currentTemplateId, setCurrentTemplateId] = useState(null);

  const handleClick = data => {
    postMessageToPlugin('createSpecificGrid', data);
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
    <>
      <Text size='xlarge' weight='bold' className='templates__title'>
        Templates
      </Text>
      {finishedLoading && data && data.length ? (
        <section>
          <Label size='small' weight='medium'>
            Saved templates
          </Label>
          <ul>
            {isEdit ? (
              <Modal onClose={handleClose}>
                <EditTemplate
                  templateId={currentTemplateId}
                  onClose={handleClose}
                />
              </Modal>
            ) : null}
            {finishedLoading &&
              data &&
              data.map(template => {
                return (
                  <TemplateContainer
                    key={template.id}
                    onClick={() => handleClick(template.id)}
                    templateData={template}
                    onEditClick={handleEdit}
                  />
                );
              })}
          </ul>
        </section>
      ) : null}
    </>
  );
}
