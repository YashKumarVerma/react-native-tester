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
const {View} = require('react-native');
const SampleTurboModuleExample = require('./SampleTurboModuleExample');

exports.displayName = (undefined: ?string);
exports.title = 'TurboModule';
exports.description = 'Usage of TurboModule';
exports.examples = [
  {
    title: 'SampleTurboModule',
    render: function(): React.Element<any> {
      return <View></View>;
    },
  },
];
