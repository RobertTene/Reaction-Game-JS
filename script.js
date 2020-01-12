
            var start = new Date().getTime();

            console.log(start);

            function makeShapeAppear(){

                document.getElementById("shape").style.display="block";

                document.getElementById("shape").style.top= Math.random() * 400 + 'px';

                document.getElementById("shape").style.left= Math.random() * 600+ 'px';

                randomShape();  

                start = new Date().getTime();
            }

            function randomShape(){
                var determineShape = Math.random() * 100;
                console.log(determineShape);
                if(determineShape > 50){

                    document.getElementById("shape").style.borderRadius = "0%";

                } else{
                    document.getElementById("shape").style.borderRadius = "50%";

                }

                var randomR = Math.random() * 250;
                
                var randomG = Math.random() * 250;

                var randomB  = Math.random() * 250;

                document.getElementById("shape").style.backgroundColor = 'rgb(' + randomR + ',' + randomG + ',' + randomB + ')';

                var height = Math.random() * 450 + 35;

                document.getElementById("shape").style.height = height + 'px';
                
                document.getElementById("shape").style.width = height + 'px';


            }

            function appearAfterDelay(){

                setTimeout(makeShapeAppear,Math.random() * 2000);

            }

            appearAfterDelay();


            document.getElementById("shape").onclick = function(){

                document.getElementById("shape").style.display = "none";

                var end = new Date().getTime();

                var timeTaken = (end - start) / 1000;

                document.getElementById("timeTaken").innerHTML = timeTaken + 's';


                appearAfterDelay();
            }
            