import React, {
  useCallback,
  useState,
  useEffect,
  FunctionComponent,
} from "react";
import {
  Text,
  View,
  StatusBar,
  TextInput,
  FlatList,
  Keyboard,
} from "react-native";

import Button from "../../components/Button";
import SkillCard from "../../components/SkillCard";

import styles from "./styles";

interface ISkill {
  id: string;
  title: string;
}

const Home: FunctionComponent = () => {
  const [skills, setSkills] = useState<ISkill[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [skillsCounter, setSkillsCounter] = useState<number>(0);

  const handleAddSkill = useCallback(() => {
    const data = {
      id: String(new Date().getTime()),
      title: inputValue,
    };

    setSkills((prevState) => [...prevState, data]);
    setInputValue("");
    Keyboard.dismiss();
  }, [inputValue]);

  const handleRemoveSkill = useCallback(
    (removedSkillId) => {
      setSkills((prevState) =>
        prevState.filter((skill) => skill.id !== removedSkillId)
      );
    },
    [inputValue]
  );

  useEffect(() => {
    setSkillsCounter(skills.length);
  }, [skills]);

  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <Text style={styles.title}>Welcome, Guilhermo</Text>
        <TextInput
          style={styles.input}
          value={inputValue}
          onChangeText={setInputValue}
          placeholder="New Skill"
          placeholderTextColor="#555"
        />
        <Button onPress={handleAddSkill}>Adicionar</Button>

        <Text style={[styles.title, { marginTop: 50, marginBottom: 20 }]}>
          My Skills: ({skillsCounter})
        </Text>
        <FlatList
          data={skills}
          keyExtractor={(skill) => skill.id}
          renderItem={({ item }) => (
            <SkillCard
              title={item.title}
              onRemove={() => handleRemoveSkill(item.id)}
            />
          )}
        />
      </View>
    </>
  );
};

export default Home;
