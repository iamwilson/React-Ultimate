// core
import * as React from 'react';

// misc

// interfaces
interface IOfferProps {
    actions: any;
}

interface IOfferState {
    data: any;
}

class Offer extends React.Component<IOfferProps, IOfferState> {
    constructor(props: IOfferProps) {
        super(props);

        this.state = {
            data: []
        };
    }

    componentDidMount() {
        //
    }

    render() {
        return (
            <React.Fragment>
                <div className='container'>
                    <div>Offer works !</div>
                </div>
            </React.Fragment>
        );
    }
}

export default Offer;
