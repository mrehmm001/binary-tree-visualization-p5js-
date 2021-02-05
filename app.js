
//test data for assertions
//let arr = [10,2,34,56,-5,-7,3,5,12,11,67,86,32];
let arr=[]
let spacing;




/* Don't edit the stuff below 
------------------------------*/
function setup(){
    createCanvas(1000, 5000);
    background(190);

}


function draw(){
    background(190);
    translate(500,200);
    let root;
    arr.forEach(n=>{
        if(root==null) {
            root = new Node(n,0,0);
            root.level=1;
        }else{
            spacing=1;
            insert(root,n);//asserting test data to root
        }
    });
    outPutTree(root);//out puts the tree without animation
    





}



//node assertion function
function insert(root, data){
    var xOffset=290*0.9;
    var yOffset=180*0.9;
    if(root==null) return;
    if(data<root.data){
        if(root.left==null){
            let x=root.x-((root.x-(root.x-xOffset/root.level))/root.level);
            let y=root.y-((root.y-(root.y+yOffset*root.level))/root.level);
            let node = new Node(data,x,y);
            node.level=root.level+1;
            root.left=node;
            return;
        }else{
            return insert(root.left,data);
        }
    }else{
        if(root.right==null){
            let x=root.x-((root.x-(root.x+xOffset/root.level))/root.level);
            let y=root.y-((root.y-(root.y+yOffset*root.level))/root.level);
            let node = new Node(data,x,y);
            node.level=root.level+1;
            root.right=node;
            return;
        }else{
            return insert(root.right,data);
        }
    }
}


//node output function
function outPutTree(root){
    if(root!=null){
        if(root.left!=null){
            line(root.x,root.y,root.left.x,root.left.y);
        }
        if(root.right!=null){
            line(root.x,root.y,root.right.x,root.right.y);
        }        
        fill("white");
        circle(root.x , root.y, 50,50);
        textSize(20);
        fill("black");
        textAlign(CENTER, CENTER);
        text(root.data, root.x , root.y );
        outPutTree(root.left);
        outPutTree(root.right);

      


    }
    

}




function insertNode(){
    let value=parseInt(document.querySelector("#insert").value);
    if(!Number.isNaN(value)){
        arr.push(value);
    }
}



