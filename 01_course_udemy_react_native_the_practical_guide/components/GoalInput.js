import { StyleSheet, View, TextInput, Button } from 'react-native';
import { useState } from 'react';

const styles = StyleSheet.create({
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
	}
})

function GoalInput(props) {
	const [enteredGoalText, setEnteredGoalText] = useState('');
	function goalInputHandler(enteredText) {
		setEnteredGoalText(enteredText);
	};
	function addGoalHandler() {
		props.onAddGoal(enteredGoalText);
		setEnteredGoalText(''); // enable or not resetting text on button click
	}
	return (
		<View style={styles.inputContainer}>
			<TextInput
				style={styles.textInput}
				placeholder='Your Course Goal'
				onChangeText={goalInputHandler}
				value={enteredGoalText}
			/>
			<Button title='Add Goal' onPress={addGoalHandler} />
		</View>
	);
}

export default GoalInput;
