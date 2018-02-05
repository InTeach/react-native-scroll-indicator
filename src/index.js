import React, { Component } from "react";
import { StyleSheet, View, Image, Animated } from "react-native";

import LinearGradient from "react-native-linear-gradient";

class ScrollIndicator extends Component {
  static defaultProps = {
    minScrollHeight: 0,
    style: {},
    scrollEnabled: true,
    showIndicator: true,
    picto: false,
    renderPicto: false,
    linearGradientColors: ["transparent", "#212121"],
    styleGradientBackground: {}
  };

  constructor(props) {
    super(props);
    this.state = {
      scrollViewHeight: 0,
      contentHeight: 0,
      bottom: new Animated.Value(100)
    };
  }

  displayIndicator(includeMinScroll = true) {
    const { scrollViewHeight, contentHeight } = this.state;
    const { minScrollHeight } = this.props;

    return (
      scrollViewHeight &&
      contentHeight &&
      contentHeight >
        Math.ceil(scrollViewHeight) + (includeMinScroll ? minScrollHeight : 0)
    );
  }

  render() {
    const { scrollViewHeight, contentHeight, bottom } = this.state;
    const {
      children,
      scrollEnabled,
      showIndicator,
      style,
      picto,
      renderPicto,
      linearGradientColors,
      styleGradientBackground
    } = this.props;
    const maxValue = Math.max(contentHeight - scrollViewHeight, 0);
    const slideViewBottom = bottom.interpolate({
      inputRange: [0, maxValue],
      outputRange: [0, 100],
      extrapolate: "clamp"
    });

    const slideViewTop = bottom.interpolate({
      inputRange: [0, maxValue],
      outputRange: [60, 100],
      extrapolate: "clamp"
    });

    return (
      <View style={{ flex: 1, overflow: "hidden" }}>
        {showIndicator && this.displayIndicator(false) ? (
          <Animated.View
            style={[
              styles.swipeWrapperTop,
              {
                transform: [{ translateY: slideViewTop }]
              }
            ]}
          >
            <LinearGradient
              colors={linearGradientColors.reverse()}
              style={[styles.gradientBackground]}
            />
          </Animated.View>
        ) : null}
        <Animated.ScrollView
          style={{ flex: 1 }}
          scrollEnabled={scrollEnabled}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: bottom } } }],
            { useNativeDriver: true }
          )}
          onLayout={e => {
            this.setState({
              scrollViewHeight: e.nativeEvent.layout.height
            });
          }}
          scrollEventThrottle={16}
        >
          <View
            style={[
              {
                flex: 1,
                minHeight: scrollViewHeight
              },
              style
            ]}
            onLayout={e => {
              this.setState({
                contentHeight: e.nativeEvent.layout.height
              });
            }}
          >
            {children}
          </View>
        </Animated.ScrollView>
        {showIndicator && this.displayIndicator() ? (
          <Animated.View
            onLayout={() => {
              Animated.timing(this.state.bottom, {
                toValue: 0,
                duration: 500,
                useNativeDriver: true
              }).start();
            }}
            style={[
              styles.swipeWrapperBottom,
              {
                transform: [{ translateY: slideViewBottom }]
              }
            ]}
          >
            <LinearGradient
              colors={linearGradientColors}
              style={[styles.gradientBackground, styleGradientBackground]}
            >
              <View>
                {renderPicto && renderPicto()}
                {!renderPicto && picto ? <Image source={picto} /> : <View />}
              </View>
            </LinearGradient>
          </Animated.View>
        ) : null}
      </View>
    );
  }
}

export default ScrollIndicator;

const styles = StyleSheet.create({
  swipeWrapperTop: {
    backgroundColor: "transparent",
    position: "absolute",
    left: 0,
    right: 0,
    top: -160,
    zIndex: 999
  },
  swipeWrapperBottom: {
    backgroundColor: "transparent",
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 999
  },
  gradientBackground: {
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    backgroundColor: "transparent"
  }
});
