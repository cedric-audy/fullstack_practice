import { Button} from 'cae-storybook/dist/lib';

export function Square(props: any) {
    return (
      <Button className="square" variant="contained" onClick={props.onClick} color={props.color}>
        {props.value}
      </Button>
    );
  }