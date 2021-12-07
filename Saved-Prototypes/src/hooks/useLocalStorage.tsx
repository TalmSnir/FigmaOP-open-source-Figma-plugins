import { useMessage } from '.';

export default function useLocalStorage() {
  const { showNotification } = useMessage();
  const saveToStorage = async (key, data) => {
    try {
      await figma.clientStorage.setAsync(key, JSON.stringify(data));
    } catch (err) {
      console.log('in saveToStorage catch: ', err);
      showNotification('warning', 'reject');
    }
  };
  const getFromStorage = async key => {
    try {
      const data = await figma.clientStorage.getAsync(key);
      return JSON.parse(data);
    } catch (err) {
      console.log('in getFromStorage catch: ', err);
      showNotification('warning', 'reject');
    }
  };
  return { saveToStorage, getFromStorage };
}
