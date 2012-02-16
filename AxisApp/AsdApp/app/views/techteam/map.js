function(doc) {
  if (doc._id.substr(0,5)==='tech:') {
    emit(doc._id);
  }
};