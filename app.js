
//test data for assertions
let arr = [10,2,34,56,3,12];
let animation=false; // toggle animation here





/* Don't edit the stuff below 
------------------------------*/
function setup(){
    createCanvas(innerWidth, innerHeight);
    background(190);

}

function draw(){
    if(!animation){
        background(190);
    }
    translate(900,200);
    let root = new Node(5,0,0);
    arr.forEach(n=>{
        insert(root,n);//asserting test data to root
    });

    if(!animation){
        outPutTree(root);//out puts the tree without animation
    }else{
        outPutTreeAnimation(root);//out puts the tree with animation
    }
    





}



//node assertion function
function insert(root, data){
    if(root==null) return;
    if(data<root.data){
        if(root.left==null){
            let node = new Node(data,root.x-80,root.y+50);
            root.left=node;
            return;
        }else{
            return insert(root.left,data);
        }
    }else{
        if(root.right==null){
            let node = new Node(data,root.x+80,root.y+50);
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



//node output function with animation
function outPutTreeAnimation(root){
    if(root!=null){
        setTimeout(()=>{
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
            outPutTreeAnimation(root.left);
            outPutTreeAnimation(root.right);

        },3000)



    }

}




