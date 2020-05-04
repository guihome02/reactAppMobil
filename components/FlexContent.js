import React, {Component} from 'react';
import { View } from 'react-native';
class FlexContent extends Component {
    render() {
        return (
            <View style={{ backgroundColor: 'yellow' }}>
                <View style={{ flex: 1, backgroundColor: 'red' }}></View>
                <View style={{ flex: 1, backgroundColor: 'green' }}></View>
            </View>
        );
    }
}

export default FlexContent;