function(doc) {
  if (doc._id.substr(0,5)==='tech:') {
    emit(doc._id, {
    	"fname":doc.fname,
    	"lname":doc.lname,
    	"email":dpc.email,
    	"tel":doc.tel,
    	"sexval":doc.sexval,
    	"ministry":doc.ministry,
    	"memtype":doc.memtype
    });
  }
};