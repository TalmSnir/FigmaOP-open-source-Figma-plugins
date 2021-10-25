import * as React from 'react';
import { Checkbox } from 'react-figma-plugin-ds';

export default function SwitchedBody({ properties, handleChange }) {
  return (
    <>
      {properties &&
        properties.map((prop, id) => (
          <Checkbox
            label={prop}
            onChange={handleChange}
            type='switch'
            key={id}
          />
        ))}
    </>
  );
}
