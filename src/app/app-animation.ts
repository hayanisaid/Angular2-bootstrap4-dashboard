

/*
* @animations's functions
*
* @you can costumize and use each animation just by using [@nameOfTrigger] in HTML Element
* 
* @By @SaidHayani @allRight resrved
*/


import {Component,
	   trigger,
        animate,
        transition,
        state,
        keyframes,
        style  
                   


} from "@angular/core";

/*
*
*
* moveIn animate function
*
*/
export function moveIn(){
 return trigger("toggle",[
    state('off',style({display:"none"})),
    state('on',style({display:"block"})),
    transition("off=>on",[style({transform:"translateX(100%)",opacity:0}), animate(".1s ease-in-out",style({opacity:0,transform:"translateX(-100px)"}))]),
    transition("on=>off",[style({transform:"translateX(-100%)",opacity:1}),animate(".1s ease-in-out",style({opacity:1,transform:"translateX(0)"}))]),

    transition("void => *",[

    animate(500,keyframes([
    style({opacity:0.5  , transform:"translateX(100px)"   ,offset:0}),
    style({opacity:1, transform:"translateX(0px)",offset:0.7})


    ]))
    ]),
    transition("*=>void",[

    animate(500,keyframes([
    style({opacity:0.5  , transform:"translateX(0)"   ,offset:0}),
    style({opacity:1, transform:"translateX(300px)",offset:0.7})


        ]))
            ])


  	])


}

/*
*
*
* moveInLeft animate function
*
*/
export function moveInLeft(){
    return trigger("moveInLeft",[
        transition("void => *",[animate(500,keyframes([style({opacity:0.5  , transform:"translateX(100px)"   ,offset:0}),
                                                       style({opacity:1, transform:"translateX(0px)",offset:0.7})
        ]))
        ])

    ])
}


/*
*
*
* moveInDown animate function
*
*/

export function moveInDown(){
   return trigger('moveInDown',[

     transition('void => *',[animate(500,keyframes([style({opacity:0.5,transform:"translateY(200px)",offset:0}),
                                                 style({opacity:1,transform:"translateY(0px)",offset:0.7})]))])
     ])
}


/*
*
*
* moveInUp animate function
*
*/
export function moveInUp(){
   return trigger('moveInUp',[

     transition('void => *',[animate(1000,keyframes([style({opacity:0.5,transform:"translateY(-500px)",offset:0}),
                                                 style({opacity:1,transform:"translateY(0px)",offset:0.7})]))])
     ])
}

/*
*
*
* fadeIn animate function
*
*/

export function fadeIn(){
   return trigger("fadeIn",[
       state("off",style({display:"none"})),
       state("on",style({display:"block"})),
       transition("off=>on",[animate(200,keyframes([style({opacity:0.5,transform:"translateX(500px)",offset:0}),
                                                    style({opacity:1,transform:"translateX(0)",offset:0.7})]))]),

       transition("on=>off",[animate(500,keyframes([style({opacity:1,transform:"translateX(0)",offset:0}),
                                                    style({opacity:0,transform:"translateX(500px)",offset:0.7})]))])
     ])
}


/*
*
*
* moveInRight animate function
*
*/

export function moveInRight(){
  return trigger("moveInRight",[

    transition('void=>*',[animate(200,keyframes([ style({transform:"translateX(508px)"}),
                                                      style({transform:"translateX(0px)"})
                                                       ]))]),

    transition('*=>void',[animate(200,keyframes([ style({transform:"translateX(0)",offset:0.1}),
                                                      style({transform:"translateX(300px)",offset:1}),
                                                      ]))])
    ])
}


/*
*
*
* Top notification function
*
*/

export function notifyTop(){
  return trigger("notifyTop",[

    transition('void=>*',[animate(200,keyframes([ style({transform:"translateY(-154px)"}),
                                                      style({transform:"translateX(0px)"})
                                                       ]))]),

    transition('*=>void',[animate(200,keyframes([ style({transform:"translateX(0)"}),
                                                      style({transform:"translateY(-154px)"}),
                                                      ]))])
    ])
}

/*
*
*
* Left Notififcation function
*
*/
export function notifyLeft(){
  return trigger("notifyLeft",[

    transition('void=>*',[animate(200,keyframes([ style({transform:"translateX(-381px)"}),
                                                      style({transform:"translateX(0px)"})
                                                       ]))]),

    transition('*=>void',[animate(200,keyframes([ style({transform:"translateX(0)"}),
                                                      style({transform:"translateX(-381px)"}),
                                                      ]))])
    ])
}

/*
*
*
* Bottom Notififcation function
*
*/

export function notifyBottom(){
  return trigger("notifyBottom",[

    transition('void=>*',[animate(200,keyframes([ style({transform:"translateY(300px)"}),
                                                      style({transform:"translateX(0px)"})
                                                       ]))]),

    transition('*=>void',[animate(200,keyframes([ style({transform:"translateX(0)"}),
                                                      style({transform:"translateY(300px)"}),
                                                      ]))])


  
    ])
}