import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

interface Props {
  refresh: () => void;
}

const Header = ({ refresh }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image
          source={require("../../../assets/icon.png")}
          style={styles.logo}
        />
        <Text style={styles.title}>Fresh Feed</Text>
      </View>
      <TouchableOpacity onPress={refresh}>
        <Image
          source={require("../../../assets/images/refresh.png")}
          style={styles.refresh}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
