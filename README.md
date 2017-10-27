# react-native-scroll-indicator
React native scroll indicator

[![npm](https://img.shields.io/npm/v/react-native-scroll-indicator.svg?style=flat-square)](https://www.npmjs.com/package/react-native-scroll-indicator)

 - [Usage](#usage)
 - [Demo](#demo)
 - [Code](#code)
 - [Components](#components)
 - [License](#License)

## Usage

Install

```bash
 $ npm install @inteach/react-native-scroll-indicator -save
 $ react-native link react-native-linear-gradient
```

## Demo

<img src="https://raw.githubusercontent.com/InTeach/react-native-scroll-indicator/master/assets/exemple.gif" height="100">

## Code

```javascript
import ScrollIndicator from 'react-native-scroll-indicator'

const Component = () =>``
  <View style={{ flex: 1 }}>
    <ScrollIndicator>
        {/* Somme scrolable content */}
    </ScrollIndicator>
  </View>
```

## Components

ScrollIndicator
---
Props:

 - minScrollHeight (int) : default 0
 - style (object) : default {}
 - scrollEnabled (bool) : default true
 - showIndicator (bool) : default true
 - picto (require) : default false


## License

[MIT License](https://opensource.org/licenses/MIT)
