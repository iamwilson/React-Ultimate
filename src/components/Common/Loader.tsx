import * as React from 'react';

interface ILoaderProps {
    isLoading: boolean;
}

const Loader = (props: ILoaderProps) => {
    return (
        props.isLoading && (
            <div className='loader-container'>
                <div className='loader' />
            </div>
        )
    );
};

export default Loader;
