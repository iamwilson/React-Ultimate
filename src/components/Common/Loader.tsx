import * as React from 'react';

interface ILoaderProps {
    isLoading: boolean;
}

const LoaderComponent = (props: ILoaderProps) => {
    return (
        props.isLoading && (
            <div className='loader-container'>
                <div className='loader' />
            </div>
        )
    );
};

export default LoaderComponent;
