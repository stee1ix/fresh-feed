import { Text } from "react-native";
import styles from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import useDynamicFetch from "../../hooks/useDymanicList";

const HomeScreen = () => {
  useDynamicFetch();

  return (
    <SafeAreaView style={styles.container}>
      <Text>Fresh Feed</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
