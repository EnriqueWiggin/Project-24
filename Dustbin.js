class dustbin
{
	constructor(x,y)
	{
		
		
	 this.x=x;
	 this.y=y;
	this.rightWallBody = Bodies.rectangle(260, 610, 20,100 , {isStatic:true} );
	World.add(world, this.rightWallBody);


	this.leftWallBody = Bodies.rectangle(391, 610, 20,100 , {isStatic:true} );
	World.add(world, this.leftWallBody)



	this.bottomBody = Bodies.rectangle(250, 640, 500,20 , {isStatic:true} );
	World.add(world, this.bottomBody);

	}
	display()
	{
			var posBottom=this.bottomBody.position;
			var posLeft=this.leftWallBody.position;
			var posRight=this.rightWallBody.position;

			

			push()
			rectMode(CENTER)
			//strokeWeight(4);
			rect(posLeft.x,posLeft.y,20,100);
			pop()

			push()
			rectMode(CENTER)
			//strokeWeight(4);
			rect(posRight.x,posRight.y,20,100);
			pop()

			push()
			//strokeWeight(4);
			rect(posBottom.x,posBottom.y,150,20);
			pop()
			
	}

}