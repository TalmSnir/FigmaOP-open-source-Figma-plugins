import React from 'react';
import Button from '../components/Button';
import ButtonsGroup from '../components/ButtonsGroup';
import PluginIcon from '../components/PluginIcon';
import Icon from '../components/Icon';
function Main() {
  return (
    <main>
      <h1 className='main__title'>Open source Figma plugins </h1>
      <h2 className='main__subtitle'>
        to help designers and developers work <br />
        <span>faster</span>, <span>smarter</span> and <span>intentionally</span>
        .
      </h2>
      <PluginIcon name={'fast-variants-properties'} className='main__icon' />
      <PluginIcon name={'icons-toolbox'} className='main__icon' />
      <PluginIcon name={'layout-handoff'} className='main__icon' />
      <Icon name='github-circle' className='main__icon' />
      <Icon name='figma' className='main__icon' />
      <ButtonsGroup direction='column'>
        <Button iconName='star' type='primary'>
          on github
        </Button>
        <Button iconName='thumbsUp' type='secondary'>
          on product hunt
        </Button>
      </ButtonsGroup>
    </main>
  );
}

export default Main;
