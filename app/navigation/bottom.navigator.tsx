import React from 'react';
import { Text } from 'react-native';
import { Navbar, ActionBar, ActionBarWrapperSingle, ActionBarWrapperDouble, PriceResume, Button } from '@Components'

export default class BottomBar extends React.PureComponent<any, any> {

  constructor(props: any) {
    super(props);
  }

  render() {
    const { type, text = 'Avançar', label, description, onPress, menu } = this.props;

    if (type == 'action-bar') return (
      <ActionBar>
        {label && description
          ? (
            <ActionBarWrapperDouble>
              <PriceResume label={label} description={description} />
              <Button onPress={onPress} color="black">
                <Text>{text}</Text>
              </Button>
            </ActionBarWrapperDouble>
          )
          : (
            <ActionBarWrapperSingle>
              <Button onPress={onPress} color="black">
                <Text>{text}</Text>
              </Button>
            </ActionBarWrapperSingle>
          )}
      </ActionBar>
    )

    if (type == 'nav-bar') return (
      <Navbar items={menu} />
    )

    return null
  }
}