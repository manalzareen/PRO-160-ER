    AFRAME.registerComponent("tour", {
        schema: {
        state: { type: "string", default: "places-list" },
        selectedCard: { type: "string", default: "#card1" },
        },
    init: function () {
        this.placesContainer = this.el;
        this.createPlaces();
    },
    hideEl: function (elList) {
        elList.map(el => {
          el.setAttribute("visible", false);
        });
      },
      showView: function () {
        const {selectedCard}=this.data;
        //console.log( selectedCard)
        const skyel = document.querySelector("#main-container")
        skyel.setAttribute("material", {
          src: `./assets/360_images/${selectedCard}/place-0.jpg`,
          color: "white"
        });
      },
    
    
    createPlaces: function () {
        const details = {
        hall:{
            position:{x:20,y:-4.5,z:-5.5},
            rotation:{x:0,y:-90,z:0},
            src:"./assets/house/living_room.jpg",
            title:"living-Room",
            id:"livingRoom"       
            },
        Kitchen:{
         position:{x:4.6,y:-5.5,z:25},
        rotation:{x:180,y:0,z:0},
         src:"./assets/house/kitchen.webp",
         title:"Kitchen",
         id:"Kitchen"
                        },
                        bedroom:{
                            position:{x:-9,y:34,z:-100},
                           rotation:{x:0,y:0,z:0},
                            src:"./assets/house/bedroom.jfif",
                            title:"bedroom",
                            id:"bedroom"
                                          },    
        }
        for (var key in details){
            const item = details[key]
            const thumbNail=this.createThumbNail(item)
            const title = this.createTitleEl(item)
            thumbNail.appendChild(title)
            this.placesContainer.appendChild(thumbNail)

        }
    },
    createThumbNail: function (item) {
        const entityEl = document.createElement("a-entity");
        const id =`place-${item.id}`
        entityEl.setAttribute("visible", true);
        entityEl.setAttribute("id", id);
        entityEl.setAttribute("geometry", {
          primitive: "circle",
          radius: 3,
        });
        entityEl.setAttribute("position",item.position);
        entityEl.setAttribute("rotation",item.rotation);
        entityEl.setAttribute("material",{src:item.src,opacity:0.6})
    entityEl.setAttribute("curser-listener",{})
        return entityEl;
      },
      createTitleEl: function ( item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("text", {
      font: "exo2bold",
      align: "center",
      width: 70,
      color: "#e65100",
      value: item.title,
    });
   
    entityEl.setAttribute("visible", true);
    
    return entityEl;
  },

        
        });