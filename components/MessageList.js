import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import MessageItem from './MessageItem'

const MessageList = ({ message, currentUser, scrollViewRef }) => {
  return (
    <ScrollView ref={scrollViewRef} showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingTop: 10 }}>
      {
        message.map((message, index) => {
          return (<MessageItem message={message} currentUser={currentUser} key={index} />)
        })
      }
    </ScrollView>
  )
}

export default MessageList