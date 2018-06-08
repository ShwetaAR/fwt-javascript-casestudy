var Task = require('./task');

describe('Task', function () {
  var task;

  beforeEach(function () {
    task = new Task();
  });

  it('adding a student adds them to the roster for the given grade', function () {
    task.add('Title1', 'Tue Jun 05 2018','Inprogress');
    var expectedDb = { 'Title1', 'Tue Jun 05 2018','Inprogress' };
    expect(task.showTasks()).toEqual(expectedDb);
  });

 
});
