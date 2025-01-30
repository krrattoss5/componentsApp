import React, {useState} from 'react';
import {ActivityIndicator, FlatList, Image, View} from 'react-native';
import {Title} from '../../components/ui/Title';
import {colors} from '../../../config/theme/theme';
export const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);

  const loadMore = () => {
    const newArray = Array.from({length: 10}, (_, i) => numbers.length + i);
    setTimeout(() => {
      setNumbers([...numbers, ...newArray]);
    }, 3000);
  };

  return (
    <View style={{backgroundColor: 'black'}}>
      <Title text="Infinite Scroll" safe />

      <FlatList
        data={numbers}
        onEndReached={loadMore}
        onEndReachedThreshold={0.6}
        keyExtractor={item => item.toString()}
        renderItem={({item}) => <ListItem number={item} />}
        ListFooterComponent={() => (
          <View style={{height: 150, justifyContent: 'center'}}>
            <ActivityIndicator size={40} color={colors.primary} />
          </View>
        )}
      />
    </View>
  );
};

interface Props {
  number: number;
}

const ListItem = ({number}: Props) => {
  return (
    <Image
      source={{uri: `https://picsum.photos/id/${number}/500/400`}}
      style={{height: 400, width: '100%'}}
    />
  );
};
