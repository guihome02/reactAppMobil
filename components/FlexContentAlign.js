import React, {Component} from 'react';

class FlexContentAlign extends Component {
    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'yellow' }}>
                <View style={{ flex: 1, backgroundColor: 'red' }}></View>
                <View style={{ flex: 2, backgroundColor: 'green' }}></View>
                <View style={{ flex: 3, backgroundColor: 'blue' }}></View>
            </View>
        );
    }
}

export default FlexContentAlign;