type ContainerProps = {
    value: number;
};
export const Container = (props: ContainerProps) => {
    return <li>{props.value}</li>;
};
