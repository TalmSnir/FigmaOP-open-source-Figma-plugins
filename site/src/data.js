import FastVariantsPropertiesGif from './assets/FastVariantsProperties.gif';
import LayoutHandoffGif from './assets/layouthandoff.gif';
import IconsToolboxGif from './assets/iconsToolbox.gif';
import PagesGif from './assets/pages.gif';
import GridSystemGif from './assets/gridSystem.gif';
// import AutoLayoutReverse from './assets/autoLayoutReverse.gif';

import FastVariantPropertiesIcon from './assets/fast-variants-properties.svg';
import IconsToolBoxIcon from './assets/icons-toolbox.svg';
import LayoutHandoffIcon from './assets/layout-handoff.svg';
import SavedPrototypes from './assets/saved-prototypes.svg';
import GridSystem from './assets/grid-system.svg';
import Pages from './assets/pages.svg';
import AutoLayoutReverse from './assets/auto-layout-reverse.svg';

export const plugins = [
  {
    name: 'fast variants properties',
    icon: FastVariantPropertiesIcon,
    description: `Set variants properties fast and easy using toggles.
    No more writing each variant’s property over and over with every component in your design system.
    Now you can select from a pre-made list of properties the ones you want using toggles or add more by writing the property once.`,
    gif: FastVariantsPropertiesGif,
    repo: 'https://github.com/TalmSnir/FigmaOP-open-source-Figma-plugins/tree/main/Fast%20Variants%20Properties',
    figmaCommunity:
      'https://www.figma.com/community/plugin/1014435448527160306/Fast-Variants-Properties',
  },
  {
    name: 'layout handoff',
    icon: LayoutHandoffIcon,
    description: `Select frames or variants, run the plugin and in a blink of an eye, you will have 3 frames of each selection with borders around the children frames and variants.

 

    Each frame created is one nesting level deeper than the other.
    
    the 4th and the last frame (furthest to the right) will contain all the variants of components found in each selection.
    
     
    
    With the help of this plugin, the developer and the designer will have the ability to see clearly the layout of each frame and the variants of components that were used to build it.
    
     
    
    All that without extra effort.`,
    gif: LayoutHandoffGif,
    repo: 'https://github.com/TalmSnir/FigmaOP-open-source-Figma-plugins/tree/main/Layout-Handoff',
    figmaCommunity:
      'https://www.figma.com/community/plugin/1025794954481152114/Layout-Handoff',
  },
  {
    name: 'icons toolbox',
    icon: IconsToolBoxIcon,
    description: `Set of tools to save you from redoing the same thing over and over again while designing or using your favorite icons.



Tools:

Save frame sizes and icons max-width preferences in a form of a button to have for future use.
save as many preferences as you like and delete unused ones.

Flatten multiple selected icons. 
Flatten all icons on a page.
Duplicate multiple selected icons and rescale them to different sizes.


All of the above with a press of a button!!!



Last but not least, you have the option to preserve the stroke width in each resize or, you can let the plugin do the computations for you and change the weight according to the scaling ratio.

`,
    gif: IconsToolboxGif,
    repo: 'https://github.com/TalmSnir/FigmaOP-open-source-Figma-plugins/tree/main/Icons%20Toolbox',
    figmaCommunity:
      'https://www.figma.com/community/plugin/1026762327285154536',
  },
  {
    name: 'pages',
    icon: Pages,
    description: `Functions to simplify your pages problems:\n
Select and delete multiple pages or choose to delete all of the pages in a file,
Add multiple pages in one go,
Save pages templates,
Create pages index in a click.

If you want to create a separator page e.g -------------  just type “-” as a page name.
    
    And if you want to add a separator with a name e.g ----cover---- just type “-cover-” as a page name.
    
    check`,
    gif: PagesGif,
    repo: 'https://github.com/TalmSnir/FigmaOP-open-source-Figma-plugins/tree/main/Pages',
    figmaCommunity:
      'https://www.figma.com/community/plugin/1032966286384619512/Pages',
  },
  {
    name: 'grid system',
    icon: GridSystem,
    description: `No more searching for the right grid to match your frame size!!!
Functions to simplify your grids problems:
Save grid templates with min and max sizes.
Apply auto grids to frames -the plugin detects the frame’s sizes and applies the right grid that you saved as a template. 
Show all grids in selected frames with one click.
Hide all grids in selected frames with one click.
Delete and update templates.`,
    gif: GridSystemGif,
    repo: 'https://github.com/TalmSnir/FigmaOP-open-source-Figma-plugins/tree/main/Grid-System',
    figmaCommunity:
      'https://www.figma.com/community/plugin/1033367904576323011',
  },
  {
    name: 'auto layout reverse',
    icon: AutoLayoutReverse,
    description: `Polyfill for auto-layout :
    A common problem with a simple solution!
    Run the plugin to add a reverse button to each auto-layout frame\component in the current page.
    Great for creating bidirectional components for LTR and RTL languages, chat components, and more.`,
    gif: GridSystemGif,
    repo: 'https://github.com/TalmSnir/FigmaOP-open-source-Figma-plugins/tree/main/Autolayout-Reverse',
    figmaCommunity:
      'https://www.figma.com/community/plugin/1044913520786715800',
  },
  {
    name: 'saved prototypes',
    icon: SavedPrototypes,
    description: `Coming Soon...`,
    gif: 'gif',
    repo: '#',
    figmaCommunity: '#',
  },
];
export const supportSources = [
  {
    name: 'Figma plugin API',
    url: 'https://www.figma.com/plugin-docs/intro/',
  },
  {
    name: 'Figma plugin API forum',
    url: 'https://forum.figma.com/c/plugin-api/20',
  },
  {
    name: 'The UX of Figma plugins',
    url: 'https://uxdesign.cc/the-ux-of-figma-plugins-f4f896f8cf35?utm_source=pocket_mylist',
  },
  {
    name: 'Figma plugins samples',
    url: 'https://github.com/figma/plugin-samples',
  },
  {
    name: 'create Figma plugin',
    url: 'https://github.com/yuanqing/create-figma-plugin',
  },

  {
    name: 'Plugin Kit - Figma Community',
    url: 'https://www.figma.com/community/file/1025375618827139141',
  },

  {
    name: 'Figma Plugin Helper functions',
    url: 'https://github.com/figma-plugin-helper-functions',
  },

  {
    name: 'TypeScript',
    url: 'https://www.typescriptlang.org/',
  },
  {
    name: 'how to contribute to open source',
    url: 'https://opensource.guide/how-to-contribute/#how-to-submit-a-contribution',
  },
];
export const upVotesLinks = {
  github: 'https://github.com/TalmSnir/FigmaOP-open-source-Figma-plugins',
  productHunt: 'https://www.producthunt.com/posts/figmaop',
};
export const mainRepo =
  'https://github.com/TalmSnir/FigmaOP-open-source-Figma-plugins';
