import React from 'react';
import NavLink from '../components/Navigation/NavLink';
import { ButtonsGroup } from '../components/Buttons';

import Icon from '../components/Icons/Icon';
import Container from '../components/Container';
import { upVotesLinks, plugins } from '../data';
function Main() {
  const { github, productHunt } = upVotesLinks;

  return (
    <main className='main' id='main'>
      <Container>
        <div className='main__text'>
          <h1 className='main__text--title'>
            <Icon name='figma' />
            igma <Icon name='github-circle' />
            pen source <span>Plugins</span>
          </h1>

          <h2 className='main__text--subtitle'>
            to help designers and developers work <br />
            <span>faster</span>, <span>smarter</span> and{' '}
            <span>intentionally</span>.
          </h2>
        </div>
        <div className='main__plugin-icons'>
          {plugins.map((plugin, id) => {
            return (
              <img src={plugin.icon} alt='plugin-icon' key={plugin.name + id} />
            );
          })}
        </div>

        <ButtonsGroup direction='column'>
          <NavLink
            href={github}
            target='_blank'
            iconName='star'
            iconSide='left'
            type='button'
            btnVariant='primary'>
            on github
          </NavLink>
          <NavLink
            href={productHunt}
            target='_blank'
            iconName='thumbsUp'
            iconSide='left'
            type='button'
            btnVariant='secondary'>
            on product hunt
          </NavLink>
        </ButtonsGroup>
      </Container>
    </main>
  );
}

export default Main;
