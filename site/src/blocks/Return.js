import React from 'react';

import Container from '../components/Container';
import NavLink from '../components/NavLink';
import { mainRepo } from '../Data';
function Return() {
  return (
    <section className='return' id='return'>
      <Container>
        <h1 className='return__title'>About & contribution</h1>
        <p className='return__text'>
          FigmaOp is a project dedicated to creating simple but effective tools
          to help with the day to day tasks of designers and developers. <br />
          <br />
          one of the main goals of this project is to allow junior developers to
          give back to the community by building small scale application with
          open source in mind; the best way to learn is to build and what is
          better than making something that people can actually use?!
          <span>Do you want to help others and build awesome plugins?</span>
        </p>
        <NavLink
          href={mainRepo}
          target='_blank'
          type='link'
          iconName='arrow-right'
          iconSide='right'>
          start here
        </NavLink>
      </Container>
    </section>
  );
}

export default Return;
