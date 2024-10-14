import { Button, Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { Article } from "../../types";
import { deleteArticleRequest, pinArticleRequest } from "../../redux/actions";
import moment from "moment";
import { useMemo, useRef } from "react";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { getIsArticlePinned } from "../../redux/selectors";

interface Props {
  id: number;
}

const ArticleCard = ({ id }: Props) => {
  const article: Article = useSelector((state) => state.feed.byId[id]);
  const isArticlePinned: boolean = useSelector((state) =>
    getIsArticlePinned(state.pinned, id)
  );
  const dispatch = useDispatch();
  const swipeableRef = useRef<Swipeable | null>(null);

  const publishedAt = useMemo(
    () => moment(article?.publishedAt).format("h:mm A"),
    [article]
  );

  const handlePin = () => {
    dispatch(pinArticleRequest(id));
    swipeableRef.current?.close();
  };

  const handleDelete = () => {
    swipeableRef.current?.close();
    dispatch(deleteArticleRequest(id));
  };

  const renderActions = () => {
    return (
      <View style={styles.actionsContainer}>
        <TouchableOpacity onPress={handleDelete} style={styles.actionBtn}>
          <Image
            source={require("../../../assets/images/delete.png")}
            style={styles.deleteImage}
            resizeMode="contain"
          />
          <Text style={styles.actionTxt}>Delete</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePin} style={styles.actionBtn}>
          <Image
            source={require("../../../assets/images/pin.png")}
            style={styles.pinImage}
            resizeMode="contain"
          />
          <Text style={styles.actionTxt}>
            {isArticlePinned ? "Unpin" : "Pin"}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return article ? (
    <View style={styles.container}>
      <Swipeable ref={swipeableRef} renderRightActions={renderActions}>
        <View style={styles.innerContainer}>
          {isArticlePinned && (
            <View style={styles.pinnedContainer}>
              <Image
                source={require("../../../assets/images/pin-black.png")}
                style={styles.pinBlackImage}
                resizeMode="contain"
              />
              <Text style={styles.topTxt}>Pinned on top</Text>
            </View>
          )}
          <View style={styles.row}>
            <Text style={styles.sourceName}>{article.source.name}</Text>
            <Text style={styles.publishedAt}>{publishedAt}</Text>
          </View>
          <View style={[styles.row, styles.content]}>
            <Text style={styles.description} numberOfLines={3}>
              {article.description}
            </Text>
            {article.urlToImage && (
              <Image
                source={{ uri: article.urlToImage }}
                style={styles.image}
              />
            )}
          </View>
          <Text style={styles.author}>{article.author}</Text>
        </View>
      </Swipeable>
    </View>
  ) : null;
};

export default ArticleCard;
