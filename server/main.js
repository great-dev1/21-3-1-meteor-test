import { Meteor } from 'meteor/meteor';
import { Tasks } from '/imports/api/tasks';
import { Random } from 'meteor/random';

const testData = [
  {
    title: 'Task1',
    hasDescription: true,
    commentsCount: 2,
    color: '#4e42c3',
    status: 'incomplete'
  },
  {
    title: 'Task2',
    customFields: [
      {
        _id: Random.id(),
        value: 'Highest'
      }
    ],
    status: 'incomplete'
  },
  {
    title: 'Task3',
    hasDescription: true,
    filesCount: 3,
    status: 'incomplete'
  },
  {
    title: 'Task4',
    hasDescription: true,
    commentsCount: 3,
    totalTimeTracked: 15,
    status: 'incomplete',
    repeat: {
      interval: 3
    }
  },
  {
    title: 'Task5',
    status: 'completed'
  },
  {
    title: 'Task6',
    status: 'completed',
    commentsCount: 5
  },
  {
    title: 'Task7',
    status: 'completed',
    isPrivate: true
  }
];

Meteor.startup(() => {
  // If the Links collection is empty, add some data.
  if (Tasks.find().count() === 0) {
    testData.forEach(task => Tasks.insert(task));
  }
});
