console.log("yu")
var n = new Array();
n[0]= "Yaakov";
n[1]="jerry";
n[2]="tom";
n[3]="Chris";
n[4]="matt";
n[5]="Robert";
n[6]="james";
n[7]="jimmy";
n[8]="Jacob";
n[9]="david";

for(var i=0;i<n.length ; i++){
    if(n[i].charAt(0)==="J" || n[i].charAt(0)=="j")
    {console.log("Goodbye"+" "+n[i]);}
    else
    {console.log("Hello"+" "+n[i]);}
};