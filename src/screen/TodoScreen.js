import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { IconButton } from "react-native-paper";

const todoList = [{ title: "MYSELF-1" }, { title: "MYSELF-2" }];
export default function TodoScreen() {
  const renderTodos = ({ item, index }) => {
    return (
      <View
        style={{
          backgroundColor: "#1e90ff",
          borderRadius: 6,
          paddingHorizontal: 6,
          paddingVertical: 8,
          marginBottom: 12,
          flexDirection: "row",
          alignItems: "center",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.8,
          shadowRadius: 3,
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          {item?.title}
        </Text>
        <IconButton icon="pencil" iconColor="#fff" />
        <IconButton icon="trash-can" iconColor="#fff" />
      </View>
    );
  };
  return (
    <View style={{ marginHorizontal: 16, marginTop: 40 }}>
      <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 24 }}>
        ToDo APP
      </Text>
      {/* Text Input */}
      <TextInput
        style={{
          borderWidth: 2,
          backgroundColor: "#1e90ff",
          borderRadius: 6,
          paddingVertical: 6,
          paddingHorizontal: 16,
        }}
        placeholder="Add A Task"
      />
      {/* Button */}
      <TouchableOpacity
        style={{
          backgroundColor: "#000",
          borderRadius: 6,
          paddingVertical: 12,
          marginVertical: 32,
          alignItems: "center",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.8,
          shadowRadius: 3,
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontWeight: "bold",
          }}
        >
          ADD
        </Text>
      </TouchableOpacity>
      {/* Render Todo List */}
      <FlatList data={todoList} renderItem={renderTodos} />
    </View>
  );
}

const styles = StyleSheet.create({});
