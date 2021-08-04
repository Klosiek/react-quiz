import { PanelEnum } from "shared/enums";

export interface Props {
  view: PanelEnum;
  setView: React.Dispatch<React.SetStateAction<PanelEnum>>;
}
