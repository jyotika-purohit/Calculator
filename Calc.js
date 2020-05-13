var keys=document.getElementsByClassName("key");
var text=document.getElementById("text");
var digitsDict={}
var digits=document.getElementsByClassName("digit");

for (var i=0;i<digits.length;i++){
    digitsDict[i]=i;
    }

var operatorDict={ "+":"+","%":"%","-":"-","*":"*","/":"/"};


var str1=""
var str2=""
var operand="";
var result="";
var flag=0;
for (var i=0;i<keys.length;i++){
    keys[i].addEventListener("click",function(){
        var value=this.getAttribute("data-value");
        if (value in operatorDict && str1=="" && str2==""){
            text.innerText=0;
        }
        else if (value == "AC"){
            text.innerText="0";
            str1="";
            str2="";
            operand="";
            result="";
        }
        else if (value=="+/-"){
            if(flag==0)
                {
                if(str2==""){
                    temp=str1;
                    str1="-";
                    str1=str1+temp;
                    text.innerText=str1
                }
                else{
                    temp=str2;
                    str2="-";
                    str2=str2+temp;
                    text.innerText=str2
                }
                
                flag=1;
            }
            else{
                if(str2==""){
                    str1=str1.slice(1,)
                    text.innerText=str1
                }
                else{
                    str2=str2.slice(1,)
                    text.innerText=str2
                }
                flag=0;

            }
        }
        else if (value in digitsDict || value=="."){
            
            if(operand==""){
                str1=str1+value;
                text.innerText=str1;
            }
            else if (operand!="" && str1!=""){
                str2=str2+value;
                result=eval(str1+" "+operand+" "+str2)
                text.innerText=result;
                str1=result;
                str2="";
               
            }
            else{
                str2=str2+value;
                text.innerText=str2;
            }
            
        }
        else if(value in operatorDict){
            if(str2==""){
                text.innerText=str1;
                operand=value;
            }
            else{
                result=eval(str1+" "+operand+" "+str2)
                operand=value;
                text.innerText=result;
                str1=result;
                str2="";
                
               

            }
           
        }
        else if(value == "="){
            result=eval(str1+" "+operand+" "+str2)
            text.innerText=result;
            str1=result
            str2="";
            operand="";
            result="";
        } 


    });
}

