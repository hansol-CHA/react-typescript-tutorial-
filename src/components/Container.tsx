type ContainerProps = {
  styles: React.CSSProperties; // valid css property
};

export const Container = (props: ContainerProps) => {
  return <div style={props.styles}>Text content goes here</div>;
};
