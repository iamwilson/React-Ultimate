import * as React from 'react';

interface ILoaderProps {
  isLoading: boolean;
}

class LoaderComponent extends React.Component<ILoaderProps> {
  constructor(props: ILoaderProps) {
    super(props);
  }

  componentDidMount() {}

  render() {
    if (this.props.isLoading) {
      return <div className="loader-container">isLoading</div>;
    } else{
      return (null);
    }
  }
}

export default LoaderComponent;
