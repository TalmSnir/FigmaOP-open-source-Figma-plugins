import * as React from 'react';
import { Input, Label } from 'react-figma-plugin-ds';
export default function FilterSearch() {
  const handleChange = () => {
    return;
  };
  return (
    <div className='flex-col'>
      <Label size='small' weight='medium'>
        filter by name
      </Label>
      <Input onChange={handleChange} placeholder='website design' />
    </div>
  );
}
