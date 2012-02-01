Components.utils.import("resource://gre/modules/Services.jsm");  
Components.utils.import("resource://gre/modules/FileUtils.jsm");  

//NOT_FOR_USE//PLAYGROUND//
//usefull info : https://developer.mozilla.org/en/Storage
var CookieSaver = {

let file = FileUtils.getFile("ProfD", ["cookies.sqlite"]);  
let mDBConn = Services.storage.openDatabase(file);
mDBConn.executeSimpleSQL("CREATE TEMP TABLE table_name (column_name INTEGER)");
var statement = mDBConn.createStatement("SELECT * FROM table_name WHERE column_name = :parameter");  
var statement2 = mDBConn.createStatement("SELECT * FROM table_name WHERE id = :row_id");  
statement2.params.row_id = 1234;  

statement2.executeAsync({  
  handleResult: function(aResultSet) {  
    for (let row = aResultSet.getNextRow();  
         row;  
         row = aResultSet.getNextRow()) {  
  
      let value = row.getResultByName("column_name");  
    }  
  },  
  
  handleError: function(aError) {  
    print("Error: " + aError.message);  
  },  
  
  handleCompletion: function(aReason) {  
    if (aReason != Components.interfaces.mozIStorageStatementCallback.REASON_FINISHED)  
      print("Query canceled or aborted!");  
  }  
});

}
