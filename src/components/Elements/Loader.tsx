import * as React from "react";
import { connect } from "react-redux";

interface ILoaderProps {
  isLoading: boolean;
}

class LoaderComponent extends React.Component<ILoaderProps> {
  constructor(props: ILoaderProps) {
    super(props);
  }

  render() {

    console.log(this.props.isLoading);

    if (this.props.isLoading) {
      return <p>Loading ...</p>;
    }
    return (null);
  }
}

export default LoaderComponent;
