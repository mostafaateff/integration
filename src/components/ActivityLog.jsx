import SmallVan from "../assets/svg/SmallVan.svg";
import ActivityLogBtns from "./ActivityLogBtns"



const ActivityLog = () =>  { 

return (
<>
<div>

<div className=" row justify-content-between align-items-center col-12 mt-4">
    <div className=" d-flex col-3 ms-3">
        <h3 className="fw-bold mb-0">Order  #210</h3>
 </div>
 <div className=" d-flex justify-content-end col-7" >
            <button
              type="button"
              className=" btn  bg-transparent border rounded-2 btn-xs buttons align-items-center"
            >
              <img src={SmallVan}/>
              <span className="p-2">Assign to a van</span>
            </button> 
            <button
              type="button"
              className=" btn  bg-transparent border rounded-2 btn-xs buttons ms-2  align-items-center"
            >
              <i class="fa-solid fa-location-dot"></i>
              <span className="p-2">Location on map</span>
            </button>
   </div>       
</div>
<ActivityLogBtns/>

</div>
</>
)
}
export default ActivityLog

