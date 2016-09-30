angular.module("listaTelefonica").directive("uiAlert",function(){
    return {
        templateUrl:"shared/uiAlert.html",
        replace:true,
        restrict:"E",
        scope:{
            title:"@"
        },
        transclude:true
    };
})
