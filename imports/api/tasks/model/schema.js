import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export const Tasks = new Mongo.Collection('tasks');

const regExId = SimpleSchema.RegEx.Id;

const { Integer } = SimpleSchema;

Tasks.schema = new SimpleSchema(
  {
    _id: {
      type: String,
      regEx: regExId
    },
    createdAt: {
      type: Date,
      autoValue() {
        if (this.isInsert) {
          return new Date();
        }
      }
    },
    updatedAt: {
      type: Date,
      autoValue() {
        if (this.isUpdate) {
          return new Date();
        }
      }
    },
    isPrivate: {
      type: Boolean,
      defaultValue: false
    },
    title: {
      type: String,
      min: 1,
      max: 500
    },
    totalTimeTracked: {
      type: Integer,
      defaultValue: 0,
      min: 0
    },
    commentsCount: {
      type: Integer,
      defaultValue: 0,
      min: 0
    },
    filesCount: {
      type: Integer,
      defaultValue: 0,
      min: 0
    },
    hasDescription: {
      type: Boolean,
      defaultValue: false
    },
    dueDate: Date,
    repeat: {
      type: Object,
      defaultValue: {}
    },
    'repeat.interval': {
      type: Integer,
      min: 0,
      max: 365
    },
    completedAt: {
      type: Date
    },
    status: {
      type: String,
      allowedValues: ['incomplete', 'completed']
    },
    customFields: {
      type: Array,
      defaultValue: []
    },
    'customFields.$': {
      type: Object
    },
    'customFields.$._id': {
      type: String,
      regEx: regExId
    },
    'customFields.$.value': {
      type: SimpleSchema.oneOf(String, Number, Date)
    },
    color: {
      type: String,
      regEx: /^#[0-9A-F]{6}$/i
    }
  },
  {
    clean: {
      filter: true,
      autoConvert: true,
      removeEmptyStrings: false,
      trimStrings: false,
      getAutoValues: true,
      removeNullsFromArrays: true
    },
    requiredByDefault: false
  }
);

Tasks.attachSchema(Tasks.schema);
