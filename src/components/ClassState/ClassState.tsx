// 1. Extender React.Component
import { Component } from "react";

interface Props {}
interface State {
  count: number;
}

class ClassState extends Component<Props, State> {
  // 2. Declarar estado en constructor
  constructor(props: Props) {
    super(props);
    this.state = { count: 0 };
  }

  // 3. Actualizar estado
  addCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <button onClick={this.addCount}>Count is ({this.state.count})</button>
    );
  }
}

export { ClassState };
// export default classState ; -- unnamed export
