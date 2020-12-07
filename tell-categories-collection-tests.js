// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by tell-categories-collection.js.
import { name as packageName } from "meteor/igoandtell:tell-categories-collection";

// Write your tests here!
// Here is an example.
Tinytest.add('tell-categories-collection - example', function (test) {
  test.equal(packageName, "tell-categories-collection");
});
