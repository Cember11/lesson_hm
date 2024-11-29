//  $func  就地编辑
//  @params{ id，parent  父节点，value默认值 }
//  @author ysw
//  @date 2023-06-12
function EditInPlace(id,parent,value){
    this.id = id;//跨函数共享属性
    this.parent=parent||document.body;
    this.value=value||'这家伙很懒，什么都没有留下';
    this.createElement(this,id);

}
EditInPlace.prototype.createElement=function(id){
console.log(id)
//<div id="ep1"></div>
   this.containerElement=document.createElement('div'); 
   this.containerElement.id=id;
   this.parent.appendChild(this.containerElement);
   this.staticElement=document.createElement('span');
   this.staticElement.innerHTML=this.value;
   this.containerElement.appendChild(this.staticElement);
}