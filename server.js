/**
 * Created with IntelliJ IDEA.
 * User: coupang
 * Date: 11/27/13
 * Time: 1:23
 * To change this template use File | Settings | File Templates.
 */
var connect = require('connect');
connect.createServer(connect.static(__dirname)).listen(8000);