import {create} from "zustand";

export const useTravel = create((set) => ({
    open: false,
    selectedTravel: null,
    
    openDialog: (travel : any) => set({ open: true, selectedTravel: travel }),       

    closeDialog: () => set({ open: false, selectedTravel: null }),
}));

