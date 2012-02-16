$(document).ready(function(){
	$('#json').bind('click', function(){
		$('#browse').empty();
	$.ajax({
		"url":"_view/techteam",
		"dataType":"json",
		"success": function(data){
			$.each(data.rows, function(index,tech){
				var fname=tech.value.fname;
				var lname=tech.value.lname;
				var email=tech.value.email;
				var tel=tech.value.email;
				var sex=tech.value.sex;
				var min=tech.value.ministry;
				var partner=tech.value.memtype;
				var newDiv = document.createElement("div");

				var newh3 = document.createElement("h3");
				
				var setdiv = newDiv.setAttribute("data-role", "fieldcontain");
				$('<h3 />', {
					text : fname +" "+ lname
				}).appendTo(newDiv);
				var setdiv = newDiv.setAttribute("data-role", "fieldcontain");

				$('<p />', {
					text : 'Email: ' + email
				}).appendTo(newDiv);

				$('<p />', {
					text : 'Phone: ' + tel
				}).appendTo(newDiv);

				$('<p />', {
					text : 'Sex: ' + sex
				}).appendTo(newDiv);
				
				$('<p />', {
					text : 'Axis Partner?: ' + partner
				}).appendTo(newDiv);

				$('<p />', {
					text : 'Ministry: ' + min
				}).appendTo(newDiv);
						
			});
		}
		
	});
	
});
	return false;
});