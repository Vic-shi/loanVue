function keyPress() {    
    var keyCode = event.keyCode;    
    if ((keyCode >= 48 && keyCode <= 57)){    
        event.returnValue = true;    
    }else{    
        event.returnValue = false;    
    }    
}  


var done = true;
function ajax_execute(url,data,callback){

    if(!done) return false;
    done = false;
    var loadding = layer.open({type: 2});
    $.post(url,data,function(result){
        done = true;
        layer.close(loadding);
        callback(result);
    },"json");
}
$('.js-bank-select').click(function(){
    $("input[name='bank_name']").val($(this).find('.bank-name').html());
    layer.close();
});
function showdialog(content){
	layer.open({content: content,skin: 'msg',time: 2});
}

function onlyNum() {
    if(!(event.keyCode==46)&&!(event.keyCode==8)&&!(event.keyCode==37)&&!(event.keyCode==39))
    if(!((event.keyCode>=48&&event.keyCode<=57)||(event.keyCode>=96&&event.keyCode<=105)))
    event.returnValue=false;
}