var hostname = "http://koperasi/";
$.ajax({
	url:hostname+"shop/checklogin",
	type:"post"
})
.done(function(res){
	console.log("RES check ligin",res);
	if(res==='haslogin'){
		console.log("return true");
		$("#btnlogout").show();
		$("#btnlogin").hide();					
	};
	if(res==='hasnotlogin'){
		$("#btnlogout").hide();
		$("#btnlogin").show();
		console.log("return false");
	}
})
.fail(function(err){
	console.log("Err",err);
});

$("#modallogin").click(function(){
	console.log("login clicked");
	
	$.ajax({
		url:hostname+"shop/signin",
		data:{email:$("#loginemail").val(),password:$("#loginpassword").val()},
		type:"post"
	})
	.done(function(res){
		console.log("Res login",res);
		if(res==="Cannot Login"){
			console.log("Password / email salah");
		}else{
			$("#btnlogout").show();
			$("#btnlogin").hide();
		}
	})
	.fail(function(err){
		console.log("Err",err);
	});
});
