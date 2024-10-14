import { StyleSheet } from "react-native";
import { colors } from "../../constants";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    borderColor: colors.grey,
    borderBottomWidth: 1,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  logo: {
    borderRadius: 5,
    height: 30,
    width: 30,
  },
  refresh: {
    height: 30,
    width: 30,
  },
});
