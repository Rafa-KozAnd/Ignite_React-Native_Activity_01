import React, { FunctionComponent } from "react";
import Icon from "react-native-vector-icons/FontAwesome";

import { StyleSheet, Text, View } from "react-native";

interface CardProps {
  title: string;
  onRemove(): void;
}

const SkillCard: FunctionComponent<CardProps> = ({
  title,
  onRemove,
  ...rest
}) => {
  return (
    <View style={styles.skillContainer} {...rest}>
      <Text style={styles.skillText}>{title}</Text>
      <Icon
        onPress={onRemove}
        name="trash"
        size={20}
        color="#FFF"
        style={styles.deleteIcon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  skillContainer: {
    flexDirection: "row",
    backgroundColor: "#1F1E25",
    padding: 20,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 7,
  },
  skillText: {
    position: "absolute",
    alignSelf: "center",
    color: "#FFF",
    fontSize: 22,
    fontWeight: "500",
  },
  deleteIcon: {
    marginLeft: "auto",
  },
});

export default SkillCard;
