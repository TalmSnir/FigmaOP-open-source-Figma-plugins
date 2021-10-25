import * as React from 'react';
import { useState, useContext, useEffect } from 'react';
import { Button, Text } from 'react-figma-plugin-ds';
import { SwitchesBody } from '.';
import { PluginContext } from '../ContextProvider';
import { useMessage } from '../hooks';
export default function SwitchesModal({ properties, setIsGenerating }) {
  {
    const { postMessageToPlugin } = useMessage();
    const [variantsProps, setVariantsProps] = useState([]);
    const [currentProps, setCurrentProps] = useState(null);

    const [counter, setCounter] = useState(0);
    const { componentSetChildren } = useContext(PluginContext);

    useEffect(() => {
      setCurrentProps(() => {
        let props = {};
        properties.forEach(prop => (props = { ...props, [prop]: false }));

        return props;
      });
      postMessageToPlugin('createFocusFrame', null);
    }, []);
    useEffect(() => {
      postMessageToPlugin('setFocusFrame', counter);
      counter === componentSetChildren &&
        postMessageToPlugin('createProperties', variantsProps);
      counter === componentSetChildren && setIsGenerating(false);
    }, [counter]);
    const handleChange = (value, e) => {
      setCurrentProps(prevCurrentProps => {
        return {
          ...prevCurrentProps,
          [e.target.nextElementSibling.innerText]: value,
        };
      });
    };
    const handleSubmit = e => {
      e.preventDefault();
      setVariantsProps(prevVariantsProps => [
        ...prevVariantsProps,
        currentProps,
      ]);

      setCounter(prevCounter => prevCounter + 1);
    };
    return (
      <section className='modal'>
        <Text size='xlarge' weight='bold' className='center-text'>
          {`select properties for variant number ${counter + 1}`}
        </Text>
        <form className='grid' onSubmit={handleSubmit}>
          {properties && (
            <SwitchesBody properties={properties} handleChange={handleChange} />
          )}

          <Button isPrimary>Apply Properties</Button>
        </form>
      </section>
    );
  }
}
