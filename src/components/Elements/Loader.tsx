import * as React from "react";

interface ILoaderProps {
  isLoading: boolean;
}

class LoaderComponent extends React.Component<ILoaderProps> {
  constructor(props: ILoaderProps) {
    super(props);
  }

  // tslint:disable-next-line:no-empty
  componentDidMount() {}

  render() {
    return (this.props.isLoading) ? (<div className="loader-container">  <div className="loader" /> </div>) : null;
  }
}

export default LoaderComponent;
