/**
 * Project 1
 Matt Toft 
 ASD 1202

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
		
		localStorage.setItem(id, JSON.stringify(item));
		alert("Data submitted, a ministry leader will contact you soon.");
		$.mobile.changePage( '#main', {reloadPage: true},{ allowSamePageTranstion: true},{ transition: 'none'});

	});
	
	    function clearData() {
        if (localStorage.length === 0) {
            alert("There is nothing in Storage");
        } else {
            localStorage.clear();
            alert("Data has been cleared");
            return false;
        }
    }
    
function getData(){
	var getListdiv = $('#list')[0];
	
	for(var i=0, len = localStorage.length; i < len; i++){
		var key = localStorage.key(i);
		var value = localStorage.getItem(key);
		value = value.split(',');
		var fname = value[0];
		var lname = value[1];
		var email = value[2];
		var tel = value[3];
		var sex = value[4];
		var attending = value[5];
		var memtype = value[6];
		var group = value[7];
		var newDiv = document.createElement("div"); 

		var newh3 = document.createElement("h3");
		var fnameTxt = document.createTextNode(value[1]);
		newh3.appendChild(fnameTxt);
		newDiv.appendChild(newh3);
		getListdiv.appendChild(newDiv);
		var setdiv = newDiv.setAttribute("data-role", "fieldcontain");
	
		var newP = document.createElement("p");
		var lnameTxt = document.createTextNode("Last Name: " + value[0]);
		newP.appendChild(lnameTxt);
		newDiv.appendChild(newP);
		getListdiv.appendChild(newDiv);
		
		var newP = document.createElement("p");
		var emailTxt = document.createTextNode("Email: " + value[2]);
		newP.appendChild(emailTxt);
		newDiv.appendChild(newP);
		getListdiv.appendChild(newDiv);
		
		var newP = document.createElement("p");
		var telTxt = document.createTextNode("Phone: " + value[3]);
		newP.appendChild(telTxt);
		newDiv.appendChild(newP);
		getListdiv.appendChild(newDiv);
		
		var newP = document.createElement("p");
		var emailTxt = document.createTextNode("Email: " + value[4]);
		newP.appendChild(sexTxt);
		newDiv.appendChild(newP);
		getListdiv.appendChild(newDiv);
		
		var newP = document.createElement("p");
		var attendingTxt = document.createTextNode("Attending(Months): " + value[5]);
		newP.appendChild(attendingTxt);
		newDiv.appendChild(newP);
		getListdiv.appendChild(newDiv);
		
		var newP = document.createElement("p");
		var memtypeTxt = document.createTextNode(value[6]);
		newP.appendChild(memtypeTxt);
		newDiv.appendChild(newP);
		getListdiv.appendChild(newDiv);
		
		var newP = document.createElement("p");
		var groupTxt = document.createTextNode("Ministry: " + value[7]);
		newP.appendChild(groupTxt);
		newDiv.appendChild(newP);
		getListdiv.appendChild(newDiv);
		
		
		var minImage = "logo.gif"; 
			if(group == "Impressions"){ minImage = "Impressions.jpg"; }
			if(group == "Usher"){ minImage = "Usher.jpg"; }
			if(group == "Worship"){ minImage = "Worship.jpg"; }
			if(group == "Tech"){ minImage = "Tech.jpg"; }
			if(group == "Nursery"){ minImage = "Nursery.jpg"; }
		
		//add image
		var newP = document.createElement("p");
		var newImg = document.createElement("IMG");
		newImg.setAttribute("src", "img/" + minImage);
		newP.appendChild(newImg);
		newDiv.appendChild(newP);
		
		//delete single item link
		var newP = document.createElement("p");
		var deleteLink = document.createElement("a");
		var setHref = deleteLink.setAttribute("href", "#");
		var setOnclick = deleteLink.setAttribute("onclick", "deleteItem(" + key + ");");
		var deleteText = document.createTextNode("Delete item");
		deleteLink.appendChild(deleteText);
		newP.appendChild(deleteLink);
		newDiv.appendChild(newP);
		getListdiv.appendChild(newDiv);
		
		//edit single item link
		var newP = document.createElement("p");
		var editLink = document.createElement("a");
		var setHref = editLink.setAttribute("href", "#");
		var setOnclick = editLink.setAttribute("onclick", "editItem(" + key + ");");
		var editText = document.createTextNode("Edit item");
		editLink.appendChild(editText);
		newP.appendChild(editLink);
		newDiv.appendChild(newP);
		//getListdiv.appendChild(newP);
		}
		
		if(localStorage.getItem('apptitle')){
			var clearLink = $('#clear').css('display', 'block'); 
		}else{
			var fname = "";
			var lname = "";
			var email = "";
			var tel = $('#tel').val(tel);
			var sex = $('#sex').val(sex);
			var memtype = $('#memtype').val(memtype);
		}
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
