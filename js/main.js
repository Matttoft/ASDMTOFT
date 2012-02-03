/**
 * Project 1
 Matt Toft 
 ASD 1202

 */
	$('#submit').live('click',function saveItems(id){
	var d = new Date();
    var key= (d.getTime());	
	var fname = $('#fname').val();
    var lname = $('#lname').val();
    var email = $('#email').val();
    var tel = $('#tel').val();
    var radio = $('#radio').val();
    var attending = $('#attending').val();
    var partner = $('#partner:checked').val();
	if(partner == "on"){ 
		var partner = "Yes" 
	}else{
		var partner = "No" 
		}
	
	var dropdown = $('#dropdown').val();
	var allItems = [
		fname,
		lname,
		email,
		tel,
		radio,
		attending,
		partner,
		dropdown
	];
	localStorage.setItem(key, allItems);
	location.reload();
	alert("Thank You. A ministry leader will contact you soon.");
	$.mobile.changePage( 'additem.html', {reloadPage: true},{ allowSamePageTranstion: true},{ transition: 'none'})
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
    
function getItems(){
	var getListdiv = $('#display')[0];
	
	for(var i=0, len = localStorage.length; i < len; i++){
		var key = localStorage.key(i);
		var value = localStorage.getItem(key);
		value = value.split(',');
		var fname = value[0];
		var lname = value[1];
		var email = value[2];
		var tel = value[3];
		var radio = value[4];
		var attending = value[5];
		var partner = value[6];
		var dropdown = value[7];
		var newDiv = document.createElement("div"); 

		var newh3 = document.createElement("h3");
		var fnameTxt = document.createTextNode(value[0]+" "+ value[1]);
		newh3.appendChild(fnameTxt);
		newDiv.appendChild(newh3);
		getListdiv.appendChild(newDiv);
		var setdiv = newDiv.setAttribute("data-role", "fieldcontain");
			
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
		var radioTxt = document.createTextNode("Sex: " + value[4]);
		newP.appendChild(radioTxt);
		newDiv.appendChild(newP);
		getListdiv.appendChild(newDiv);
		
		var newP = document.createElement("p");
		var attendingTxt = document.createTextNode("Attending(Months): " + value[5]);
		newP.appendChild(attendingTxt);
		newDiv.appendChild(newP);
		getListdiv.appendChild(newDiv);
		
		var newP = document.createElement("p");
		var partnerTxt = document.createTextNode("Axis Partner?: " + value[6]);
		newP.appendChild(partnerTxt);
		newDiv.appendChild(newP);
		getListdiv.appendChild(newDiv);
		
		var newP = document.createElement("p");
		var dropdownTxt = document.createTextNode("Ministry: " + value[7]);
		newP.appendChild(dropdownTxt);
		newDiv.appendChild(newP);
		getListdiv.appendChild(newDiv);
		
		
		var minImage = "logo.gif"; 
			if(dropdown == "Impressions"){ minImage = "Impressions.gif"; }
			if(dropdown == "Usher"){ minImage = "Usher.gif"; }
			if(dropdown == "Worship"){ minImage = "Worship.gif"; }
			if(dropdown == "Tech"){ minImage = "Tech.gif"; }
			if(dropdown == "Nursery"){ minImage = "Nursery.gif"; }
		
	
		var newP = document.createElement("p");
		var newImg = document.createElement("IMG");
		newImg.setAttribute("src", "img/" + minImage);
		newP.appendChild(newImg);
		newDiv.appendChild(newP);
		
	
		var newP = document.createElement("p");
		var deleteLink = document.createElement("a");
		var setHref = deleteLink.setAttribute("href", "#");
		var setOnclick = deleteLink.setAttribute("onclick", "deleteItem(" + key + ");");
		var deleteText = document.createTextNode("Delete item");
		deleteLink.appendChild(deleteText);
		newP.appendChild(deleteLink);
		newDiv.appendChild(newP);
		getListdiv.appendChild(newDiv);
		
		
		var newP = document.createElement("p");
		var editLink = document.createElement("a");
		var setHref = editLink.setAttribute("href", "#");
		var setOnclick = editLink.setAttribute("onclick", "editItem(" + key + ");");
		var editText = document.createTextNode("Edit item");
		editLink.appendChild(editText);
		newP.appendChild(editLink);
		newDiv.appendChild(newP);
		}
		
		if(localStorage.getItem('apptitle')){
			var clearLink = $('#clear').css('display', 'block'); 
		}else{
			var fname = "";
			var lname = "";
			var email = "";
			var tel = $('#tel').val(tel);
			var radio = $('#radio').val(radio);
			var partner = $('#partner').val(partner);
		}
}

function editItem(id){

		var itemId = id;
		var value = localStorage.getItem(itemId);
		value = value.split(',');
		var fname = value[0];
		var lname = value[1];
		var email = value[2];
		var tel = value[3];
		var radio = value[4];
		var attending = value[5];
		var partner = value[6];
		var dropdown = value[7];
	
	$('#fname').val(fname);
	$('#lname').val(lname);
	$('#email').val(email);
	$('#tel').val(tel);
	$('#radio').val(radio);
	$('#attending').val(attending);
	if(partner == "Yes"){
		$('#partner').attr('checked', 'checked');
	$('#dropdown').val(dropdown);
	var editButton = $('#edit-item-button').css('display', 'block');
	var subresButtons = $('#submit-reset-buttons').css('display', 'none');
	var itemList = $('#list').css('display', 'none');
	
	
	function clickEdit(){
		var fname = $('#fname').val();
		var lname = $('#lanme').val();
		var email = $('#email').val();
		var tel = $('#tel').val();
		var radio = $('#radio').val();
		var attending = $('#attending').val();
		if(partner == "Yes"){ 
			var partner = "Yes" 
		}else{
			var partner = "No" 
			}
			var dropdown = $('#dropdown').val();	
		var allItems = [
			fname,
			lname,
			email,
			tel,
			radio,
			attending,
			partner,
			dropdown
			];
		if(dropdown != "" && dropdown != "Select a Ministry" && release != ""){
			localStorage.setItem(itemId, allItems);
			alert("Record Updated!");
			location.reload();
		}else{
			alert("These fields are required.");
		}
	};
	
	$('#edit-item').bind('click', clickEdit);
}
};




		$( "#reset" ).live( "click", function(e) {
		e.preventDefault();
	 	clearData();
	});
	
	
	  var display = $("#display")
      .live("click", function (){
      	$('#minform').empty();      
         getItems([], "display");
         console.log("display link was clicked");
         
      });
      
      function deleteItem(id){
	var ask = confirm("Are you sure?");
	if(ask){
		localStorage.removeItem(id);
		window.location.reload();
	}else{
		alert("Item not removed.");
	}
}






