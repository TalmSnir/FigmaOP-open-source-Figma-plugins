import * as React from 'react';
import { Input, Label } from 'react-figma-plugin-ds';
export default function FormBody({ template, setTemplate, inEditMode }) {
  const handleChange = (value, e) => {
    const classList = e.target.classList;
    let targetName = classList[classList.length - 1];

    setTemplate(oldTemplate => {
      return {
        ...oldTemplate,
        [targetName]: value,
      };
    });
  };

  return (
    <>
      <div className='flex-col'>
        <Label size='small' weight='medium'>
          Template name
        </Label>
        <Input
          className='name'
          type='text'
          onChange={handleChange}
          placeholder='Button'
          defaultValue={inEditMode ? template?.name : null}
        />
      </div>
      <div className='flex-col'>
        <Label size='small' weight='medium'>
          Properties
        </Label>
        <Input
          className='properties'
          type='text'
          onChange={handleChange}
          placeholder='primary,secondary,focus,hover ...'
          defaultValue={inEditMode ? template?.properties : null}
        />
      </div>
    </>
  );
}
