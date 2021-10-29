import { pluginMessages } from '../pluginMessages';

export default function useMessage() {
  let notificationHandler;

  const showNotification = (state, msg) => {
    notificationHandler ? notificationHandler.cancel() : '';
    notificationHandler = figma.notify(pluginMessages[state][msg], {
      timeout: 2000,
    });
  };
  const postMessageToUI = (msg, data) => {
    figma.ui.postMessage({ msg, data });
  };
  const postMessageToPlugin = (msg, data) => {
    parent.postMessage({ pluginMessage: { msg, data } }, '*');
  };

  return {
    showNotification,
    postMessageToPlugin,
    postMessageToUI,
  };
}
