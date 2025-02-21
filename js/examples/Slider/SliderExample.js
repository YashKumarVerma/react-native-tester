/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow
 */

'use strict';

const React = require('react');
const {Text, StyleSheet, View} = require('react-native');
import Slider from '@react-native-community/slider';

function SliderExample(props: React.ElementConfig<typeof Slider>) {
  const [value, setValue] = React.useState(0);

  return (
    <View>
      <Text style={styles.text}>{value.toFixed(3)}</Text>
      <Slider {...props} onValueChange={(newValue) => setValue(newValue)} />
    </View>
  );
}

function SlidingCompleteExample(props: React.ElementConfig<typeof Slider>) {
  const [slideCompletionValue, setSlideCompletionValue] = React.useState(0);
  const [slideCompletionCount, setSlideCompletionCount] = React.useState(0);

  return (
    <View>
      <SliderExample
        {...props}
        onSlidingComplete={(value) => {
          setSlideCompletionValue(value);
          setSlideCompletionCount((count) => count + 1);
        }}
      />
      <Text>
        Completions: {slideCompletionCount} Value: {slideCompletionValue}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '500',
    margin: 10,
  },
});

exports.title = '<Slider>';
exports.displayName = 'SliderExample';
exports.description = 'Slider input for numeric values';
exports.examples = [
  {
    title: 'Default settings',
    render(): React.Element<any> {
      return <SliderExample />;
    },
  },
  {
    title: 'Initial value: 0.5',
    render(): React.Element<any> {
      return <SliderExample value={0.5} />;
    },
  },
  {
    title: 'minimumValue: -1, maximumValue: 2',
    render(): React.Element<any> {
      return <SliderExample minimumValue={-1} maximumValue={2} />;
    },
  },
  {
    title: 'step: 0.25',
    render(): React.Element<any> {
      return <SliderExample step={0.25} />;
    },
  },
  {
    title: 'onSlidingComplete',
    render(): React.Element<any> {
      return <SlidingCompleteExample />;
    },
  },
  {
    title: 'Custom min/max track tint color',
    render(): React.Element<any> {
      return (
        <SliderExample
          minimumTrackTintColor={'blue'}
          maximumTrackTintColor={'red'}
          value={0.5}
        />
      );
    },
  },
  {
    title: 'Custom thumb tint color',
    render(): React.Element<any> {
      return <SliderExample thumbTintColor={'blue'} />;
    },
  },
  {
    title: 'Custom thumb image',
    platform: 'ios',
    render(): React.Element<any> {
      return (
        <SliderExample thumbImage={require('../../assets/uie_thumb_big.png')} />
      );
    },
  },
  {
    title: 'Custom track image',
    platform: 'ios',
    render(): React.Element<any> {
      return <SliderExample trackImage={require('../../assets/slider.png')} />;
    },
  },
  {
    title: 'Custom min/max track image',
    platform: 'ios',
    render(): React.Element<any> {
      return (
        <SliderExample
          minimumTrackImage={require('../../assets/slider-left.png')}
          maximumTrackImage={require('../../assets/slider-right.png')}
        />
      );
    },
  },
];
