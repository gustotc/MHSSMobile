import React, { Component } from 'react';
import { VictoryPie } from 'victory-native';
import { View } from 'native-base';

import categoryColors from '@theme/categoryColors';

const theme = {
  pie: {
    colorScale: categoryColors,
    padding: 80,
  },
};

class PieChart extends Component {
  render() {
    return (
      this.props.data.length > 0 && (
        <View>
          <VictoryPie
            innerRadius={70}
            labelRadius={120}
            theme={theme}
            data={this.props.data}
            style={{
              labels: { fontSize: '10' },
            }}
          />
        </View>
      )
    );
  }
}

export default PieChart;