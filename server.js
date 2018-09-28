const express = require('express');
var path = require('path')
const app = express();
// Folder to server custom js files
app.use('/public', express.static(path.join(__dirname, '/public')));
//Server setup
app.listen(process.env.PORT || 3000,function() {
  console.log('listening on 3000')
});
app.get('/',function(req,res){
  res.sendFile(__dirname + '/index.html')
})

