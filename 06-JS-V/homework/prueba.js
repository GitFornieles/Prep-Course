function reverse(string){
    this.rev="";
    for(let i=string.length-1;i>=0;i--){
        this.rev=this.rev+string[i];}
    return this.rev;
}

console.log(reverse("jajaja"));