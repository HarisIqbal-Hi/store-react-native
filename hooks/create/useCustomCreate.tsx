import CustomFormType from "@/types/create/CustomFormType";
import { insetCustomData } from "../../database/create-databse";
import { useState } from "react";


const useCustomCreate = () => {
    const [loading, setLoading] = useState<boolean>(false);
    
    const insert = async (data: CustomFormType) => {
        await insetCustomData(data);
    }

    const update = async (data: CustomFormType) => {
        
    }
}

export default useCustomCreate;
