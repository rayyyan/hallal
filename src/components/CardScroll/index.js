import React, { useState, useRef, useEffect } from "react"
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import { CARD } from "../../../utils/constants"

// interface Props {
//   visible: boolean;
//   onDismiss: () => void;
// }

const scrollElementHeightPercent = 45
const scrollElementHeightPercentStr = `${scrollElementHeightPercent}%`
const scrollBarBorderRadius = 6

const CardScroll = ({ children, user }) => {
  const [contentOffset, setContentOffset] = useState({ x: 0, y: 0 })
  const scrollRef = useRef(0)
  const [contentSize, setContentSize] = useState(0)
  const [scrollViewHeight, setScrollViewHeight] = useState(0)

  let scrollPosPercent

  if (contentOffset.y > 0) {
    scrollPosPercent =
      (contentOffset.y / (contentSize - scrollViewHeight)) *
      (100 - scrollElementHeightPercent)
  }

  useEffect(() => {
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    })
  }, [user])
  return (
    <View
      testID={"image_scroll_modal"}
      style={{
        position: "relative",
        flex: 1,
        justifyContent: "flex-end",
        borderRadius: 16,
      }}
      scrollTo={(e, propagated) => {
        if (propagated) {
          scrollRef.current?.scrollTo({ ...e, animated: true })
          return
        }

        if (typeof e.y === "number") {
          let newOffset = {
            x: contentOffset.x || e.x,
            y: contentOffset.y || e.y,
          }

          setContentOffset(newOffset)
        }
      }}
      scrollOffset={contentOffset.y}
      propagateSwipe={true}
      coverScreen={true}
      // isVisible={props.visible}
      // onSwipeComplete={onDismiss}
      swipeDirection="down"
      // onBackdropPress={onDismiss}
      scrollOffsetMax={1000}
    >
      <View style={styles.container} testID="flatlist_modal_view">
        <View
          style={{
            position: "absolute",
            right: 20,
            top: "20%",
            marginBottom: 8,
            width: 3,
            height: 65,
            borderRadius: scrollBarBorderRadius,
            backgroundColor: "rgba(255,255,255,.5)",
            zIndex: 1,
          }}
        >
          <View
            style={{
              position: "absolute",
              left: 0,
              top: `${Number(scrollPosPercent || 0).toFixed(0)}%`,
              marginBottom: 8,
              width: 3,
              height: scrollElementHeightPercentStr,
              borderRadius: scrollBarBorderRadius + 2,
              backgroundColor: "rgba(255,255,255,.7)",
            }}
          />
        </View>

        <View
          style={{
            width: "100%",
            flex: 1,
            height: "100%",
            borderRadius: 16,
          }}
        >
          <ScrollView
            testID="image_scroll_view"
            ref={scrollRef}
            scrollEventThrottle={16}
            onLayout={(e) => {
              setScrollViewHeight(e.nativeEvent.layout.height)
            }}
            onContentSizeChange={(_, height) => {
              setContentSize(height)
            }}
            showsHorizontalScrollIndicator
            showsVerticalScrollIndicator={false}
            bounces={false}
            disableScrollViewPanResponder
            onScroll={(e: any) => {
              22222
              setContentOffset(e.nativeEvent.contentOffset)
            }}
            automaticallyAdjustContentInsets={false}
            style={styles.scrollView}
          >
            {children}
          </ScrollView>
        </View>
      </View>
    </View>
  )
}
export default CardScroll
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: CARD.HEIGHT,
    position: "relative",
    backgroundColor: "transparent",
    borderRadius: 25,
  },
  scrollView: {},
})
