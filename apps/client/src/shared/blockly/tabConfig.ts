import FixedFlyout from '@/core/fixedFlyout';
import { cssStyleToolboxConfig, htmlTagToolboxConfig } from '@/shared/blockly';
import StyleFlyout from '@/core/styleFlyout';
import { TTabToolboxConfig } from '@/shared/types';

export const tabToolboxConfig: TTabToolboxConfig = {
  tabs: {
    html: {
      label: 'HTML 태그',
      toolboxConfig: htmlTagToolboxConfig,
      flyoutRegistryName: FixedFlyout.registryName,
    },
    css: {
      label: 'CSS 클래스',
      toolboxConfig: cssStyleToolboxConfig,
      flyoutRegistryName: StyleFlyout.registryName,
    },
  },
  defaultSelectedTab: 'html',
};
