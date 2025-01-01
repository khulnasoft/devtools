import { createBackendModule } from "@devtools/backend-plugin-api";
import { scaffolderActionsExtensionPoint  } from '@devtools/plugin-scaffolder-node/alpha';
import { createExampleAction } from "./actions/example";

/**
 * A backend module that registers the action into the scaffolder
 */
export const scaffolderModule = createBackendModule({
  moduleId: 'example-action',
  pluginId: 'scaffolder',
  register({ registerInit }) {
    registerInit({
      deps: {
        scaffolderActions: scaffolderActionsExtensionPoint
      },
      async init({ scaffolderActions}) {
        scaffolderActions.addActions(createExampleAction());
      }
    });
  },
})
