//Get TODOs from database
var resultSet = conn.execute('SELECT * FROM todos');
  while (resultSet.isValidRow()) {
    results.push({
      id: resultSet.fieldByName('id'),
      todo: resultSet.fieldByName('todo')
    });
    resultSet.next();
  }
resultSet.close();
