/**
 * 
 */
app.factory('NotificationService',function($http){
	var notificationService={}
	var BASE_URL="http://localhost:8081/Middleware"
		notificationService.getNotificationsNotViewed=function()
		{
		return $http.get(BASE_URL+"/getnotifications")
	        }
	notificationService.getNotification=function(id){
		return $http.get(BASE_URL+"/getnotification/"+id)
	       }
	notificationService.updateNotification=function(id){
		return $http.put(BASE_URL+"/updatenotification/"+id)
	       }
	return notificationService;
})