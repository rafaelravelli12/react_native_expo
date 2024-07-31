// import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  };

  function addGoalHandler() {
    console.log(enteredGoalText);
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals,
    {text: enteredGoalText, key: Math.random().toString()},
    ]);
  };

  return (
    // Up to class 17
    // <View style={styles.container}>
    //   <Text style={styles.dummyText}>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    //   <Button title='Tap me!' />
    // </View>

    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder='Your Course Goal'
          onChangeText={goalInputHandler}
        />
        <Button title='Add Goal' onPress={addGoalHandler} />
      </View>

      {/* Up to class 23 */}
      {/* <View style={styles.goalsContainer}> */}
      {/* <Text>List of goals...</Text> */}
      {/* {courseGoals.map((goal) => <Text style={styles.goalItem} key={goal}>{goal}</Text>  )} */}
      {/* </View> */}
      {/* Up to class 26 */}
      {/* <View style={styles.goalsContainer}>
        <ScrollView alwaysBounceVertical={false}>
          {courseGoals.map((goal) => (
            <View key={goal} style={styles.goalItem}>
              <Text style={styles.goalText}>{goal}</Text>
            </View>
          ))}
        </ScrollView>
      </View> */}
      {/* Up to class 27 */}
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={itemData => {
            itemData.index
            return (
              <View style={styles.goalItem}>
                <Text style={styles.goalText}>{itemData.item.text}</Text>
              </View>
            )
          }}
          keyExtractor={(item, index) => {
            return item.key;
          }}
          alwaysBounceVertical={false} />
      </View>

    </View >
  );
}

const styles = StyleSheet.create({
  // Up to class 17
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // dummyText: {
  //   margin: 16,
  //   padding: 16,
  //   borderWidth: 2,
  //   borderColor: 'blue'
  // }

  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    // flexDirection: 'collumn'
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    vorderBottomColor: '#cccccc'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8
  },
  goalsContainer: {
    flex: 5
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    color: 'white'
  }
});
