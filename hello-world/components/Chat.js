import React from 'react';
import { View, Platform, KeyboardAvoidingView} from 'react-native';
import { Bubble, GiftedChat } from 'react-native-gifted-chat';

export default class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      name: "",
      messages: []
    }

  }

  //componentDidMount so state is set with a static message
  componentDidMount() {
    this.setState ({
      messages: [
        {
          _id: 1,
          text: 'Hello dev',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
        {
          _id: 2,
          text: 'This is a system message',
          createdAt: new Date(),
          system: true,
        },
      ],
    })
  }

  //onSend function called when user sends a message
  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
  }

  //renderBubble function to change messaging bubble color
  renderBubble(props) {
    return (
      <Bubble
      {...props}
      wrapperStyle={{
        right: {
          backgroundColor: '#000'
        }
      }} />
    )
  }

  render() {
    let name = this.props.route.params.name;
    let bgColor = this.props.route.params.bgColor;
    this.props.navigation.setOptions({ title: name });

    return (
      //dispalying gifted chat messaging
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: bgColor }}>
        <GiftedChat 
        renderBubble={this.renderBubble.bind(this)}
        messages={this.state.messages}
        onSend={(messages) => this.onSend(messages)}
        user={{
          _id: 1,
        }} />
        {/** older model androids, keyboard won't overlap with text box */}
        {Platform.OS === 'android' ? (
          <KeyboardAvoidingView behavior='height' />
        ) : null}
      </View>

    );
  }
}
