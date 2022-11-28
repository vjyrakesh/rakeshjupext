import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the rakeshjupext extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'rakeshjupext:plugin',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension rakeshjupext is activated!');
  }
};

export default plugin;
