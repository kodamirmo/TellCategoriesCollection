import { Mongo } from 'meteor/mongo';

class TellCategoriesCollection extends Mongo.Collection {

}

export const TellCategories = new TellCategoriesCollection('tellCategories');
TellCategories.attachBehaviour('timestampable');
