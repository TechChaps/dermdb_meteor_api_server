Template.pagefront.events({
    'change .submitImage': function(event, template) {
        console.log("uploading");
        FS.Utility.eachFile(event, function(file) {
            Images.insert(file, function (err, fileObj) {
                if (err){
                    // handle error
                    console.log(err);
                } else {
                    // handle success depending what you need to do
                    var userId = Meteor.userId();
                    var imagesURL = {
                        "profile.image": "/cfs/files/images/" + fileObj._id
                    };
                    console.log("Added image");
                }
            });
        });
    }
});