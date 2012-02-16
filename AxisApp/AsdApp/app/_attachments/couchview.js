$(document).ready(function(){
	$.ajax({
		"url":"_view/techteam",
		"dataType":"json",
		"success": function(data){
			$.each(data.rows, function(index,tech){
				
			});
		}
		
	});
	
});