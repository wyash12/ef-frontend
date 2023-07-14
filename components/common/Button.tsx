import classes from "./Button.module.scss";

interface propsType {
  text: string;
  padding?: string;
  fontSize?: number;
  onClick: VoidFunction;
}
export default function Button(props: propsType): JSX.Element {
  return (
    <button
      className={classes.button}
      style={{
        padding: props.padding,
        fontSize: `${props.fontSize}rem`,
      }}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
}
