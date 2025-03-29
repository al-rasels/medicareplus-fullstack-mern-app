import React from "react";

function ReviewCard() {
  return (
    <div className="flex flex-col gap-3 justify-center items-center">
      <div className="flex flex-col gap-4">
        {/* Profile and Rating */}
        <div className="flex justify justify-between">
          <div className="flex gap-2">
            <div className="w-7 h-7 text-center rounded-full bg-red-500">J</div>
            <span>Jess Hopkins</span>
          </div>
          <div className="flex p-1 gap-1 text-orange-600">
            <ion-icon name="star" />
            <ion-icon name="star" />
            <ion-icon name="star" />
            <ion-icon name="star" />
            <ion-icon name="star-half" />
          </div>
        </div>
        <div>
          Gorgeous design! Even more responsive than the previous version. A
          pleasure to use!
        </div>
        <div className="flex justify-between">
          <span>Feb 13, 2021</span>
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
