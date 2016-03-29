$(document).ready(function() {
	//Org Open and close dropdown
	$("#nav-org").on('click', function(){
        if($("#nav-org").hasClass("open")) {
        	console.log("Org close dropdown")
            $("#nav-org-drop").addClass("hide");
            $("#nav-org").removeClass("open");

        }
        else {
        	console.log("Org open dropdown")
            $("#nav-org-drop").removeClass("hide");
            $("#nav-org").addClass("open");
            //Close Space Dropdown
            $("#nav-space-drop").addClass("hide");
            $("#nav-space").removeClass("open");
        }
    });

	//Click org dropdown option
	//hide dropdown
	//change text of nav-title to new org
	//set org nav-option to active
		//remove active from other nav-options
	//change page to #org-page
		//hide other pages

    //Space open and close dropdown
	$("#nav-space").on('click', function(){
        if($("#nav-space").hasClass("open")) {
        	console.log("Space close dropdown")
            $("#nav-space-drop").addClass("hide");
            $("#nav-space").removeClass("open");
        }
        else {
        	console.log("Space open dropdown")
            $("#nav-space-drop").removeClass("hide");
            $("#nav-space").addClass("open");
            //Close Org Dropdown
            $("#nav-org-drop").addClass("hide");
            $("#nav-org").removeClass("open");
        }
    });

    //Click space dropdown option
	//hide dropdown
	//change text of nav-title to new org
		//unhide nav-title
	//set space nav-option to active
		//remove active from other nav-options
	//change page to #space-page
		//hide other pages
});

