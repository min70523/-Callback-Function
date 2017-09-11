//回调函数
// filter(arr)  过滤
// 数组里面偶数的数组元素  
// arr[i]%2==0;    var newarr[newarr.length]=arr[i]
arr=[20,6,5,25,98,654,23,770];
console.log(filter(arr));
function filter(arr){
	var newarr=[];
	for(var i=0;i<=arr.length;i++){
		if(arr[i]%2==0){
			newarr[newarr.length]=arr[i];
		}
	}
	return newarr;    //返回的是newarr的值 不是newarr
}
function aa(num1,num2){
	return num1*2-num2;
}
function bb(num1,num2){
	return num1*2+num2;
}
function cc(num1,num2){
	return num1*2/num2;
}
console.log(aa(2,3));
console.log(bb(2,3));
console.log(cc(2,3));
function math(num1,num2,d){
	return d(num1,num2);
}
console.log(math(3,3,aa));

//映射 map   实现任意数组的任意关系+ - * /
arr1=[1,3,6,5,6,6,5];
console.log(map(arr1,function(a){
	return a+2;
}))
function map(arr,fn){
	var newarr=[];
	for(i=0;i<arr.length;i++){
		newarr[newarr.length]=fn(arr[i]);
	}
	return newarr;
}	    
//ii

arr1=[1,3,6,5,6,6,6];
console.log(map(arr1,function(a){
	return a>3;
}))
function map(arr,fn){
	var newarr=[];
	for(i=0;i<arr.length;i++){
		if(fn(arr[i])){
			newarr[newarr.length]=arr[i];
		}	    		
	}
	return newarr;
}	    