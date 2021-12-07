import * as React from 'react';

import { useContext, useState } from 'react';
import { AnimationsTemplateContainer } from '../components';
import { PluginContext } from '../ContextProvider';
import { useMessage } from '../hooks';
import { Label } from 'react-figma-plugin-ds';
import { EditTemplate } from '.';
import { Modal } from '../components';

export default function AnimationsTemplateList() {
  const { postMessageToPlugin } = useMessage();
  const { finishedLoading, data } = useContext(PluginContext);
  const [isEdit, setIsEdit] = useState(false);
  const [currentTemplateId, setCurrentTemplateId] = useState(null);

  const handleClick = data => {
    postMessageToPlugin('createPages', data.split(','));
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
      {finishedLoading && data && data.templates && data.templates.length ? (
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
              data.templates.map(template => {
                return (
                  <AnimationsTemplateContainer
                    key={template.id}
                    onClick={handleClick}
                    templateData={template}
                    onEditClick={handleEdit}
                    animationTriggerType='ON_HOVER'
                  />
                );
              })}
          </ul>
        </section>
      ) : null}
    </>
  );
}
