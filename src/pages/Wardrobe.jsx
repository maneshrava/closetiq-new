import { useEffect, useState }
from "react";

import DashboardLayout
from "../layouts/DashboardLayout";

function Wardrobe() {

  return (

    <DashboardLayout>

      <div>

        <h1 className="text-3xl md:text-5xl font-bold mb-10">

          My Wardrobe 👕

        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* YOUR EXISTING CARDS HERE */}

        </div>

      </div>

    </DashboardLayout>

  );

}

export default Wardrobe;
