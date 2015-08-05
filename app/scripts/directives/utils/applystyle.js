/**
 * Created by davide on 04/02/2015.
 */

estars.directive('applyStyle', function(){
    return{
        restriction:'A',
        link: function(scope, elem, attr){
//            console.log("my scope is: " , scope)
//            console.log("my element is: " , elem)
        }
    }
})