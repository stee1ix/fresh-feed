import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../constants";

const { width } = Dimensions.get("screen");

export default StyleSheet.create({
  container: { borderColor: colors.grey, borderBottomWidth: 1 },
  innerContainer: {
    backgroundColor: colors.white,
    padding: 20,
    width,
    minHeight: 160,
  },
  row: { flexDirection: "row", justifyContent: "space-between" },
  content: { gap: 20, marginTop: 14, alignItems: "center" },
  sourceName: {
    fontWeight: "400",
    fontSize: 14,
    color: colors.grey2,
  },
  publishedAt: {
    fontWeight: "400",
    fontSize: 12,
  },
  actionTxt: {
    fontWeight: "400",
    fontSize: 12,
    color: colors.white,
    marginTop: 5,
  },
  actionBtn: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  author: {
    marginTop: 10,
    fontWeight: "500",
    fontSize: 12,
    color: colors.grey3,
  },
  image: {
    width: 77,
    height: 77,
    borderRadius: 14,
  },
  description: {
    flex: 1,
    fontWeight: "700",
    fontSize: 18,
  },
  actionsContainer: {
    marginVertical: 18,
    backgroundColor: colors.blue,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  deleteImage: {
    width: 26,
    height: 26,
  },
  pinImage: {
    width: 20,
    height: 20,
  },
  pinnedContainer: {
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 10,
  },
  pinBlackImage: {
    width: 10,
    height: 10,
    opacity: 0.7,
  },
  topTxt: {
    marginLeft: 4,
    fontSize: 12,
    fontWeight: "400",
    color: colors.grey2,
  },
});
