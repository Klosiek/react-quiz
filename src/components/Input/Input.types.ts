export interface Props {
  id: string;
  name: string;
  label?: string;
  size?: "small" | "medium";
  helperText?: string;
  type?: string;
  required?: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}
