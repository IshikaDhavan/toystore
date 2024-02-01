AFRAME.registerComponent("marker-handler",{
    init:async function(){
        this.el.addEventListener("markerFound",(e) => {
            this.handleMarkerFound()
        })
        this.el.addEventListener("markerLost",(e) => {
            this.handleMarkerLost()
        })
    } ,
    handleMarkerFound:function(){
        var buttondiv = document.getElementById("button-div")
        buttondiv.style.display = flex;

        var ratingbutton = document.getElementById("ratingbutton")
        var orderbutton = document.getElementById("orderbutton")

        ratingbutton.addEventListener("click",(e) => {
            swal({
                icon: "warning",
                title: "Rate Toy",
                text: "Work in progress..."
            })
        })
        orderbutton.addEventListener("click",(e) => {
            swal({
                icon: "https://i.imgur.com/4NZ6uLY.jpg",
                title: "Thanks for ordering",
                text: "Order will be delivered soon"
            })
        })
        
    },
    handleMarkerLost:function(){
        var buttondiv = document.getElementById("button-div")
        buttondiv.style.display = none;
    }
})