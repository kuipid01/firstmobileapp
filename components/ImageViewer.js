import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const ImageViewer = ({image,selectedImage }) => {
    const img = selectedImage ? {uri :selectedImage } :image
  return (
    <Image source={img} style={styles.image}/>
  )
}
const styles = StyleSheet.create({
    image: {
      width: 320,
      height: 440,
      borderRadius: 18,
    },
  });
export default ImageViewer