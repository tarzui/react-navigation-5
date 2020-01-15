import React from 'react';
import {
  Input,
  Layout,
  List,
  ListItem,
  Text,
  withStyles,
} from '@ui-kitten/components';
import {AppRoute} from '../../navigation/app-routes';
import {ProgressBar} from '../../components/progress-bar';
import {SearchIcon} from '../../assets/icons';
import {Todo} from '../../data/todo.model';

const allTodos = [
  Todo[0],
  Todo[1],
  Todo[2],
  Todo[0],
  Todo[1],
  Todo[2],
  Todo[0],
  Todo[1],
  Todo[2],
];

const TodoInProgressScreenComponent = props => {
  const [todos, setTodos] = React.useState(allTodos);
  const [query, setQuery] = React.useState('');

  const onChangeQuery = query => {
    const nextTodos = allTodos.filter(todo => {
      return todo.title.toLowerCase().includes(query.toLowerCase());
    });

    setTodos(nextTodos);
    setQuery(query);
  };

  const navigateTodoDetails = todoIndex => {
    const {[todoIndex]: todo} = todos;
    props.navigation.navigate(AppRoute.TODO_DETAILS, {todo});
  };

  const renderTodo = ({item}) => (
    <ListItem style={props.themedStyle.item} onPress={navigateTodoDetails}>
      <Text category="s1">{item.title}</Text>
      <Text appearance="hint" category="c1">
        {item.description}
      </Text>
      <ProgressBar
        style={props.themedStyle.itemProgressBar}
        progress={item.progress}
        text={`${item.progress}%`}
      />
    </ListItem>
  );

  return (
    <Layout style={props.themedStyle.container}>
      <Input
        style={props.themedStyle.filterInput}
        placeholder="Search"
        value={query}
        icon={SearchIcon}
        onChangeText={onChangeQuery}
      />
      <List
        style={props.themedStyle.list}
        data={todos}
        renderItem={renderTodo}
      />
    </Layout>
  );
};

export const TodoInProgressScreen = withStyles(
  TodoInProgressScreenComponent,
  theme => ({
    container: {
      flex: 1,
    },
    filterInput: {
      marginTop: 16,
      marginHorizontal: 8,
    },
    list: {
      flex: 1,
      backgroundColor: theme['background-basic-color-1'],
    },
    item: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      paddingHorizontal: 12,
    },
    itemProgressBar: {
      width: '50%',
      marginVertical: 12,
    },
  }),
);
