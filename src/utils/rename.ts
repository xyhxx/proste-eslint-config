import {renamePluginsInRules} from 'eslint-flat-config-utils';

export function rulesRename(rules: Record<string, unknown>) {
  return renamePluginsInRules(rules, {'@typescript-eslint': 'typescript'});
}
