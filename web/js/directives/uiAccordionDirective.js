angular.module("listaTelefonica").directive("uiAccordions",function(){
    return {
        controller:function($scope,$element,$attrs){
            var accordions = [];
            this.registerAccordion = function(accordion){
                accordions.push(accordion);
            };

            this.closeAll = function(){
                accordions.map(function(accordion){
                    accordion.isOpened = false;
                });
            };

        }
    }
});


angular.module("listaTelefonica").directive("uiAccordion",function(){
    return {
        templateUrl:"shared/uiAccordion.html",
        transclude:true,
        scope:{
            title:'@'
        },
        require:"^uiAccordions",
        link:function(scope,element,attr,ctrl){
            ctrl.registerAccordion(scope);
            scope.open = function(){
                ctrl.closeAll();
                scope.isOpened = true;
            }
        }
    }
});
