FlowRouter.route('/', {
    action: function () {
            BlazeLayout.render("layout1", {top: "header", main: "pagefront"});
    }
    //action: function() {
    //    BlazeLayout.render("layout1", {top: "header", main: "page-front"});
    //}
});

FlowRouter.route('/', {
    action: function () {
        return {status: 'success', data: {message: 'Article removed'}};
    }

});
