import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { View } from 'react-native'
import Images from '../../Themes/Images';
import metrics from '../../Themes/Metrics'
import StyleCard from './styles'

const TeamMemberCard = (props) => {
  return (
    <View style={StyleCard.card}>
      <Card stlye={{ height: '80%' }}>
        <Card.Cover
          source={props.image}
          resizeMode={`stretch`}
          style={{ height:metrics.screenHeight*0.3  }} />
        <Card.Content style={StyleCard.Content}>
          <Title style={StyleCard.title}>
            {props.name}
          </Title>
          <Title style={StyleCard.title}>
            {props.role}
          </Title>
        </Card.Content>
      </Card>
    </View>
  );
}

export default TeamMemberCard;