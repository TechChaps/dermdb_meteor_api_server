//import { Meteor } from 'meteor/meteor';
//
//Meteor.startup(() => {
//  // code to run on server at startup
//});

Meteor.publish("images", function(){ return Images.find(); });

//var Api = new Restivus({
//    useDefaultAuth: false,
//    prettyJson: true
//});
//Api.addRoute('addImage', {authRequired: false}, {
//    get: function () {
//        console.log("get");
//        return {status: 'success', data: {message: 'Article removed'}};
//    }
//});

Meteor.method("add", function () {
    return "hellooooo";
}, {
    url: "add"
}
);