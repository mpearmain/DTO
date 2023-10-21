import { ContextMenuPlugin } from 'rete-context-menu-plugin';
import { Schemes } from './shared-types';

export const contextMenu = new ContextMenuPlugin<Schemes>({
  items(context) {
    if (context === 'root') {
      return {
        searchBar: false,
        list: [
          { label: 'Custom', key: '1', handler: () => console.log('Custom') },
          {
            label: 'Collection',
            key: '1',
            handler: () => null,
            subitems: [
              {
                label: 'Subitem',
                key: '1',
                handler: () => console.log('Subitem'),
              },
            ],
          },
        ],
      };
    }
    return {
      searchBar: false,
      list: [],
    };
  },
});
