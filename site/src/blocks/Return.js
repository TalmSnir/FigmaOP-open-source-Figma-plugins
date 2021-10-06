import React, { useRef } from 'react';
import Plugin from './Plugin';
import Container from '../components/Container';
import NavLink from '../components/Navigation/NavLink';
import { mainRepo } from '../data';

function Return() {
  const HeaderRef = useRef();
  const ParagraphRef = useRef();
  const linkRef = useRef();

  return (
    <section className='return' id='return'>
      <Container>
        <div className='return__text'>
          <h1 ref={HeaderRef} className='return__title'>
            About & contribution
          </h1>
          <p ref={ParagraphRef} className='return__desc'>
            FigmaOp is a project dedicated to creating simple but effective
            tools to help with the day to day tasks of designers and developers.{' '}
            <br />
            <br />
            one of the main goals of this project is to allow junior developers
            to give back to the community by building small scale application
            with open source in mind.
            <br /> As we all know the best way to learn is to build and what is
            better than making something that people can actually use?!
            <span>Do you want to help others and build awesome plugins?</span>
          </p>
          <NavLink
            linkRef={linkRef}
            href={mainRepo}
            target='_blank'
            type='link'
            iconName='arrow-right'
            iconSide='right'>
            start here
          </NavLink>
        </div>
        <div className='return__plugin'>
          <Plugin header={HeaderRef} text={ParagraphRef} link={linkRef} />
        </div>
      </Container>
    </section>
  );
}

export default Return;
