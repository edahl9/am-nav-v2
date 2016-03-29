$(document).ready(function() {
    //Org Open and close dropdown
    $("#nav-org").on('click', function() {
        if ($("#nav-org").hasClass("open")) {
            console.log("Org close dropdown")
            $("#nav-org-drop").addClass("hide");
            $("#nav-org").removeClass("open");

        } else {
            console.log("Org open dropdown")
            $("#nav-org-drop").removeClass("hide");
            $("#nav-org").addClass("open");
            //Close Space Dropdown
            $("#nav-space-drop").addClass("hide");
            $("#nav-space").removeClass("open");
            //Close App Dropdown
            $("#nav-app-drop").addClass("hide");
            $("#nav-app").removeClass("open");
        }
    });
    //Navigate to new org
    $("#nav-org-drop a").on('click', function() {
        //hide dropdown
        $("#nav-org-drop").addClass("hide");
        $("#nav-org").removeClass("open");
        //unhide nav-title and change text
        $("#nav-org .nav-title").removeClass("hide");
        orgName = event.currentTarget.innerText;
        $("#nav-org .nav-title").text(orgName);
        console.log("changed org name")
        //unselect other space and apps
        $("#nav-app .nav-title").addClass("hide");
        $("#nav-space .nav-title").addClass("hide");
        //set space nav-option to active and remove others
        $("#nav-org").addClass("active");
        $("#nav-space").removeClass("active");
        $("#nav-app").removeClass("active");
        //change page to #space-page
        $("#space-page").addClass("hide");
        $("#app-page").addClass("hide");
        $("#org-page").removeClass("hide");
        //open space options
        $("#nav-space-drop").removeClass("hide");
        $("#nav-space").addClass("open");
        $("#nav-app").addClass("disabled");
    });


    //Space open and close dropdown
    $("#nav-space").on('click', function() {
        if ($("#nav-space").hasClass("open")) {
            console.log("Space close dropdown")
            $("#nav-space-drop").addClass("hide");
            $("#nav-space").removeClass("open");
        } else {
            console.log("Space open dropdown")
            $("#nav-space-drop").removeClass("hide");
            $("#nav-space").addClass("open");
            //Close Org Dropdown
            $("#nav-org-drop").addClass("hide");
            $("#nav-org").removeClass("open");
            //Close App Dropdown
            $("#nav-app-drop").addClass("hide");
            $("#nav-app").removeClass("open");
        }
    });

    //Navigate to new space
    $("#nav-space-drop a").on('click', function(event) {
        console.log("Space has been selected")
            //hide dropdown
        $("#nav-space-drop").addClass("hide");
        $("#nav-space").removeClass("open");
        //unhide nav-title and change text
        $("#nav-space .nav-title").removeClass("hide");
        spaceName = event.currentTarget.innerText;
        $("#nav-space .nav-title").text(spaceName);
        console.log("changed space name")
        //unselect other apps
        $("#nav-app .nav-title").addClass("hide");
        //set space nav-option to active and remove others
        $("#nav-space").addClass("active");
        $("#nav-org").removeClass("active");
        $("#nav-app").removeClass("active");
        //change page to #space-page
        $("#org-page").addClass("hide");
        $("#app-page").addClass("hide");
        $("#space-page").removeClass("hide");
        //open app options
        $("#nav-app-drop").removeClass("hide");
        $("#nav-app").addClass("open");
        $("#nav-app").removeClass("disabled");
    });





    //App open and close dropdown

    //check if app is enabled
    $("#nav-app").on('click', function() {
        if ($("#nav-app").hasClass("disabled")) {
            console.log("App is disabled")
        } else {
            console.log("App is not disabled")

            if ($("#nav-app").hasClass("open")) {
                console.log("App close dropdown")
                $("#nav-app-drop").addClass("hide");
                $("#nav-app").removeClass("open");
            } else {
                console.log("App open dropdown")
                $("#nav-app-drop").removeClass("hide");
                $("#nav-app").addClass("open");
                //Close Org Dropdown
                $("#nav-org-drop").addClass("hide");
                $("#nav-org").removeClass("open");
                //Close Space Dropdown
                $("#nav-space-drop").addClass("hide");
                $("#nav-space").removeClass("open");
            }

        }
    });

    //Navigate to new app
    $("#nav-app-drop a").on('click', function() {
        //hide dropdown
        $("#nav-app-drop").addClass("hide");
        $("#nav-app").removeClass("open");
        //unhide nav-title and change text
        $("#nav-app .nav-title").removeClass("hide");
        appName = event.currentTarget.innerText;
        $("#nav-app .nav-title").text(appName);
        console.log("changed space name")
        //set space nav-option to active and remove others
        $("#nav-app").addClass("active");
        $("#nav-org").removeClass("active");
        $("#nav-space").removeClass("active");
        //change page to #space-page
        $("#org-page").addClass("hide");
        $("#space-page").addClass("hide");
        $("#app-page").removeClass("hide");

    });





});
