import { Text } from "react-native";
import styles from "./styles";
import Animated, { FadeIn } from "react-native-reanimated";

interface Props {
  loading: boolean;
  error: string | null;
}

const EmptyList = ({ loading, error }: Props) => {
  if (error) {
    return <Text style={styles.emptyTxt}>Error fetching feed!</Text>;
  }
  if (loading) {
    return <Text style={styles.emptyTxt}>Loading...</Text>;
  }
  return (
    <Animated.Text entering={FadeIn.duration(1500)} style={styles.emptyTxt}>
      You've reached the end of the feed!
    </Animated.Text>
  );
};

export default EmptyList;
