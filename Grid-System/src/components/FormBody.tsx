import * as React from 'react';
import { Input, Label, Select } from 'react-figma-plugin-ds';
import { ColorInput } from '.';
import { hexToFigmaRGB, figmaRGBToHex } from '../utills';
export default function FormBody({
  template,
  setTemplate,
  inEditMode,
  isSubmitted,
}) {
  const handleColorChange = color => {
    setTemplate(oldTemplate => {
      return {
        ...oldTemplate,
        color: { ...hexToFigmaRGB(color), a: oldTemplate.color.a },
      };
    });
  };
  const handleOpacityChange = opacity => {
    setTemplate(oldTemplate => {
      return {
        ...oldTemplate,
        color: { ...oldTemplate.color, a: opacity },
      };
    });
  };
  const handleChange = (value, e) => {
    let targetName = e.target.parentElement.previousElementSibling.innerText;

    targetName = targetName[0].toLowerCase() + targetName.slice(1);
    const notAzIdx = targetName.indexOf(' ');
    if (notAzIdx !== -1) {
      targetName = targetName.replace(' ', '');
      targetName =
        targetName.slice(0, notAzIdx) +
        targetName[notAzIdx].toUpperCase() +
        targetName.slice(notAzIdx + 1);
    }
    if (targetName === 'height' || targetName === 'width') targetName = 'size';
    if (targetName === 'margin') targetName = 'offset';
    setTemplate(oldTemplate => {
      return {
        ...oldTemplate,
        [targetName]: value,
      };
    });
  };
  const handleSelect = selectedOption => {
    const { title, value } = selectedOption;

    setTemplate(oldTemplate => {
      return {
        ...oldTemplate,
        [title]: value,
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
          type='text'
          onChange={handleChange}
          placeholder='grid mobile'
          defaultValue={inEditMode ? template.templateName : null}
        />
      </div>

      <div className='flex-col'>
        <Label size='small' weight='medium'>
          Min width
        </Label>
        <Input
          type='number'
          onChange={handleChange}
          placeholder='0'
          defaultValue={inEditMode ? template.minWidth : null}
        />
      </div>
      <div className='flex-col'>
        <Label size='small' weight='medium'>
          Max width
        </Label>
        <Input
          type='number'
          onChange={handleChange}
          placeholder='375'
          defaultValue={inEditMode ? template.maxWidth : null}
        />
      </div>

      <div className='flex-col'>
        <Label size='small' weight='medium'>
          Pattern
        </Label>
        <Select
          key={isSubmitted}
          onChange={handleSelect}
          options={['Grid', 'Columns', 'Rows'].map(item => {
            return { label: item, title: 'pattern', value: item };
          })}
          placeholder='Grid'
          defaultValue={inEditMode ? template.pattern : null}
        />
      </div>
      {template.pattern === 'Grid' ? null : (
        <>
          <div className='flex-col'>
            <Label size='small' weight='medium'>
              Count
            </Label>

            <Select
              onChange={handleSelect}
              options={[
                'Auto',
                'divider',
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
              ].map(item => {
                if (item === 'divider')
                  return {
                    label: item,
                    title: 'count',
                    value: item,
                    divider: true,
                  };
                else return { label: item, title: 'count', value: item };
              })}
              placeholder={5}
              defaultValue={inEditMode ? template.count : null}
            />
          </div>

          <div className='flex-col'>
            <Label size='small' weight='medium'>
              Type
            </Label>
            {template.pattern === 'Columns' ? (
              <Select
                onChange={handleSelect}
                options={['Left', 'Right', 'Center', 'Stretch'].map(item => {
                  return { label: item, title: 'alignment', value: item };
                })}
                placeholder='Stretch'
                defaultValue={inEditMode ? template.alignment : null}
              />
            ) : null}
            {template.pattern === 'Rows' ? (
              <Select
                onChange={handleSelect}
                options={['Top', 'Bottom', 'Center', 'Stretch'].map(item => {
                  return { label: item, title: 'alignment', value: item };
                })}
                placeholder='Stretch'
                defaultValue={inEditMode ? template.alignment : null}
              />
            ) : null}
          </div>
          <div className='flex-col'>
            <Label size='small' weight='medium'>
              {template.alignment === 'Stretch' ? 'Margin' : 'Offset'}
            </Label>
            {template.alignment === 'Center' ? (
              <Input type='number' isDisabled={true} placeholder='0' />
            ) : null}
            {template.alignment !== 'Center' ? (
              <Input
                type='number'
                onChange={handleChange}
                placeholder={template.offset}
                defaultValue={inEditMode ? template.offset : null}
              />
            ) : null}
          </div>
          <div className='flex-col'>
            <Label size='small' weight='medium'>
              {template.pattern === 'Columns' ? 'Width' : 'Height'}
            </Label>
            {template.alignment === 'Stretch' ? (
              <Input type='number' isDisabled={true} placeholder='Auto' />
            ) : null}
            {template.alignment !== 'Stretch' ? (
              <Input
                type='number'
                onChange={handleChange}
                placeholder={template.size}
                defaultValue={inEditMode ? template.size : null}
              />
            ) : null}
          </div>

          <div className='flex-col'>
            <Label size='small' weight='medium'>
              Gutter
            </Label>

            <Input
              type='number'
              onChange={handleChange}
              placeholder={20}
              defaultValue={inEditMode ? template.gutter : null}
            />
          </div>
        </>
      )}
      {template.pattern !== 'Grid' ? null : (
        <div className='flex-col'>
          <Label size='small' weight='medium'>
            Size
          </Label>

          <Input
            type='number'
            onChange={handleChange}
            placeholder={8}
            defaultValue={inEditMode ? template.size : null}
          />
        </div>
      )}
      <ColorInput
        key={isSubmitted}
        handleColorChange={handleColorChange}
        handleOpacityChange={handleOpacityChange}
        opacity={template.color.a}
        color={figmaRGBToHex({
          r: template.color.r,
          g: template.color.g,
          b: template.color.b,
        })}
      />
    </>
  );
}
