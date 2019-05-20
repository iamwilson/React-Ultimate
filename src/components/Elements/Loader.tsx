import * as React from 'react';

interface ILoaderProps {
  isLoading: boolean;
}

const LoaderComponent = (props: ILoaderProps) => {
  return (
    props.isLoading &&
    // tslint:disable-next-line:jsx-wrap-multiline
    <div className='loader-container'>
      <div className='loader' />
    </div>
  );
};

export default LoaderComponent;
