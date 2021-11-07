import PropTypes from 'prop-types';

export default function usePlugin({ pluginStates, setPluginStates }) {
  const handleAddBorders = () => {
    setPluginStates(pluginStates => {
      return { ...pluginStates, addBorders: !pluginStates.addBorders };
    });
  };
  const handleRotate = () => {
    setPluginStates(pluginStates => {
      return { ...pluginStates, rotate: !pluginStates.rotate };
    });
  };
  const handleAddIcon = () => {
    if (pluginStates.showIcon) {
      setPluginStates(pluginStates => {
        return {
          ...pluginStates,
          showIcon: !pluginStates.showIcon,
          duplicateIcons: { action: false },
        };
      });
    } else {
      setPluginStates(pluginStates => {
        return { ...pluginStates, showIcon: !pluginStates.showIcon };
      });
    }
  };
  const handleDuplicateIcons = sizes => {
    setPluginStates(pluginStates => {
      return {
        ...pluginStates,
        duplicateIcons: {
          action: !pluginStates.duplicateIcons.action,
          sizes: sizes,
        },
      };
    });
  };

  return {
    handleRotate,
    handleAddBorders,
    handleAddIcon,
    handleDuplicateIcons,
  };
}

usePlugin.propTypes = {
  pluginStates: PropTypes.object,
  setPluginStates: PropTypes.func,
};
