import * as React from 'react';

import { useContext, useState } from 'react';
import { PageTemplateContainer } from '../components';
import { PluginContext } from '../ContextProvider';
import { useMessage } from '../hooks';
import { Label } from 'react-figma-plugin-ds';
import { EditTemplate } from '.';
import { Modal } from '../components';

export default function PagesTemplateList() {
  const { postMessageToPlugin } = useMessage();
  const { finishedLoading, data } = useContext(PluginContext);
  const [isEdit, setIsEdit] = useState(false);
  const [currentTemplateId, setCurrentTemplateId] = useState(null);

  const handleClick = data => {
    postMessageToPlugin('createPages', data);
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
      {finishedLoading && data.templates.length ? (
        <section>
          <Label size='small' weight='medium'>
            saved templates
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
              data.templates.map((template, id) => {
                const { templateName, pages, templateId } = template;
                return (
                  <PageTemplateContainer
                    templateName={templateName}
                    pages={pages}
                    key={templateName + id}
                    onClick={handleClick}
                    templateId={templateId}
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
