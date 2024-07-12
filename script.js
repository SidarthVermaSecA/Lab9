const dog1 = $('#img1')
const dog2 = $("#img2")
const cat1 = $("#img3")
const cat2 = $("#img4")
const car1 = $("#img5")
const building1 = $("#img6")
const currentSort = $("#option").click(function(){
    // console.log($(".card"));
    if(currentSort[0].value==0){
        $(".card").show()
    }
    if (currentSort[0].value==1){
        $(".card").hide()
        dog1.show()
        dog2.show()
    }
    if (currentSort[0].value==2){
        $(".card").hide()
        cat1.show()
        cat2.show()
    }
    if (currentSort[0].value==3){
        $(".card").hide()
        building1.show()
        car1.show()
    }
    console.log(currentSort[0].value);
})
