import { useState, useEffect, useRef } from 'react';

export default function usePlugin({ pluginStates, setPluginStates }) {
  const handleCreateShape = () => {};
  const handleAddBorders = () => {
    setPluginStates(pluginStates => {
      return { ...pluginStates, addBorders: !pluginStates.addBorders };
    });
  };

  return { handleCreateShape, handleAddBorders };
}
