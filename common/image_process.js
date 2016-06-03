//var imageStore = new FS.Store.FileSystem("images", {
//    path: "~/app-files/images", //optional, default is "/cfs/files" path within app container
//    maxTries: 1 //optional, default 5
//});
//
//Images = new FS.Collection("images", {
//    stores: [imageStore]
//});


var imageStore = new FS.Store.GridFS("images");

Images = new FS.Collection("images", {
    stores: [imageStore]
});

Images.deny({
    insert: function(){
        return false;
    },
    update: function(){
        return false;
    },
    remove: function(){
        return false;
    },
    download: function(){
        return false;
    }
});

Images.allow({
    insert: function(){
        return true;
    },
    update: function(){
        return true;
    },
    remove: function(){
        return true;
    },
    download: function(){
        return true;
    }
});
