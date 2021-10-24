import * as React from 'react';
import { Input, Label } from 'react-figma-plugin-ds';

export default function FormBody({ template, setTemplate, inEditMode }) {
  const handlePagesChange = value => {
    setTemplate({ ...template, pages: value });
  };
  const handleNameChange = value => {
    setTemplate({ ...template, templateName: value });
  };

  return (
    <>
      <div className='flex-col'>
        <Label size='small' weight='medium'>
          template name
        </Label>
        <Input
          onChange={handleNameChange}
          placeholder='website design'
          defaultValue={inEditMode ? template.templateName : null}
        />
      </div>
      <div className='flex-col'>
        <Label size='small' weight='medium'>
          pages names
        </Label>
        <Input
          onChange={handlePagesChange}
          placeholder='enter list of pages separated by commas'
          defaultValue={inEditMode ? template.pages : null}
        />
      </div>
    </>
  );
}
