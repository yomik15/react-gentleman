interface Props {
  label: string;
  parentMethod: () => void;
}
export const Button03 = ({ label, parentMethod }: Props) => {
  return <button onClick={parentMethod}>{label}</button>;
};
