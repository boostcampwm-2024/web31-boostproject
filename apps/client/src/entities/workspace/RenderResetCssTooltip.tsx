import { createRoot } from 'react-dom/client';
import { CssTooltip } from '@/entities';

type TooltipProps = {
  description: string;
  isOpen: boolean;
  leftX: number;
  topY: number;
};

let root: ReturnType<typeof createRoot> | null = null;

export const RenderResetCssTooltip = (props: TooltipProps, container: HTMLElement) => {
  if (!root) {
    root = createRoot(container);
  }

  root.render(
    <CssTooltip
      description={props.description}
      isOpen={props.isOpen}
      leftX={props.leftX}
      topY={props.topY}
    />
  );
};
