/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow strict-local
 */

'use strict';

const React = require('react');

const {StyleSheet, Text} = require('react-native');
import {Picker} from '@react-native-community/picker';

const Item = Picker.Item;

type State = {value: string | number, ...};

class BasicPickerExample extends React.Component<{...}, State> {
  state: State = {
    value: 'key1',
  };

  render(): React.Node {
    return (
      <Picker
        testID="basic-picker"
        style={styles.picker}
        selectedValue={this.state.value}
        onValueChange={(v) => this.setState({value: v})}>
        <Item label="hello" value="key0" />
        <Item label="world" value="key1" />
      </Picker>
    );
  }
}

class DisabledPickerExample extends React.Component<{...}, State> {
  state: State = {
    value: 'key1',
  };

  render(): React.Node {
    return (
      <Picker
        style={styles.picker}
        enabled={false}
        selectedValue={this.state.value}>
        <Item label="hello" value="key0" />
        <Item label="world" value="key1" />
      </Picker>
    );
  }
}

class DropdownPickerExample extends React.Component<{...}, State> {
  state: State = {
    value: 'key1',
  };

  render(): React.Node {
    return (
      <Picker
        style={styles.picker}
        selectedValue={this.state.value}
        onValueChange={(v) => this.setState({value: v})}
        mode="dropdown">
        <Item label="hello" value="key0" />
        <Item label="world" value="key1" />
      </Picker>
    );
  }
}

class PromptPickerExample extends React.Component<{...}, State> {
  state: State = {
    value: 'key1',
  };

  render(): React.Node {
    return (
      <Picker
        style={styles.picker}
        selectedValue={this.state.value}
        onValueChange={(v) => this.setState({value: v})}
        prompt="Pick one, just one">
        <Item label="hello" value="key0" />
        <Item label="world" value="key1" />
      </Picker>
    );
  }
}

type ColorState = {color: string | number, ...};

class ColorPickerExample extends React.Component<{...}, ColorState> {
  state: ColorState = {
    color: 'red',
  };

  render(): React.Node {
    return (
      <>
        <Picker
          style={[styles.picker, {color: 'white', backgroundColor: '#333'}]}
          selectedValue={this.state.color}
          onValueChange={(v) => this.setState({color: v})}
          mode="dropdown">
          <Item label="red" color="red" value="red" />
          <Item label="green" color="green" value="green" />
          <Item label="blue" color="blue" value="blue" />
        </Picker>
        <Picker
          style={styles.picker}
          selectedValue={this.state.color}
          onValueChange={(v) => this.setState({color: v})}
          mode="dialog">
          <Item label="red" color="red" value="red" />
          <Item label="green" color="green" value="green" />
          <Item label="blue" color="blue" value="blue" />
        </Picker>
      </>
    );
  }
}
class AccessibilityLabelPickerExample extends React.Component<{||}, State> {
  state: State = {
    value: '3',
  };

  render(): React.Node {
    return (
      <Picker
        accessibilityLabel={this.state.value + 'Hours'}
        style={styles.picker}
        selectedValue={this.state.value}
        onValueChange={(v) => this.setState({value: v})}>
        <Item label="1" value="1" />
        <Item label="2" value="2" />
        <Item label="3" value="3" />
      </Picker>
    );
  }
}

const styles = StyleSheet.create({
  picker: {
    width: 100,
  },
});

exports.title = '<Picker>';
exports.description =
  'Provides multiple options to choose from, using either a dropdown menu or a dialog.';
exports.examples = [
  {
    title: 'Basic Picker',
    render: function (): React.Element<typeof BasicPickerExample> {
      return <BasicPickerExample />;
    },
  },
  {
    title: 'Disabled Picker',
    render: function (): React.Element<typeof DisabledPickerExample> {
      return <DisabledPickerExample />;
    },
  },
  {
    title: 'Dropdown Picker',
    render: function (): React.Element<typeof DropdownPickerExample> {
      return <DropdownPickerExample />;
    },
  },
  {
    title: 'Picker with prompt message',
    render: function (): React.Element<typeof PromptPickerExample> {
      return <PromptPickerExample />;
    },
  },
  {
    title: 'Accessibility Label pickers',
    render: function (): React.Element<typeof AccessibilityLabelPickerExample> {
      return <AccessibilityLabelPickerExample />;
    },
  },
  {
    title: 'Picker with no listener',
    render: function (): React.Element<typeof PromptPickerExample> {
      return (
        /* $FlowFixMe(>=0.99.0 site=react_native_fb) This comment suppresses an
         * error found when Flow v0.99 was deployed. To see the error, delete
         * this comment and run Flow. */
        <>
          <Picker style={styles.picker}>
            <Item label="hello" value="key0" />
            <Item label="world" value="key1" />
          </Picker>
          <Text>
            Cannot change the value of this picker because it doesn't update
            selectedValue.
          </Text>
        </>
      );
    },
  },
  {
    title: 'Colorful pickers',
    render: function (): React.Element<typeof ColorPickerExample> {
      return <ColorPickerExample />;
    },
  },
  {
    title: 'AccessibilityLabel pickers',
    render: function (): React.Element<typeof AccessibilityLabelPickerExample> {
      return <AccessibilityLabelPickerExample />;
    },
  },
];
