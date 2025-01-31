import React, {useContext, useState} from 'react';
import {Title} from '../../components/ui/Title';
import {RefreshControl, ScrollView} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ThemeContext} from '../../context/ThemeContext';
import {CustomView} from '../../components/ui/CustomView';

export const PullToRefreshScreen = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const {top} = useSafeAreaInsets();

  const onRefresh = () => {
    setIsRefreshing(true);

    setTimeout(() => {
      setIsRefreshing(false);
    }, 3000);
  };

  const {colors} = useContext(ThemeContext);

  return (
    <CustomView globalMargin>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            progressViewOffset={top}
            colors={[colors.primary, 'red', 'orange', 'green']}
            onRefresh={onRefresh}
          />
        }>
        <Title text="PullTo Refresh" safe />
      </ScrollView>
    </CustomView>
  );
};
