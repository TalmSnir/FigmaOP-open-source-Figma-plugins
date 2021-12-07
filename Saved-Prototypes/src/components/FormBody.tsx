import * as React from 'react';
import { Checkbox, Input, Label, Select } from 'react-figma-plugin-ds';
import { FlexContainer } from '.';

export default function FormBody({ template, setTemplate, inEditMode }) {
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
          animation name
        </Label>
        <Input
          onChange={handleChange}
          placeholder='website design'
          defaultValue={inEditMode ? template.templateName : null}
        />
      </div>
      <FlexContainer>
        <div className='flex-col'>
          <Label size='small' weight='medium'>
            trigger
          </Label>
          <Select
            onChange={handleSelect}
            options={[
              'onClick',
              'onHover',
              'onTap',
              'onDrag',
              'onKeypress',
              'divider',
              'onMouseenter',
              'onMouseleave',
              'onMousedown',
              'onTouchdown',
              'onTouchup',
              'divider',
              'after delay',
            ].map(item => {
              if (item === 'divider')
                return {
                  label: item,
                  title: 'trigger',
                  value: item,
                  divider: true,
                };
              else return { label: item, title: 'trigger', value: item };
            })}
            placeholder={5}
            defaultValue={inEditMode ? template.count : null}
          />
        </div>

        <div className='flex-col'>
          <Label size='small' weight='medium'>
            navigation
          </Label>
          <Select
            onChange={handleSelect}
            options={[
              'navigate to',
              'change to',
              'divider',
              'open overlay',
              'swap overlay',
              'close overlay',
              'divider',
              'back',
              'scroll to',
              'open link',
            ].map(item => {
              if (item === 'divider')
                return {
                  label: item,
                  title: 'navigation',
                  value: item,
                  divider: true,
                };
              else return { label: item, title: 'navigation', value: item };
            })}
            placeholder={5}
            defaultValue={inEditMode ? template.count : null}
          />
        </div>
      </FlexContainer>
      <FlexContainer>
        <div className='flex-col'>
          <Label size='small' weight='medium'>
            duration
          </Label>
          <Input
            className=''
            defaultValue=''
            icon='angle'
            iconColor='black8'
            onChange={function _() {}}
            placeholder='200ms'
          />
        </div>
        <div className='flex-col'>
          <Label size='small' weight='medium'>
            animation
          </Label>
          <Select
            onChange={handleSelect}
            options={[
              'instant',
              'dissolve',
              'smart animate',

              'divider',
              'move in',
              'move out',
              'push',
              'slide in',
              'slide out',
            ].map(item => {
              if (item === 'divider')
                return {
                  label: item,
                  title: 'animation',
                  value: item,
                  divider: true,
                };
              else return { label: item, title: 'animation', value: item };
            })}
            placeholder={5}
            defaultValue={inEditMode ? template.count : null}
          />
        </div>
      </FlexContainer>
      <FlexContainer>
        <div className='flex-col'>
          <Label size='small' weight='medium'>
            easing
          </Label>
          <Select
            onChange={handleSelect}
            options={[
              'linear',
              'divider',
              'ease in',
              'ease out',
              'ease in and out',
              'divider',
              'ease in back',
              'ease out back',
              'ease in and out back',
              'divider',
              'custom',
            ].map(item => {
              if (item === 'divider')
                return {
                  label: item,
                  title: 'easing',
                  value: item,
                  divider: true,
                };
              else return { label: item, title: 'easing', value: item };
            })}
            placeholder={5}
            defaultValue={inEditMode ? template.count : null}
          />
        </div>
      </FlexContainer>
      <div className='flex-col'>
        <Checkbox
          className=''
          label='preserve scroll position'
          onChange={handleChange}
          type='checkbox'
        />
      </div>
      <div className='flex-col'>
        <Checkbox
          className=''
          label='two way animation'
          onChange={handleChange}
          type='checkbox'
        />
      </div>
    </>
  );
}
