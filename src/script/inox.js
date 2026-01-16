function BookClick(){
    document.getElementById("btnContainer").style.display = "none";
    document.getElementById("summaryContainer").style.display = "block";

    document.getElementById("lblMovie").style.display = "block";
    document.getElementById("lblDate").style.display = "block";
    document.getElementById("lblTime").style.display = "block";
    document.getElementById("lblCinema").style.display = "block";

    let movieName = document.getElementById("lstMovies").value;
    let date = document.getElementById("lstDate").value;
    let time = document.getElementById("lstTiming").value;
    let cinema = document.getElementById("lstCinema").value;

    // populate summary text
    document.getElementById("lblMovie").textContent = movieName || "";
    document.getElementById("lblDate").textContent = date || "";
    document.getElementById("lblTime").textContent = time || "";
    document.getElementById("lblCinema").textContent = cinema || "";

    let poster = document.getElementById("imgPoster");
    if (movieName && movieName.toLowerCase() == "kingdom"){
        poster.src = "C:\Users\yaswa\OneDrive\Desktop\JavaScript\public\images\Mrunal_Thakur.jpg"
    } else { 
        poster.src = "C:\Users\yaswa\OneDrive\Desktop\JavaScript\public\images\womenfashion.jpg";
    }   
}

function ModifyClick(){
    document.getElementById("lblTitle").textContent = "Modify Booking";
    document.getElementById("btnBook").textContent = "Save";
    document.getElementById("btnBook").className = "btn btn-success";
}
