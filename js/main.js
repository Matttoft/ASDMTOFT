/**
 * Project 1
 Matt Toft 
 ASD 120

 */
$(document).ready(function(){
	
	var formLock = $(".lockup").length;
	
	$('#submit').live('click',function(key) {
		var xkey=this.key;
		var id='';
		
		if(!xkey) {
			var id = Math.floor(Math.random() * 100000001);
		} else {
			id = xkey;
		}

		var item = {};
		item.fname = ["First Name:", $('#fname').val()];
		item.lname = ["Last Name:", $('#lname').val()];
		item.email = ["Email:", $('#email').val()];
		item.tel = ["Telephone #:", $('#tel').val()];
		item.sex =["Sex:",$('input:radio[name=sex]:checked').val()];
		item.group = ["Ministry:", $('#dropdown').val()];
		item.attending = ["Attending Months:", $('#attending').val()];
		item.memtype = ["Member Type:", $('#checkbox').val()];
		
		sessionStorage.setItem(id, JSON.stringify(item));
		alert("Data submitted, a ministry leader will contact you soon.");
		$.mobile.changePage( '#main', {reloadPage: true},{ allowSamePageTranstion: true},{ transition: 'none'});

	});
	
	    function clearData() {
        if (sessionStorage.length === 0) {
            alert("There is nothing in Storage");
        } else {
            sessionStorage.clear();
            alert("Data has been cleared");
            return false;
        }
    }
    
   
	function getData() {

       $('#pullDiv').append(
			'<li> First Name: ' + item.fname.toUpperCase()+'</li>' + 
			'<li> Last Name: '+item.lname.toUpperCase()+'</li>'+
			'<li>Email: ' + item.email + '</li>' +
			'<li>Phone: ' + item.tel + '</li>' +
			'<li>Sex: ' + item.sex + '</li>' +
			'<li>Ministry: ' + item.group + '</li>' + 
			'<li>Attending Months: ' + item.attending + '</li> ' +
			'<li>Partner?: ' + item.memtype +'</li>'
		);
	sessionStorage.getItem("id", JSON.stringify());
};
$('#pullDiv').listview('refresh');


   
    function makeItemLinks (key, editLinksDiv) {
        //add edit link
	var editLink = $("<a data-role='button'>").addClass("editLink").html("Edit").appendTo(editLinksDiv);
        
   
	//add delete item link
	var deleteLink = $("<a data-role='button'>").addClass("deleteLink").html("Delete").appendTo(editLinksDiv);
	deleteLink.key = key;
	
         editLink.key = key;
	deleteLink.on("click", delitem(key));
	editLink.on("click", edit(key));
    }

    function delitem () {
	var ask = confirm ("Are you sure? This can't be undone.");
	if (ask){
	    sessionStorage.removeItem(this.key);
            alert("Volunteer Deleted");
           

	}
	else{
	    alert("Volunteer was not deleted.");
	}
    }
    //Edit an individual item
    function edit (key) {
	//Get data from item in session storage
	var value = sessionStorage.getItem(key);
	var item = JSON.parse(value);

		$("#fname").val(item.fname[1]);
        $("#lname").val(item.lname[1]);
        $("#email").val(item.email[1]);
        $("#tel").val(item.tel[1]);
        $("#sex").val(item.sex[1]);
        $("#group").val(item.group[1]);
        $("#attending").val(item.attending[1]);
        $("#dangerous").val(item.dangerous[1]);
        if (item.memtype[1] === "Yes"){
	    $("#memtype").attr("checked", "checked");
	}
	


	saveEntry.unbind("click", storeData);
		var editSubmit = $(".editLink");
        editSubmit.val("Edit");
	    editSubmit.key = this.key;
        editSubmit.on("click", function () {
               validate();
               $.mobile.changePage("#additem.html");
         });

        
    }
	

	function getimage(catname, makesublist) {
		var imageli = document.createElement('li');
		makesublist.appendChild(imageli);
		var newimg = document.createElement('img');
		var setsrc = newimg.setAttribute('src', "img/" + catname + ".gif");
		imageli.appendChild(newimg);
	}
	
	    function lok() {
    
    	if ($(".lockup").length === 0){
    		$("[type='submit']").button('enable');
    	};	
    };  



	$("#fname").live("blur", function(){
		if (this.value === "") {
            $(this).css("border", "solid 1px red");
            $("#fnameErr").show();
		};
		if(this.value !== "") {
			$(this).css("border", "solid 1px black");
			$("#fnameErr").remove();
		};
		lok();         
	});

	$("#lname").live("blur", function(){
		if (this.value === "") {
            $(this).css("border", "solid 1px red");
            $("#lnameErr").show();
		};
		if(this.value !== "") {
			$(this).css("border", "solid 1px black");
			$("#lnameErr").remove();		
		};
		lok();
	});

	$("#dropdown").live("change", function(){
		if (this.value === "") {
            $("#groupErr").show();
		};
		if(this.value !== "Select Ministry") {
			$("#groupErr").remove();
		};
		lok();
		
		
	});
		$( "#reset" ).live( "click", function(e) {
		e.preventDefault();
	 	clearData();
	});
	
	
	  var display = $("#display")
      .live("click", function (){      
         getdata([], "pullDiv");
         console.log("display link was clicked");
         
      });




});
$("#minsignup").validate({
    submitHandler: function(form) {
        console.log("Call Action");
    }
});
