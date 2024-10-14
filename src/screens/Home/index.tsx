import styles from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import useDynamicList from "../../hooks/useDymanicList";
import ArticleCard from "../../components/ArticleCard";
import Animated, { LinearTransition } from "react-native-reanimated";
import Header from "../../components/Header";
import EmptyList from "../../components/EmptyList";

const HomeScreen = () => {
  const {
    feed = [],
    pinned = [],
    feedAllIds = [],
    error,
    loading,
    refresh: onRefresh,
  } = useDynamicList();

  return (
    <SafeAreaView style={styles.container}>
      <Header refresh={onRefresh} />
      <Animated.FlatList
        data={pinned.concat(feed) ?? feedAllIds.slice(0, 10)}
        keyExtractor={(item) => item.toString()}
        renderItem={({ item }) => <ArticleCard id={item} />}
        itemLayoutAnimation={LinearTransition}
        ListEmptyComponent={<EmptyList loading={loading} error={error} />}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
