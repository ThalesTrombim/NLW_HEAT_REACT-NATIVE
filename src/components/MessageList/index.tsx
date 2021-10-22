import React from 'react';
import { ScrollView, View } from 'react-native';
import { Message } from '../Message';

import { styles } from './styles';

export function MessageList(){

  const message = {
    id: 'string',
    text: 'Teste de mensagem',
    user: {
      name: 'thales',
      avatar_url: 'http://github.com/ThalesTrombim.png',
    }
  }

  return (
    <ScrollView 
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps='never'
    >
        <Message data={message} />
        <Message data={message} />
        <Message data={message} />
    </ScrollView>
  );
}