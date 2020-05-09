import React, { useReducer } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, ThemeProvider, Card } from 'react-native-elements';
import { v4 as uuidV4 } from 'uuid';

const ADD_TASK = 'ADD_TASK';

export default function App() {
  const [{ tasks }, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case ADD_TASK:
          return { ...state, tasks: [{ id: uuidV4() }, ...state.tasks] };
        default:
          throw Error(`Unrecognized action ${action.type}`);
      }
    },
    { tasks: [] }
  );

  return (
    <ThemeProvider>
      <View style={styles.container}>
        {tasks.map(task => (
          <Card title="New Task" accessibilityLabel="task card" key={task.id} />
        ))}
        <Button
          containerStyle={{ marginTop: 10 }}
          title="Add Task"
          accessibilityLabel="add task"
          onPress={() => dispatch({ type: ADD_TASK })}
        />
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
