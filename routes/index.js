var express = require('express');
var router = express.Router();
var schedule=require('node-schedule')
var cron = require('node-cron');
var CronJob = require('cron').CronJob;

var parser = require('node-crontab')


var task = cron.schedule('*/30 * * * * *', function() {
  console.log('immediately started');
}, false);

task.start();




var k=cron.schedule('*/1 * * * *', function(){
  console.log('running a task every one minute');
});
k.start();


var t=cron.schedule('*/2 * * * *', function(){
  console.log('running a task every two minutes');
});
t.start();


var r=cron.schedule('*/59 * * * *', function(){
  console.log('running a task every one hour');
});
r.start();




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
